# Web – RD Prasklice

Statický web s porovnáním současného stavu domu a variant rekonstrukce. Nepotřebuje server ani žádné knihovny.

Online: https://jokekill.github.io/Prasklice/

## Jak web otevřít

- Přímo: dvojklik na `web/index.html`.
- Nebo přes lokální server ze složky `E:\Prasklice`:
  `py -m http.server 8765 --bind 127.0.0.1 --directory web`
  a pak otevřít http://localhost:8765.

## Zveřejnění (GitHub Pages)

Složka `web/` je git repozitář `Jokekill/Prasklice`, GitHub Pages ho zveřejňují z větve `main`.
Po přegenerování webu stačí ve složce `web/` spustit:
```
git add -A
git commit -m "Aktualizace webu"
git push
```
Asi za minutu je nová podoba online.

## Co je kde

| Soubor / složka | Obsah |
|---|---|
| `index.html`, `app.js`, `styl.css` | Samotný web: přehled, stránky verzí, porovnání, prohlížeč obrázků |
| `verze.json` | **Texty k verzím** (název, datum, shrnutí, hlavní body, které výkresy a modely použít). Upravuje se ručně. |
| `data.js` | Vygenerovaná data. **Neupravovat ručně**, přepisuje ho `scripts/20_web.py`. |
| `img/<verze>/` | Výkresy (`vykres_*.webp`), 3D rendery (`ulice`, `dvur`, `rez_1np`, `rez_2np`, `rez_podkrovi`), pohledy dovnitř (`pohled_N`) |
| `pdf/<verze>/` | PDF výkresy ke stažení |

## Přidání nové verze (např. V4)

1. Vytvořit model a výkresy stejně jako u V3:
   - výkresy do `bim/varianty/V4/vykresy/` (SVG + PDF);
   - místnosti do `analysis/mistnosti_V4.json`;
   - poznámky do `bim/varianty/V4/V4_poznamky.md`;
   - pohledy dovnitř `V4_pohled_*.png`;
   - model `blender/Prasklice_V4_rekonstrukce.blend` s kolekcí `V4_Rekonstrukce`.
2. Spustit generátor i s rendery:
   ```
   uv run --no-project python scripts/20_web.py --rendery
   ```
   Složka `V4` se přidá automaticky, výchozí texty se vezmou z poznámek.
3. Volitelně doplnit ve `verze.json` shrnutí a hlavní body V4 (zkopírovat záznam V3) a spustit generátor znovu bez `--rendery`.
4. Zveřejnit (viz výše).

Místnosti, které se nemají počítat do součtů ploch, se zapisují do `verze.json` pod `mimo_soucty`: klíč `"N.01"` platí pro všechny verze, klíč `"V4:3.01"` jen pro jednu verzi.

Barvy verzí jsou ve `styl.css` připravené až do V6 (`--c-V4` …). Pro další verze stačí přidat řádek.

## Skripty

- `scripts/20_web.py` sestaví web:
  - výkresy SVG → PNG (headless Edge) → oříznuté WebP;
  - kopie PDF;
  - plochy místností;
  - poznámky;
  - `data.js`.
  Obrázky, které jsou aktuální, přeskočí.
- `scripts/b13_web_rendery.py` vytvoří v Blenderu 3D obrázky verze (z ulice, ze dvora, řezy po podlažích bez střechy).
- `scripts/b14_web_obrazky.py` ořízne bílé okraje a převede obrázky na WebP (v Blenderu, přes numpy).

Blender se vždy spouští normálně, **nikdy s `--factory-startup`**.
