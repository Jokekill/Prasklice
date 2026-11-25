/* Prasklice – přehled verzí. Data: window.WEB z data.js (generuje scripts/20_web.py). Bez knihoven, funguje i z disku. */
(() => {
  "use strict";
  const W = window.WEB;
  const V = W.verze;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const num = (x, d = 1) => Number(x).toLocaleString("cs-CZ", { minimumFractionDigits: d, maximumFractionDigits: d });
  const col = v => `var(--c-${v.id}, #888)`;
  const dot = v => `<i class="dot" style="background:${col(v)}"></i>`;
  const byId = id => V.find(v => v.id === id);
  const inc = rs => rs.filter(r => !r.mimo);                       // místnosti započítané do součtů
  const sum = rs => inc(rs).reduce((a, r) => a + r.a, 0);
  const floorOf = (v, kod) => (v.patra || []).find(p => p.kod === kod);

  $("#projekt").textContent = W.projekt || "RD Prasklice";
  $("#podtitul").textContent = W.podtitul || "";
  $("#gen").textContent = `Vygenerováno ${W.generovano} skriptem scripts/20_web.py`;

  // ---------------------------------------------------------------- navigace
  function nav(active) {
    const items = [["prehled", "Přehled", ""]].concat(V.map(v => [`v/${v.id}`, v.nazev, dot(v)])).concat([["porovnani", "Porovnání", ""]]);
    $("#nav").innerHTML = items.map(([h, t, d]) =>
      `<a href="#${h}" class="${active === h ? "on" : ""}">${d}${esc(t)}</a>`).join("");
  }

  function route() {
    const parts = (location.hash.slice(1) || "prehled").split("/");
    window.scrollTo(0, 0);
    if (parts[0] === "v" && byId(parts[1])) { nav(`v/${parts[1]}`); pageVersion(byId(parts[1]), parts[2]); }
    else if (parts[0] === "porovnani") { nav("porovnani"); pageCompare(parts[1], parts[2]); }
    else { nav("prehled"); pageHome(); }
  }
  window.addEventListener("hashchange", route);

  // ---------------------------------------------------------------- společné kousky
  const groups = {};      // skupiny obrázků pro prohlížeč
  let gid = 0;
  function shot(group, idx, src, alt, cls = "") {
    return `<div class="shot ${cls}" data-g="${group}" data-i="${idx}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></div>`;
  }
  function newGroup(items) { const g = "g" + (gid++); groups[g] = items; return g; }

  function roomsTable(rooms) {
    if (!rooms.length) return `<p class="muted">Místnosti nejsou v modelu zadané.</p>`;
    const sts = [...new Set(rooms.map(r => r.st))];
    let body = "";
    for (const st of sts) {
      const rs = rooms.filter(r => r.st === st);
      if (sts.length > 1) body += `<tr class="st"><td colspan="4">${esc(W.podlazi[st] || st)} · podlaha ${r0(rs[0].z)}</td></tr>`;
      body += rs.map(r => r.mimo
        ? `<tr class="mimo" title="${esc(r.mimo)}"><td class="c">${esc(r.c)}</td><td>${esc(r.n)} <span class="tag">mimo součty</span></td><td class="n">(${num(r.a, 2)})</td><td class="n">${vyska(r)}</td></tr>`
        : `<tr><td class="c">${esc(r.c)}</td><td>${esc(r.n)}</td><td class="n">${num(r.a, 2)}</td><td class="n">${vyska(r)}</td></tr>`).join("");
    }
    const mimo = rooms.filter(r => r.mimo);
    return `<table class="rooms"><thead><tr><th>Č.</th><th>Místnost</th><th class="n">m²</th><th class="n">Výška</th></tr></thead>
      <tbody>${body}</tbody><tfoot><tr><td></td><td>Celkem ${mist(inc(rooms).length)}${mimo.length ? " (bez " + mimo.map(r => esc(r.c)).join(", ") + ")" : ""}</td><td class="n">${num(sum(rooms), 2)}</td><td></td></tr></tfoot></table>
      ${mimo.map(r => `<p class="mimo-note"><b>${esc(r.c)} ${esc(r.n)}:</b> ${esc(r.mimo)}</p>`).join("")}`;
  }
  const mist = n => `${n} ${n === 1 ? "místnost" : n >= 2 && n <= 4 ? "místnosti" : "místností"}`;
  const r0 = z => (z >= 0 ? "+" : "−") + num(Math.abs(z), 2);
  function vyska(r) {
    if (/do krovu/i.test(r.n)) return "do krovu";
    if (r.st === "PUDA") return `${num(r.h, 2)} <small>max</small>`;
    return num(r.h, 2);
  }

  function statsOf(v) {
    const np2 = inc(v.mistnosti || []).filter(r => r.st === "NP2");
    const pu = inc(v.mistnosti || []).filter(r => r.st === "PUDA");
    return { np2: sum(np2), npn: np2.length, pu: sum(pu), pun: pu.length };
  }

  // ---------------------------------------------------------------- přehled
  function pageHome() {
    const last = V[V.length - 1];
    const g = newGroup(V.filter(v => v.rendery.ulice).map(v => ({ src: v.rendery.ulice, title: v.nazev, sub: "Pohled z ulice", transp: true })));
    $("#app").innerHTML = `
      <div class="hero">
        <div>
          <h1>${esc(W.projekt)} – ${esc(W.podtitul)}</h1>
          <p>Současný stav domu podle laserového skenu a navržené varianty úpravy patra a podkroví.
          Každá verze má vlastní stránku s patry (výkres, 3D řez a seznam místností), řezy, pohledy dovnitř, PDF ke stažení a poznámky.</p>
          <p>V části <a href="#porovnani">Porovnání</a> jsou stejná patra všech verzí vedle sebe. Kliknutím na obrázek se otevře
          prohlížeč se zoomem, šipkami se v něm přepíná mezi verzemi.</p>
        </div>
        ${last.rendery.ulice ? shot(g, V.filter(v => v.rendery.ulice).indexOf(last), last.rendery.ulice, last.nazev, "") : ""}
      </div>
      <section>
        <div class="sec-h"><h2>Verze</h2><span class="muted">${V.length} verzí · plochy jsou součty podlahových ploch místností z modelu</span></div>
        <div class="cards">${V.map(v => {
          const s = statsOf(v);
          return `<a class="card vcard" href="#v/${v.id}">
            <div class="img">${(v.rendery.rez_2np || v.rendery.ulice) ? `<img src="${esc(v.rendery.rez_2np || v.rendery.ulice)}" alt="" loading="lazy">` : ""}</div>
            <div class="body">
              <h3>${dot(v)}${esc(v.nazev)} <span class="badge">${esc(v.typ || "")}</span></h3>
              <p>${esc(v.shrnuti || "")}</p>
              <div class="stats">
                <div class="stat"><b>${num(s.np2, 1)} m²</b><span>2.NP · ${s.npn} místností</span></div>
                <div class="stat"><b>${s.pun ? num(s.pu, 1) + " m²" : "–"}</b><span>podkroví · ${s.pun} místností</span></div>
                <div class="stat"><b>${v.vykresy.length}</b><span>výkresů</span></div>
              </div>
            </div></a>`;
        }).join("")}</div>
      </section>
      <section>
        <div class="sec-h"><h2>Plochy v číslech</h2><a href="#porovnani">Porovnat patra vedle sebe →</a></div>
        <div class="card pad">${summaryTable(V)}</div>
      </section>`;
  }

  function summaryTable(vs) {
    const rows = [
      ["1.NP – plocha místností", v => ar(v, ["NP1"])],
      ["2.NP – plocha místností", v => ar(v, ["NP2"])],
      ["2.NP – počet místností", v => cnt(v, ["NP2"])],
      ["Podkroví – plocha", v => ar(v, ["PUDA"])],
      ["Podkroví – počet místností", v => cnt(v, ["PUDA"])],
      ["2.NP + podkroví celkem", v => ar(v, ["NP2", "PUDA"])],
    ];
    function ar(v, sts) { const rs = inc(v.mistnosti).filter(r => sts.includes(r.st)); return rs.length ? num(sum(rs), 1) + " m²" : "–"; }
    function cnt(v, sts) { const n = inc(v.mistnosti).filter(r => sts.includes(r.st)).length; return n || "–"; }
    return `<table class="sum"><thead><tr><th></th>${vs.map(v => `<th>${dot(v)} ${esc(v.nazev)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(([t, f]) => `<tr><td>${t}</td>${vs.map(v => `<td>${f(v)}</td>`).join("")}</tr>`).join("")}</tbody></table>
      <p class="muted" style="margin:10px 0 0;font-size:13px">Podkroví: půdorysná plocha včetně míst pod šikmou střechou (plocha s výškou ≥ 1,9 m je menší, viz poznámky k verzi).
      Otvory pro schody a volný prostor do krovu se do podkroví nepočítají.
      ${Object.entries(W.mimo_soucty || {}).map(([c, t]) => `<br>Místnost ${esc(c)} se do žádného součtu nepočítá: ${esc(t)}`).join("")}</p>`;
  }

  // ---------------------------------------------------------------- stránka verze
  function pageVersion(v, floorCode) {
    const patra = v.patra || [];
    const fl = patra.find(p => p.kod === floorCode) || patra.find(p => p.kod === "P03") || patra[0];
    const extItems = [["ulice", "Pohled z ulice"], ["dvur", "Pohled ze dvora"]].filter(([k]) => v.rendery[k])
      .map(([k, t]) => ({ src: v.rendery[k], title: `${v.nazev} – ${t}`, sub: "render z modelu", transp: true }));
    const gExt = newGroup(extItems);
    const plans = patra.filter(p => p.vykres);
    const gPlan = newGroup(plans.map(p => ({ src: p.vykres.src, title: `${p.vykres.kod} ${p.vykres.nazev}`, sub: v.nazev + (p.zdedeno ? " · beze změny, výkres současného stavu" : ""), pdf: p.vykres.pdf })));
    const g3d = newGroup(patra.filter(p => p.rez3d).map(p => ({ src: p.rez3d, title: `${v.nazev} – 3D řez: ${p.nazev}`, sub: "axonometrie, střecha skrytá", transp: true })));
    const other = v.vykresy.filter(x => !x.kod.startsWith("P"));
    const gOth = newGroup(other.map(x => ({ src: x.src, title: `${x.kod} ${x.nazev}`, sub: v.nazev, pdf: x.pdf })));
    const gPoh = newGroup(v.pohledy.map(p => ({ src: p.src, title: p.nazev, sub: v.nazev + " · pohled z modelu" })));

    const floorHtml = fl ? (() => {
      const pi = plans.indexOf(fl);
      const i3 = patra.filter(p => p.rez3d).indexOf(fl);
      return `<div class="floor">
        <div class="card drawing">
          ${fl.vykres ? `<div class="dtitle"><strong>${esc(fl.vykres.kod)} ${esc(fl.vykres.nazev)}</strong>
              ${fl.vykres.pdf ? `<a class="btn" href="${esc(fl.vykres.pdf)}" target="_blank" rel="noopener">PDF A3</a>` : ""}</div>
            ${fl.zdedeno ? `<div class="note">V této verzi beze změny – zobrazen výkres současného stavu.</div>` : ""}
            ${shot(gPlan, pi, fl.vykres.src, fl.vykres.nazev)}` : `<p class="muted">Výkres tohoto podlaží není.</p>`}
        </div>
        <div class="side">
          ${fl.rez3d ? `<div class="card pad"><div class="dtitle"><strong>3D řez – ${esc(fl.nazev)}</strong></div>${shot(g3d, i3, fl.rez3d, "3D řez", "")}</div>` : ""}
          <div class="card pad"><div class="dtitle"><strong>Místnosti – ${esc(fl.nazev)}</strong></div>${roomsTable(fl.mistnosti)}</div>
        </div>
      </div>`;
    })() : "";

    $("#app").innerHTML = `
      <div class="vhead">
        <div class="txt">
          <h1>${dot(v)}${esc(v.nazev)} <span class="badge">${esc(v.typ || "")}</span> <span class="badge">${esc(v.datum || "")}</span></h1>
          <p class="lead">${esc(v.shrnuti || "")}</p>
          ${v.body && v.body.length ? `<ul>${v.body.map(b => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
        </div>
        <div class="ext">${extItems.map((e, i) => `<figure>${shot(gExt, i, e.src, e.title)}<figcaption>${esc(e.title.split("– ")[1] || e.title)}</figcaption></figure>`).join("")}</div>
      </div>
      <section id="patra">
        <div class="sec-h"><h2>Patra</h2>
          <div class="seg">${patra.map(p => `<button class="${p === fl ? "on" : ""}" data-floor="${p.kod}">${esc(p.nazev)}</button>`).join("")}</div>
        </div>
        ${floorHtml}
      </section>
      ${other.length ? `<section><div class="sec-h"><h2>Řezy a pohledy</h2><span class="muted">${other.length} výkresů</span></div>
        <div class="grid">${other.map((x, i) => `<div class="card tile">${shot(gOth, i, x.src, x.nazev)}
          <div class="meta"><div><b>${esc(x.kod)}</b>${esc(x.nazev)}</div>${x.pdf ? `<a class="btn" href="${esc(x.pdf)}" target="_blank" rel="noopener">PDF</a>` : ""}</div></div>`).join("")}</div></section>` : ""}
      ${v.pohledy.length ? `<section><div class="sec-h"><h2>Pohledy dovnitř</h2></div>
        <div class="grid">${v.pohledy.map((p, i) => `<div class="card tile photo">${shot(gPoh, i, p.src, p.nazev)}<div class="meta"><div>${esc(p.nazev)}</div></div></div>`).join("")}</div></section>` : ""}
      <section><div class="sec-h"><h2>PDF ke stažení</h2><span class="muted">výkresy A3, měřítko 1:100</span></div>
        <div class="card pad pdfs">${v.vykresy.filter(x => x.pdf).map(x => `<a class="btn" href="${esc(x.pdf)}" target="_blank" rel="noopener">${esc(x.kod)} · ${esc(x.nazev)}</a>`).join("") || `<span class="muted">Žádné PDF.</span>`}</div></section>
      ${v.poznamky ? `<section><details class="card notes" open><summary>Poznámky k verzi</summary><div class="md">${v.poznamky}</div></details></section>` : ""}`;

    $("#app").querySelectorAll("[data-floor]").forEach(b => b.addEventListener("click", () => {
      history.replaceState(null, "", `#v/${v.id}/${b.dataset.floor}`);
      const y = window.scrollY;
      pageVersion(v, b.dataset.floor);
      window.scrollTo(0, y);
    }));
  }

  // ---------------------------------------------------------------- porovnání
  const WHAT = [["P02", "1.NP"], ["P03", "2.NP"], ["P04", "Podkroví / půda"], ["ulice", "Z ulice"], ["dvur", "Ze dvora"]];
  const hidden = new Set(JSON.parse(localStorage.getItem("prasklice_skryte") || "[]"));
  function pageCompare(what, mode) {
    what = WHAT.some(w => w[0] === what) ? what : "P03";
    mode = mode === "3d" ? "3d" : "vykres";
    const isFloor = what.startsWith("P");
    const rz = { P02: "rez_1np", P03: "rez_2np", P04: "rez_podkrovi" }[what];
    const vs = V.filter(v => !hidden.has(v.id));
    const items = [];
    const panels = vs.map(v => {
      let src = null, note = "", title = "", pdf = null, transp = false;
      const fl = floorOf(v, what);
      if (!isFloor) { src = v.rendery[what]; title = WHAT.find(w => w[0] === what)[1]; transp = true; }
      else if (mode === "3d") { src = v.rendery[rz]; title = "3D řez"; transp = true; }
      else if (fl && fl.vykres) { src = fl.vykres.src; title = `${fl.vykres.kod} ${fl.vykres.nazev}`; pdf = fl.vykres.pdf; if (fl.zdedeno) note = "Beze změny – výkres současného stavu."; }
      const idx = src ? items.push({ src, title: `${v.nazev} – ${title}`, sub: note, pdf, transp }) - 1 : -1;
      const area = fl ? `${num(sum(fl.mistnosti), 1)} m² · ${inc(fl.mistnosti).length} míst.` : "";
      return { v, src, idx, note, area, transp };
    });
    const g = newGroup(items);
    const fl0 = isFloor ? WHAT.find(w => w[0] === what)[1] : "";
    $("#app").innerHTML = `
      <div class="sec-h"><h1 style="margin:0">Porovnání verzí</h1><span class="muted">kliknutím otevřete prohlížeč, šipkami ← → přepínáte mezi verzemi</span></div>
      <div class="card ctrl">
        <div><label class="lbl">Co</label><span class="seg">${WHAT.map(([k, t]) => `<button data-what="${k}" class="${k === what ? "on" : ""}">${t}</button>`).join("")}</span></div>
        ${isFloor ? `<div><label class="lbl">Zobrazit</label><span class="seg">
          <button data-mode="vykres" class="${mode === "vykres" ? "on" : ""}">Výkres</button>
          <button data-mode="3d" class="${mode === "3d" ? "on" : ""}">3D řez</button></span></div>` : ""}
        <div><label class="lbl">Verze</label><span class="chips">${V.map(v => `<label class="chip ${hidden.has(v.id) ? "off" : ""}">
          <input type="checkbox" data-ver="${v.id}" ${hidden.has(v.id) ? "" : "checked"}>${dot(v)}${esc(v.kratky || v.nazev)}</label>`).join("")}</span></div>
      </div>
      <div class="cmp">${panels.map(p => `<div class="card panel ${p.transp ? "r3d" : ""}">
          <h3>${dot(p.v)}<a href="#v/${p.v.id}${isFloor ? "/" + what : ""}" style="color:inherit;text-decoration:none">${esc(p.v.nazev)}</a><small class="muted">${esc(p.area)}</small></h3>
          ${p.note ? `<div class="note">${esc(p.note)}</div>` : ""}
          ${p.src ? shot(g, p.idx, p.src, p.v.nazev) : `<div class="empty">V této verzi není</div>`}
        </div>`).join("")}</div>
      ${isFloor ? `<section style="margin-top:28px"><div class="sec-h"><h2>Místnosti – ${esc(fl0)}</h2></div>
        <div class="roomcmp">${vs.map(v => { const fl = floorOf(v, what); return `<div class="card pad"><h3>${dot(v)}${esc(v.nazev)}</h3>${fl ? roomsTable(fl.mistnosti) : `<p class="muted">–</p>`}</div>`; }).join("")}</div></section>` : ""}
      <section style="margin-top:28px"><div class="sec-h"><h2>Plochy v číslech</h2></div><div class="card pad">${summaryTable(vs)}</div></section>`;

    $("#app").querySelectorAll("[data-what]").forEach(b => b.addEventListener("click", () => { location.hash = `porovnani/${b.dataset.what}/${mode}`; }));
    $("#app").querySelectorAll("[data-mode]").forEach(b => b.addEventListener("click", () => { location.hash = `porovnani/${what}/${b.dataset.mode}`; }));
    $("#app").querySelectorAll("[data-ver]").forEach(c => c.addEventListener("change", () => {
      c.checked ? hidden.delete(c.dataset.ver) : hidden.add(c.dataset.ver);
      localStorage.setItem("prasklice_skryte", JSON.stringify([...hidden]));
      pageCompare(what, mode);
    }));
  }

  // ---------------------------------------------------------------- prohlížeč se zoomem
  const lb = $("#lb"), stage = $("#lb-stage"), img = $("#lb-img");
  let L = { items: [], i: 0, s: 1, x: 0, y: 0, fit: 1 };
  document.addEventListener("click", e => {
    const sh = e.target.closest(".shot[data-g]");
    if (!sh) return;
    open(groups[sh.dataset.g], +sh.dataset.i);
  });
  function open(items, i) {
    L.items = items; lb.hidden = false; document.body.style.overflow = "hidden"; show(i);
  }
  function close() { lb.hidden = true; document.body.style.overflow = ""; img.removeAttribute("src"); }
  function show(i) {
    L.i = (i + L.items.length) % L.items.length;
    const it = L.items[L.i];
    $("#lb-title").textContent = it.title || "";
    $("#lb-sub").textContent = it.sub || "";
    const pdf = $("#lb-pdf");
    pdf.hidden = !it.pdf; if (it.pdf) pdf.href = it.pdf;
    $("#lb-count").textContent = L.items.length > 1 ? `${L.i + 1} / ${L.items.length}` : "";
    lb.querySelectorAll(".lb-nav").forEach(b => b.hidden = L.items.length < 2);
    img.classList.toggle("transp", !!it.transp);
    img.onload = fit;
    img.src = it.src;
    if (img.complete && img.naturalWidth) fit();
  }
  function apply() { img.style.transform = `translate(${L.x}px, ${L.y}px) scale(${L.s})`; }
  function fit() {
    const r = stage.getBoundingClientRect(), w = img.naturalWidth, h = img.naturalHeight;
    if (!w) return;
    L.fit = Math.min((r.width - 40) / w, (r.height - 40) / h, 1.5);
    L.s = L.fit; L.x = (r.width - w * L.s) / 2; L.y = (r.height - h * L.s) / 2; apply();
  }
  function zoomAt(f, cx, cy) {
    const ns = Math.min(Math.max(L.s * f, L.fit * 0.5), 8);
    L.x = cx - (cx - L.x) * ns / L.s; L.y = cy - (cy - L.y) * ns / L.s; L.s = ns; apply();
  }
  const center = () => { const r = stage.getBoundingClientRect(); return [r.width / 2, r.height / 2]; };
  stage.addEventListener("wheel", e => {
    e.preventDefault();
    const r = stage.getBoundingClientRect();
    zoomAt(Math.exp(-e.deltaY * 0.0015), e.clientX - r.left, e.clientY - r.top);
  }, { passive: false });
  const ptrs = new Map(); let pinch = null;
  stage.addEventListener("pointerdown", e => { stage.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); stage.classList.add("drag"); });
  stage.addEventListener("pointermove", e => {
    if (!ptrs.has(e.pointerId)) return;
    const [px, py] = ptrs.get(e.pointerId);
    ptrs.set(e.pointerId, [e.clientX, e.clientY]);
    if (ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      const r = stage.getBoundingClientRect();
      if (pinch) zoomAt(d / pinch, (a[0] + b[0]) / 2 - r.left, (a[1] + b[1]) / 2 - r.top);
      pinch = d;
    } else { L.x += e.clientX - px; L.y += e.clientY - py; apply(); }
  });
  const up = e => { ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch = null; if (!ptrs.size) stage.classList.remove("drag"); };
  stage.addEventListener("pointerup", up); stage.addEventListener("pointercancel", up);
  stage.addEventListener("dblclick", e => {
    const r = stage.getBoundingClientRect();
    if (L.s > L.fit * 1.5) fit(); else zoomAt(2.5, e.clientX - r.left, e.clientY - r.top);
  });
  lb.addEventListener("click", e => {
    const a = e.target.closest("[data-act]"); if (!a) return;
    const act = a.dataset.act;
    if (act === "close") close();
    else if (act === "prev") show(L.i - 1);
    else if (act === "next") show(L.i + 1);
    else if (act === "fit") fit();
    else if (act === "in") zoomAt(1.4, ...center());
    else if (act === "out") zoomAt(1 / 1.4, ...center());
  });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(L.i - 1);
    else if (e.key === "ArrowRight") show(L.i + 1);
    else if (e.key === "+" || e.key === "=") zoomAt(1.4, ...center());
    else if (e.key === "-") zoomAt(1 / 1.4, ...center());
    else if (e.key === "0") fit();
  });
  window.addEventListener("resize", () => { if (!lb.hidden) fit(); });

  route();
})();
