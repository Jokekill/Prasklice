// vygenerováno skriptem scripts/20_web.py – neupravovat ručně (texty jsou ve web/verze.json)
window.WEB = {
 "projekt": "RD Prasklice",
 "podtitul": "Rekonstrukce patra a podkroví – přehled variant",
 "mimo_soucty": {
  "N.01": "Samostatný prostor nad průjezdem / garáží – bude vyžadovat úplně jiné řešení než zbytek domu, proto se nezapočítává do součtů ploch."
 },
 "generovano": "25. 11. 2026 12:51",
 "podlazi": {
  "SK": "Sklep",
  "PR": "Průjezd",
  "NP1": "1.NP",
  "NADPR": "Nad průjezdem",
  "NP2": "2.NP",
  "PUDA": "Podkroví"
 },
 "verze": [
  {
   "id": "stav",
   "nazev": "Současný stav",
   "kratky": "Stav",
   "typ": "zaměření",
   "datum": "24. 11. 2026",
   "shrnuti": "Model domu podle laserového skenu. Patro je jeden velký prostor pod hliněným stropem, půda nad ním je nevyužitá.",
   "body": [
    "Přízemí: pokoje A, B, D, chodba a pět místností v zadním traktu, průjezd / garáž a sklep.",
    "2.NP: jeden prostor 2.01 se světlou výškou asi 2,19 m pod hliněným stropem.",
    "Půda: podlaha +5,32, pod hřebenem asi 2,98 m.",
    "Nad zadním traktem je nízká pultová střecha."
   ],
   "vykresy": [
    {
     "kod": "P01",
     "nazev": "Půdorys sklepa (řez v −1,30)",
     "src": "img/stav/vykres_P01.webp",
     "pdf": "pdf/stav/P01_Pudorys_sklep.pdf"
    },
    {
     "kod": "P02",
     "nazev": "Půdorys 1.NP a průjezdu (řez v +1,10)",
     "src": "img/stav/vykres_P02.webp",
     "pdf": "pdf/stav/P02_Pudorys_1NP.pdf"
    },
    {
     "kod": "P03",
     "nazev": "Půdorys 2.NP a podlaží nad průjezdem (řez v +4,00)",
     "src": "img/stav/vykres_P03.webp",
     "pdf": "pdf/stav/P03_Pudorys_2NP.pdf"
    },
    {
     "kod": "P04",
     "nazev": "Půdorys půdy (řez v +6,40)",
     "src": "img/stav/vykres_P04.webp",
     "pdf": "pdf/stav/P04_Pudorys_puda.pdf"
    },
    {
     "kod": "R01",
     "nazev": "Příčný řez x = 2,05 (průjezd), pohled k východu",
     "src": "img/stav/vykres_R01.webp",
     "pdf": "pdf/stav/R01_Pricny_rez_x_2_05_pruchod.pdf"
    },
    {
     "kod": "R02",
     "nazev": "Příčný řez x = 14,05, pohled k východu",
     "src": "img/stav/vykres_R02.webp",
     "pdf": "pdf/stav/R02_Pricny_rez_x_14_05.pdf"
    },
    {
     "kod": "R03",
     "nazev": "Podélný řez y = 3,50, pohled k severu",
     "src": "img/stav/vykres_R03.webp",
     "pdf": "pdf/stav/R03_Podelny_rez_y_3_5.pdf"
    },
    {
     "kod": "V01",
     "nazev": "Pohled uliční (jih)",
     "src": "img/stav/vykres_V01.webp",
     "pdf": "pdf/stav/V01_Pohled_ulicni_jih.pdf"
    },
    {
     "kod": "V02",
     "nazev": "Pohled dvorní (sever)",
     "src": "img/stav/vykres_V02.webp",
     "pdf": "pdf/stav/V02_Pohled_dvorni_sever.pdf"
    },
    {
     "kod": "V03",
     "nazev": "Pohled východní",
     "src": "img/stav/vykres_V03.webp",
     "pdf": "pdf/stav/V03_Pohled_vychodni.pdf"
    }
   ],
   "pohledy": [],
   "mistnosti": [
    {
     "c": "0.01",
     "n": "Sklep",
     "st": "SK",
     "a": 14.31,
     "h": 1.98,
     "z": -2.36
    },
    {
     "c": "P.01",
     "n": "Průjezd / garáž",
     "st": "PR",
     "a": 23.12,
     "h": 3.53,
     "z": -1.23
    },
    {
     "c": "1.01",
     "n": "Pokoj A",
     "st": "NP1",
     "a": 24.08,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.02",
     "n": "Pokoj B",
     "st": "NP1",
     "a": 30.31,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.03",
     "n": "Chodba",
     "st": "NP1",
     "a": 12.82,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.04",
     "n": "Pokoj D",
     "st": "NP1",
     "a": 13.85,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.06",
     "n": "Zadní trakt 1",
     "st": "NP1",
     "a": 16.02,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.07",
     "n": "Zadní trakt 2",
     "st": "NP1",
     "a": 5.42,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.08",
     "n": "Zadní trakt 3",
     "st": "NP1",
     "a": 8.49,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.08a",
     "n": "WC",
     "st": "NP1",
     "a": 2.1,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.09",
     "n": "Zadní trakt 4",
     "st": "NP1",
     "a": 16.55,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.10",
     "n": "Zadní trakt 5",
     "st": "NP1",
     "a": 14.71,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "N.01",
     "n": "Místnost nad průjezdem",
     "st": "NADPR",
     "a": 24.38,
     "h": 2.62,
     "z": 2.6,
     "mimo": "Samostatný prostor nad průjezdem / garáží – bude vyžadovat úplně jiné řešení než zbytek domu, proto se nezapočítává do součtů ploch."
    },
    {
     "c": "2.01",
     "n": "Patro (jeden prostor)",
     "st": "NP2",
     "a": 88.95,
     "h": 2.19,
     "z": 3.03
    }
   ],
   "poznamky": null,
   "rendery": {
    "ulice": "img/stav/ulice.webp",
    "dvur": "img/stav/dvur.webp",
    "rez_1np": "img/stav/rez_1np.webp",
    "rez_2np": "img/stav/rez_2np.webp",
    "rez_podkrovi": "img/stav/rez_podkrovi.webp"
   },
   "patra": [
    {
     "kod": "P01",
     "nazev": "Sklep",
     "vykres": {
      "kod": "P01",
      "nazev": "Půdorys sklepa (řez v −1,30)",
      "src": "img/stav/vykres_P01.webp",
      "pdf": "pdf/stav/P01_Pudorys_sklep.pdf"
     },
     "zdedeno": false,
     "rez3d": null,
     "mistnosti": [
      {
       "c": "0.01",
       "n": "Sklep",
       "st": "SK",
       "a": 14.31,
       "h": 1.98,
       "z": -2.36
      }
     ]
    },
    {
     "kod": "P02",
     "nazev": "1.NP – přízemí",
     "vykres": {
      "kod": "P02",
      "nazev": "Půdorys 1.NP a průjezdu (řez v +1,10)",
      "src": "img/stav/vykres_P02.webp",
      "pdf": "pdf/stav/P02_Pudorys_1NP.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/stav/rez_1np.webp",
     "mistnosti": [
      {
       "c": "P.01",
       "n": "Průjezd / garáž",
       "st": "PR",
       "a": 23.12,
       "h": 3.53,
       "z": -1.23
      },
      {
       "c": "1.01",
       "n": "Pokoj A",
       "st": "NP1",
       "a": 24.08,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.02",
       "n": "Pokoj B",
       "st": "NP1",
       "a": 30.31,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.03",
       "n": "Chodba",
       "st": "NP1",
       "a": 12.82,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.04",
       "n": "Pokoj D",
       "st": "NP1",
       "a": 13.85,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.06",
       "n": "Zadní trakt 1",
       "st": "NP1",
       "a": 16.02,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.07",
       "n": "Zadní trakt 2",
       "st": "NP1",
       "a": 5.42,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.08",
       "n": "Zadní trakt 3",
       "st": "NP1",
       "a": 8.49,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.08a",
       "n": "WC",
       "st": "NP1",
       "a": 2.1,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.09",
       "n": "Zadní trakt 4",
       "st": "NP1",
       "a": 16.55,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.10",
       "n": "Zadní trakt 5",
       "st": "NP1",
       "a": 14.71,
       "h": 2.44,
       "z": 0.0
      }
     ]
    },
    {
     "kod": "P03",
     "nazev": "2.NP – patro",
     "vykres": {
      "kod": "P03",
      "nazev": "Půdorys 2.NP a podlaží nad průjezdem (řez v +4,00)",
      "src": "img/stav/vykres_P03.webp",
      "pdf": "pdf/stav/P03_Pudorys_2NP.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/stav/rez_2np.webp",
     "mistnosti": [
      {
       "c": "N.01",
       "n": "Místnost nad průjezdem",
       "st": "NADPR",
       "a": 24.38,
       "h": 2.62,
       "z": 2.6,
       "mimo": "Samostatný prostor nad průjezdem / garáží – bude vyžadovat úplně jiné řešení než zbytek domu, proto se nezapočítává do součtů ploch."
      },
      {
       "c": "2.01",
       "n": "Patro (jeden prostor)",
       "st": "NP2",
       "a": 88.95,
       "h": 2.19,
       "z": 3.03
      }
     ]
    },
    {
     "kod": "P04",
     "nazev": "Podkroví / půda",
     "vykres": {
      "kod": "P04",
      "nazev": "Půdorys půdy (řez v +6,40)",
      "src": "img/stav/vykres_P04.webp",
      "pdf": "pdf/stav/P04_Pudorys_puda.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/stav/rez_podkrovi.webp",
     "mistnosti": []
    }
   ]
  },
  {
   "id": "V1",
   "nazev": "Varianta 1",
   "kratky": "V1",
   "typ": "studie",
   "datum": "24. 11. 2026",
   "shrnuti": "Obývák s kuchyní otevřený do krovu, přes něj lávka pod hřebenem mezi západní a východní půdou. Schodiště na půdu je v obýváku.",
   "body": [
    "Hliněný strop nad 2.NP se bourá, nový strop je o 0,43 m výš (místnosti 2.NP mají 2,50 m).",
    "2.01 kuchyň + obývák (31,6 m²) do krovu, pod hřebenem 5,27 m.",
    "Na západě pokoj 2.02 a předsíň / šatna 2.03, na východě pokoj 2.04 a koupelna 2.05.",
    "Půda slouží jako úložný prostor nebo na spaní (≥ 1,9 m jen v pásu asi 1,5 m u hřebene).",
    "Schodiště z 1.NP do patra v této variantě není."
   ],
   "vykresy": [
    {
     "kod": "P03",
     "nazev": "Půdorys 2.NP – návrh (řez v +4,00)",
     "src": "img/V1/vykres_P03.webp",
     "pdf": "pdf/V1/V1_P03_Pudorys_2NP.pdf"
    },
    {
     "kod": "P04",
     "nazev": "Půdorys podkroví – návrh (řez v +6,50)",
     "src": "img/V1/vykres_P04.webp",
     "pdf": "pdf/V1/V1_P04_Pudorys_podkrovi.pdf"
    },
    {
     "kod": "R01",
     "nazev": "Příčný řez x = 12,00 – obývák, lávka, schodiště",
     "src": "img/V1/vykres_R01.webp",
     "pdf": "pdf/V1/V1_R01_Pricny_rez_x_12_0_obyvak.pdf"
    },
    {
     "kod": "R02",
     "nazev": "Příčný řez x = 7,00 – pokoj, šatna",
     "src": "img/V1/vykres_R02.webp",
     "pdf": "pdf/V1/V1_R02_Pricny_rez_x_7_0_pokoj_satna.pdf"
    },
    {
     "kod": "R03",
     "nazev": "Podélný řez y = 3,20 – lávka (ochoz)",
     "src": "img/V1/vykres_R03.webp",
     "pdf": "pdf/V1/V1_R03_Podelny_rez_y_3_2_lavka.pdf"
    }
   ],
   "pohledy": [
    {
     "src": "img/V1/pohled_1.webp",
     "nazev": "Obývák s lávkou pod hřebenem"
    }
   ],
   "mistnosti": [
    {
     "c": "0.01",
     "n": "Sklep",
     "st": "SK",
     "a": 14.31,
     "h": 1.98,
     "z": -2.36
    },
    {
     "c": "P.01",
     "n": "Průjezd / garáž",
     "st": "PR",
     "a": 23.12,
     "h": 3.53,
     "z": -1.23
    },
    {
     "c": "1.01",
     "n": "Pokoj A",
     "st": "NP1",
     "a": 24.08,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.02",
     "n": "Pokoj B",
     "st": "NP1",
     "a": 30.31,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.03",
     "n": "Chodba",
     "st": "NP1",
     "a": 12.82,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.04",
     "n": "Pokoj D",
     "st": "NP1",
     "a": 13.85,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.06",
     "n": "Zadní trakt 1",
     "st": "NP1",
     "a": 16.02,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.07",
     "n": "Zadní trakt 2",
     "st": "NP1",
     "a": 5.42,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.08",
     "n": "Zadní trakt 3",
     "st": "NP1",
     "a": 8.49,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.08a",
     "n": "WC",
     "st": "NP1",
     "a": 2.1,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.09",
     "n": "Zadní trakt 4",
     "st": "NP1",
     "a": 16.55,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.10",
     "n": "Zadní trakt 5",
     "st": "NP1",
     "a": 14.71,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "N.01",
     "n": "Místnost nad průjezdem",
     "st": "NADPR",
     "a": 24.38,
     "h": 2.62,
     "z": 2.6,
     "mimo": "Samostatný prostor nad průjezdem / garáží – bude vyžadovat úplně jiné řešení než zbytek domu, proto se nezapočítává do součtů ploch."
    },
    {
     "c": "2.01",
     "n": "Kuchyň + obývací pokoj (do krovu)",
     "st": "NP2",
     "a": 31.56,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.02",
     "n": "Pokoj",
     "st": "NP2",
     "a": 14.74,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.03",
     "n": "Předsíň / šatna (vstup z půdy)",
     "st": "NP2",
     "a": 13.32,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.04",
     "n": "Pokoj",
     "st": "NP2",
     "a": 14.51,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.05",
     "n": "Koupelna",
     "st": "NP2",
     "a": 12.2,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "3.01",
     "n": "Půda západ",
     "st": "PUDA",
     "a": 29.4,
     "h": 2.55,
     "z": 5.75
    },
    {
     "c": "3.02",
     "n": "Půda východ",
     "st": "PUDA",
     "a": 28.03,
     "h": 2.55,
     "z": 5.75
    },
    {
     "c": "3.03",
     "n": "Ochoz – lávka",
     "st": "PUDA",
     "a": 4.23,
     "h": 2.55,
     "z": 5.75
    }
   ],
   "poznamky": "<h2>Rekonstrukce – varianta 1 (studie): podkroví 2.NP</h2>\n<p>Výšky jsou od podlahy přízemí (±0,000).</p>\n<h3>Změny proti stávajícímu stavu</h3>\n<ul><li>\n<strong>Bourání:</strong> starý hliněný strop nad 2.NP (podhled +5,22, podlaha půdy +5,32).\n</li><li>\n<strong>Nový strop</strong> nad bočními místnostmi: podhled <strong>+5,53</strong>, podlaha půdy <strong>+5,75</strong>. Půda je tedy o 0,43 m výš.\n</li><li>\n<strong>Kuchyň + obývací pokoj</strong> (2.01, 31,6 m², x 9,55–15,00) je otevřený až do krovu.\n</li><li>\n<strong>Ochoz:</strong> lávka pod hřebenem (š. 0,90 m) přes obývák spojuje západní a východní půdu.\n</li><li>\n<strong>Schodiště na půdu</strong> je v obýváku: 16 × 170 mm, stupeň 260 mm, šířka 0,90 m. Nahoře je podesta u západní půdy.\n</li><li>\n<strong>Příčky 125 mm:</strong>\n<ul><li>\nna západě 2.02 Pokoj (14,7 m²) a 2.03 Předsíň / šatna (13,3 m²); do předsíně vedou stávající dveře z půdy nad zadním traktem (x 8,56–9,42);\n</li><li>\nna východě 2.04 Pokoj (14,5 m²) a 2.05 Koupelna (12,2 m²);\n</li><li>\ndveře 900 × 2100 vedou z obýváku.\n</li></ul>\n</li><li>\n<strong>Zábradlí:</strong> výška 1,0 m (sklo a madlo).\n</li></ul>\n<h3>Výšky</h3>\n<table><thead><tr><th>Místo</th><th>Dnes</th><th>V1</th></tr></thead><tbody><tr><td>Světlá výška místností 2.NP</td><td>2,19 m</td><td><strong>2,50 m</strong></td></tr><tr><td>Obývák pod hřebenem</td><td>–</td><td><strong>5,27 m</strong></td></tr><tr><td>Obývák u fasády / u podélné zdi</td><td>–</td><td>3,01 / 3,15 m</td></tr><tr><td>Podlaha půdy</td><td>+5,32</td><td><strong>+5,75</strong></td></tr><tr><td>Půda pod hřebenem</td><td>2,98 m</td><td><strong>2,55 m</strong></td></tr><tr><td>Lávka (od kraje k hřebeni)</td><td>–</td><td>1,90–2,55 m</td></tr></tbody></table>\n<p>Výška ≥ 1,9 m je na půdě jen v pásu asi 1,5 m kolem hřebene. Půda tedy slouží jako úložný prostor nebo spaní, ne jako plnohodnotné místnosti.</p>\n<h3>Nutno ověřit (statika, normy)</h3>\n<ul><li>\n<strong>Trámy hliněného stropu jsou nejspíš zároveň vazné trámy krovu.</strong> Drží krokve, aby se nerozjížděly. Bez nich krov tlačí obvodové zdi ven. Strop se smí odstranit jen s návrhem statika, například:\n<ul><li>\nnová kleštiny nebo táhla,\n</li><li>\nnosná vaznice nebo hřebenová vaznice,\n</li><li>\nocelová táhla v obýváku.\n</li></ul>\n</li><li>\nNový strop (výška +5,53/+5,75) musí sednout pod pozednice. Skutečnou výšku pozednic a krokví je potřeba zaměřit na místě. Spodní líc střechy je v modelu odhad: horní líc krytiny ze skenu minus 0,25 m.\n</li><li>\nPo zateplení střechy (izolace mezi a pod krokvemi) se výšky pod střechou sníží zhruba o 0,1–0,2 m.\n</li><li>\nSchodiště a zábradlí: parametry ověřit podle ČSN 73 4130.\n</li><li>\nKoupelna v patře: rozvody vody a odpadu a jejich vedení skrz 1.NP.\n</li><li>\nSchodiště z 1.NP do 2.NP v modelu není, jeho poloha ve stávajícím stavu není známá.\n</li><li>\nMístnost nad průjezdem (N.01, podlaha +2,60) zůstává beze změny.\n</li></ul>\n<h3>Soubory</h3>\n<ul><li>\n<strong>Blender:</strong> <code>blender\\Prasklice_V1_rekonstrukce.blend</code> (kolekce <code>V1_Rekonstrukce</code> a IFC v Bonsai).\n</li><li>\n<strong>IFC:</strong> <code>bim\\varianty\\V1\\Prasklice_V1_rekonstrukce.ifc</code>.\n</li><li>\n<strong>Výkresy:</strong> <code>bim\\varianty\\V1\\vykresy\\</code> (V1 P03 půdorys 2.NP, V1 P04 půdorys podkroví, V1 R01 řez x = 12,0, V1 R02 řez x = 7,0, V1 R03 řez y = 3,2).\n</li><li>\n<strong>Pohled:</strong> <code>bim\\varianty\\V1\\V1_pohled_obyvak.png</code>.\n</li><li>\n<strong>Skripty:</strong>\n<ul><li>\n<code>scripts\\b06_varianta1.py</code> (model; parametry návrhu jsou nahoře ve skriptu);\n</li><li>\n<code>scripts\\b07_varianta1_ifc_vykresy.py</code> (IFC a výkresy);\n</li><li>\npak <code>17_export_vykresy.py … V1</code> (PDF).\n</li></ul>\n</li></ul>",
   "rendery": {
    "ulice": "img/V1/ulice.webp",
    "dvur": "img/V1/dvur.webp",
    "rez_1np": "img/V1/rez_1np.webp",
    "rez_2np": "img/V1/rez_2np.webp",
    "rez_podkrovi": "img/V1/rez_podkrovi.webp"
   },
   "patra": [
    {
     "kod": "P01",
     "nazev": "Sklep",
     "vykres": {
      "kod": "P01",
      "nazev": "Půdorys sklepa (řez v −1,30)",
      "src": "img/stav/vykres_P01.webp",
      "pdf": "pdf/stav/P01_Pudorys_sklep.pdf"
     },
     "zdedeno": true,
     "rez3d": null,
     "mistnosti": [
      {
       "c": "0.01",
       "n": "Sklep",
       "st": "SK",
       "a": 14.31,
       "h": 1.98,
       "z": -2.36
      }
     ]
    },
    {
     "kod": "P02",
     "nazev": "1.NP – přízemí",
     "vykres": {
      "kod": "P02",
      "nazev": "Půdorys 1.NP a průjezdu (řez v +1,10)",
      "src": "img/stav/vykres_P02.webp",
      "pdf": "pdf/stav/P02_Pudorys_1NP.pdf"
     },
     "zdedeno": true,
     "rez3d": "img/V1/rez_1np.webp",
     "mistnosti": [
      {
       "c": "P.01",
       "n": "Průjezd / garáž",
       "st": "PR",
       "a": 23.12,
       "h": 3.53,
       "z": -1.23
      },
      {
       "c": "1.01",
       "n": "Pokoj A",
       "st": "NP1",
       "a": 24.08,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.02",
       "n": "Pokoj B",
       "st": "NP1",
       "a": 30.31,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.03",
       "n": "Chodba",
       "st": "NP1",
       "a": 12.82,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.04",
       "n": "Pokoj D",
       "st": "NP1",
       "a": 13.85,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.06",
       "n": "Zadní trakt 1",
       "st": "NP1",
       "a": 16.02,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.07",
       "n": "Zadní trakt 2",
       "st": "NP1",
       "a": 5.42,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.08",
       "n": "Zadní trakt 3",
       "st": "NP1",
       "a": 8.49,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.08a",
       "n": "WC",
       "st": "NP1",
       "a": 2.1,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.09",
       "n": "Zadní trakt 4",
       "st": "NP1",
       "a": 16.55,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.10",
       "n": "Zadní trakt 5",
       "st": "NP1",
       "a": 14.71,
       "h": 2.44,
       "z": 0.0
      }
     ]
    },
    {
     "kod": "P03",
     "nazev": "2.NP – patro",
     "vykres": {
      "kod": "P03",
      "nazev": "Půdorys 2.NP – návrh (řez v +4,00)",
      "src": "img/V1/vykres_P03.webp",
      "pdf": "pdf/V1/V1_P03_Pudorys_2NP.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/V1/rez_2np.webp",
     "mistnosti": [
      {
       "c": "N.01",
       "n": "Místnost nad průjezdem",
       "st": "NADPR",
       "a": 24.38,
       "h": 2.62,
       "z": 2.6,
       "mimo": "Samostatný prostor nad průjezdem / garáží – bude vyžadovat úplně jiné řešení než zbytek domu, proto se nezapočítává do součtů ploch."
      },
      {
       "c": "2.01",
       "n": "Kuchyň + obývací pokoj (do krovu)",
       "st": "NP2",
       "a": 31.56,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.02",
       "n": "Pokoj",
       "st": "NP2",
       "a": 14.74,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.03",
       "n": "Předsíň / šatna (vstup z půdy)",
       "st": "NP2",
       "a": 13.32,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.04",
       "n": "Pokoj",
       "st": "NP2",
       "a": 14.51,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.05",
       "n": "Koupelna",
       "st": "NP2",
       "a": 12.2,
       "h": 2.5,
       "z": 3.03
      }
     ]
    },
    {
     "kod": "P04",
     "nazev": "Podkroví / půda",
     "vykres": {
      "kod": "P04",
      "nazev": "Půdorys podkroví – návrh (řez v +6,50)",
      "src": "img/V1/vykres_P04.webp",
      "pdf": "pdf/V1/V1_P04_Pudorys_podkrovi.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/V1/rez_podkrovi.webp",
     "mistnosti": [
      {
       "c": "3.01",
       "n": "Půda západ",
       "st": "PUDA",
       "a": 29.4,
       "h": 2.55,
       "z": 5.75
      },
      {
       "c": "3.02",
       "n": "Půda východ",
       "st": "PUDA",
       "a": 28.03,
       "h": 2.55,
       "z": 5.75
      },
      {
       "c": "3.03",
       "n": "Ochoz – lávka",
       "st": "PUDA",
       "a": 4.23,
       "h": 2.55,
       "z": 5.75
      }
     ]
    }
   ]
  },
  {
   "id": "V2",
   "nazev": "Varianta 2",
   "kratky": "V2",
   "typ": "studie",
   "datum": "25. 11. 2026",
   "shrnuti": "Obývák do krovu bez lávky. U štítů jsou podkrovní pokoje, podél volného prostoru ochozy. Na každý ochoz vedou točité schody. Nad zadním traktem jsou vikýře a nové místnosti, schodiště z 1.NP je v zadní východní místnosti.",
   "body": [
    "Podkroví: pokoj 3.01 (západ, 18,8 m²) a menší pokoj 3.04 (východ, 14,6 m²), ochozy 3.02 a 3.03.",
    "Dvě vřetenová schodiště D 1,50 v předsíních 2.03 a 2.05.",
    "Zadní trakt pod vikýři: místnost, koupelna, technická místnost, chodba a schodiště z 1.NP.",
    "8 střešních oken 78 × 118 cm."
   ],
   "vykresy": [
    {
     "kod": "P02",
     "nazev": "Půdorys 1.NP – návrh (schodiště do patra)",
     "src": "img/V2/vykres_P02.webp",
     "pdf": "pdf/V2/V2_P02_Pudorys_1NP.pdf"
    },
    {
     "kod": "P03",
     "nazev": "Půdorys 2.NP – návrh (řez v +4,00)",
     "src": "img/V2/vykres_P03.webp",
     "pdf": "pdf/V2/V2_P03_Pudorys_2NP.pdf"
    },
    {
     "kod": "P04",
     "nazev": "Půdorys podkroví – ochozy (řez v +6,50)",
     "src": "img/V2/vykres_P04.webp",
     "pdf": "pdf/V2/V2_P04_Pudorys_podkrovi.pdf"
    },
    {
     "kod": "R01",
     "nazev": "Příčný řez x = 12,00 – obývák, technická m.",
     "src": "img/V2/vykres_R01.webp",
     "pdf": "pdf/V2/V2_R01_Pricny_rez_x_12_0_obyvak_technicka.pdf"
    },
    {
     "kod": "R02",
     "nazev": "Příčný řez x = 7,00 – pokoj v podkroví, předsíň",
     "src": "img/V2/vykres_R02.webp",
     "pdf": "pdf/V2/V2_R02_Pricny_rez_x_7_0_pokoj_v_podkrovi_predsin.pdf"
    },
    {
     "kod": "R03",
     "nazev": "Podélný řez y = 4,10 – schody na ochozy",
     "src": "img/V2/vykres_R03.webp",
     "pdf": "pdf/V2/V2_R03_Podelny_rez_y_4_1_schody_na_ochozy.pdf"
    },
    {
     "kod": "R04",
     "nazev": "Příčný řez x = 19,00 – schodiště z 1.NP",
     "src": "img/V2/vykres_R04.webp",
     "pdf": "pdf/V2/V2_R04_Pricny_rez_x_19_0_schodiste_z_1NP.pdf"
    },
    {
     "kod": "V02",
     "nazev": "Pohled dvorní (sever) – vikýře",
     "src": "img/V2/vykres_V02.webp",
     "pdf": "pdf/V2/V2_V02_Pohled_dvorni_sever_vikyre.pdf"
    }
   ],
   "pohledy": [
    {
     "src": "img/V2/pohled_1.webp",
     "nazev": "Obývák do krovu"
    },
    {
     "src": "img/V2/pohled_2.webp",
     "nazev": "Ochoz a podkroví z obýváku"
    },
    {
     "src": "img/V2/pohled_3.webp",
     "nazev": "Vstup do západního podkrovního pokoje"
    }
   ],
   "mistnosti": [
    {
     "c": "0.01",
     "n": "Sklep",
     "st": "SK",
     "a": 14.31,
     "h": 1.98,
     "z": -2.36
    },
    {
     "c": "P.01",
     "n": "Průjezd / garáž",
     "st": "PR",
     "a": 23.12,
     "h": 3.53,
     "z": -1.23
    },
    {
     "c": "1.01",
     "n": "Pokoj A",
     "st": "NP1",
     "a": 24.08,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.02",
     "n": "Pokoj B",
     "st": "NP1",
     "a": 30.31,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.03",
     "n": "Chodba",
     "st": "NP1",
     "a": 12.82,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.04",
     "n": "Pokoj D",
     "st": "NP1",
     "a": 13.85,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.06",
     "n": "Zadní trakt 1",
     "st": "NP1",
     "a": 16.02,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.07",
     "n": "Zadní trakt 2",
     "st": "NP1",
     "a": 5.42,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.08",
     "n": "Zadní trakt 3",
     "st": "NP1",
     "a": 8.49,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.08a",
     "n": "WC",
     "st": "NP1",
     "a": 2.1,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.09",
     "n": "Zadní trakt 4",
     "st": "NP1",
     "a": 16.55,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.10",
     "n": "Zadní trakt 5",
     "st": "NP1",
     "a": 14.71,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "N.01",
     "n": "Místnost nad průjezdem",
     "st": "NADPR",
     "a": 24.38,
     "h": 2.62,
     "z": 2.6,
     "mimo": "Samostatný prostor nad průjezdem / garáží – bude vyžadovat úplně jiné řešení než zbytek domu, proto se nezapočítává do součtů ploch."
    },
    {
     "c": "2.01",
     "n": "Kuchyň + obývací pokoj (do krovu)",
     "st": "NP2",
     "a": 31.56,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.02",
     "n": "Pokoj",
     "st": "NP2",
     "a": 14.74,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.03",
     "n": "Předsíň + schody na ochoz",
     "st": "NP2",
     "a": 13.32,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.04",
     "n": "Pokoj",
     "st": "NP2",
     "a": 14.51,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.05",
     "n": "Předsíň + schody na ochoz",
     "st": "NP2",
     "a": 12.2,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.06",
     "n": "Místnost (podkrovní)",
     "st": "NP2",
     "a": 7.19,
     "h": 2.54,
     "z": 3.03
    },
    {
     "c": "2.07",
     "n": "Koupelna",
     "st": "NP2",
     "a": 9.26,
     "h": 2.54,
     "z": 3.03
    },
    {
     "c": "2.08",
     "n": "Technická místnost",
     "st": "NP2",
     "a": 8.44,
     "h": 2.54,
     "z": 3.03
    },
    {
     "c": "2.09",
     "n": "Chodba",
     "st": "NP2",
     "a": 9.7,
     "h": 2.77,
     "z": 3.03
    },
    {
     "c": "2.10",
     "n": "Schodiště z 1.NP + sklad",
     "st": "NP2",
     "a": 30.99,
     "h": 2.54,
     "z": 3.03
    },
    {
     "c": "3.01",
     "n": "Pokoj v podkroví",
     "st": "PUDA",
     "a": 18.79,
     "h": 2.55,
     "z": 5.75
    },
    {
     "c": "3.02",
     "n": "Ochoz + schody",
     "st": "PUDA",
     "a": 9.88,
     "h": 2.55,
     "z": 5.75
    },
    {
     "c": "3.03",
     "n": "Ochoz + schody",
     "st": "PUDA",
     "a": 12.69,
     "h": 2.55,
     "z": 5.75
    },
    {
     "c": "3.04",
     "n": "Pokoj v podkroví (menší)",
     "st": "PUDA",
     "a": 14.61,
     "h": 2.55,
     "z": 5.75
    }
   ],
   "poznamky": "<h2>Rekonstrukce – varianta 2 (studie): volný prostor do krovu, ochozy a pokoje v podkroví, vikýře, schodiště z 1.NP vzadu</h2>\n<p>Výšky jsou od podlahy přízemí (±0,000). Podlaha 2.NP je +3,03.</p>\n<h3>Co je jiné proti V1</h3>\n<ul><li>\n<strong>Bez lávky a bez schodiště v obýváku.</strong>\n<ul><li>\nKuchyň + obývák (2.01, 31,6 m², x 9,55–15,00) je volný prostor až do krovu (pod hřebenem 5,27 m).\n</li></ul>\n</li><li>\n<strong>Podkroví (+5,75), úprava 25. 11. 2026:</strong> na každé straně je u štítu pokoj a podél hrany volného prostoru ochoz.\n<ul><li>\n<strong>3.01 Pokoj v podkroví (západ):</strong> x 4,4–7,73, šířka 3,2 m, půdorys 18,8 m².\n<ul><li>\nPlocha s výškou ≥ 1,2 m je asi 11,4 m², s výškou ≥ 1,9 m asi 5,5 m².\n</li></ul>\n</li><li>\n<strong>3.02 Ochoz (západ):</strong> x 7,85–9,55, včetně schodů.\n</li><li>\n<strong>3.03 Ochoz (východ):</strong> x 15,00–17,20, včetně schodů.\n</li><li>\n<strong>3.04 Pokoj v podkroví (východ, menší):</strong> x 17,33–19,8, šířka 2,55 m, půdorys 14,6 m².\n<ul><li>\nPlocha s výškou ≥ 1,2 m je asi 9,1 m², s výškou ≥ 1,9 m asi 4,4 m².\n</li></ul>\n</li><li>\nPlná výška (≥ 1,9 m) je jen v pásu y 2,75–4,46 kolem hřebene, pod hřebenem je 2,55 m. Pokoje jsou proto vhodné hlavně na spaní, pro hosty nebo jako pracovna.\n</li><li>\nPříčky pokojů jdou od podlahy až pod střechu. Dveře 0,70 × 1,97 vedou přímo z horní podesty schodů.\n</li><li>\nHrany do volného prostoru mají skleněné zábradlí 1,0 m. U okrajů pod šikmou střechou se sklo snižuje pod podhled.\n</li></ul>\n</li><li>\n<strong>Schody na ochozy:</strong> vřetenová (točitá) schodiště D 1,50 v rozích předsíní u obýváku.\n<ul><li>\n<strong>2.03 (západ):</strong> střed x 8,62, y 4,50. <strong>2.05 (východ):</strong> střed x 15,93, y 4,50.\n</li><li>\n15 výšek po 181 mm, otočka 330°.\n</li><li>\nDole se nastupuje ze středu předsíně. Nahoře se vystupuje k jihu na podestu (čtvrtinu otvoru, kterou podlaha nevyřízne) přímo před dveře pokoje a na ochoz.\n</li><li>\nPod podestou jsou jen první 2–3 stupně, podchodná výška je asi 1,95 m nebo víc.\n</li><li>\nMezi schodištěm a podélnou zdí zůstává průchod asi 1 m. Spojuje dveře z podkroví pod pultem a dveře do obýváku.\n</li><li>\n<strong>Dveře z předsíní do obýváku</strong> se posunuly k podélné zdi: y 5,33–6,18, šířka 0,85 m.\n</li><li>\nVřetenové schodiště je vedlejší schodiště. Parametry a madlo (v modelu není) je potřeba ověřit podle ČSN 73 4130.\n</li></ul>\n</li><li>\n<strong>Střešní okna 78 × 118 cm (8 ks):</strong>\n<ul><li>\n3.01 pokoj: 2 okna (jižní a severní sklon);\n</li><li>\n3.04 pokoj: 1 okno (jižní sklon);\n</li><li>\nobývák: 4 okna (2 na jih, 2 na sever), světlo shora do volného prostoru;\n</li><li>\n1 okno nad schodištěm z 1.NP v pultové střeše.\n</li><li>\nOkna v jižním sklonu jdou do ulice. Ověřit, zda je stavební úřad, případně památkáři, připustí. Jinak je lze přesunout jen na dvorní sklon.\n</li></ul>\n</li><li>\n<strong>Pokoje:</strong> 2.02 Pokoj (14,7 m²) a 2.04 Pokoj (14,5 m²) jsou u uliční fasády. Dveře mají z předsíní.\n</li><li>\n<strong>Schodiště z 1.NP do 2.NP</strong> je v zadní východní místnosti (pod pultem):\n<ul><li>\npoloha x 18,55–19,45, rameno vede k ulici;\n</li><li>\n17 stupňů × 178 mm, stupeň 260 mm.\n</li><li>\nV 1.NP i v podlaze patra je v modelu otvor a kolem něj zábradlí.\n</li></ul>\n</li><li>\n<strong>Nové dveře 0,85 × 2,00</strong> v podélné zdi, x 15,25–16,10. Vedou z prostoru pod pultem (2.10) do předsíně 2.05.\n</li><li>\n<strong>Podkroví pod pultovou střechou</strong> (zadní trakt, podlaha +3,03):\n<ul><li>\n2.06 Místnost (7,2 m²), 2.07 Koupelna (9,3 m²), 2.08 Technická místnost (8,4 m²);\n</li><li>\n2.09 Chodba podél podélné zdi (9,7 m²);\n</li><li>\n2.10 Schodiště z 1.NP + sklad (31,0 m²).\n</li><li>\nDveře 0,80 × 2,00 vedou z chodby.\n</li><li>\nChodba je napojená na stávající dveře do 2.03 (x 8,56–9,42).\n</li><li>\nKomín (x 12,95–13,45) je v technické místnosti.\n</li></ul>\n</li></ul>\n<h3>Výšky</h3>\n<table><thead><tr><th>Místo</th><th>V2</th></tr></thead><tbody><tr><td>Místnosti 2.NP (pokoje, předsíně)</td><td><strong>2,50 m</strong></td></tr><tr><td>Obývák pod hřebenem / u fasády</td><td><strong>5,27 / 3,01 m</strong></td></tr><tr><td>Ochozy a podkrovní pokoje pod hřebenem</td><td>2,55 m</td></tr><tr><td>Podkroví pod pultem u podélné zdi (y 6,8)</td><td><strong>2,77 m</strong></td></tr><tr><td>… u chodby (y 7,85)</td><td>2,26 m</td></tr><tr><td>… y 9,0 / 10,0</td><td>1,76 / 1,33 m</td></tr></tbody></table>\n<p>Tabulka výše platí pro <strong>původní pultovou střechu</strong> (beze změny zůstává nad chodbou západně od x 4,7 a nad schodištěm z 1.NP).</p>\n<h4>Vikýře nad zadním traktem (doplněno 25. 11. 2026)</h4>\n<ul><li>\n<strong>Dva pultové vikýře v líci zadní stěny.</strong>\n<ul><li>\nZadní zeď se v šířce vikýře zvedne až pod novou střechu.\n</li><li>\nStřecha vikýře se napojuje na pultovou střechu těsně pod zlomem (y 7,05) a má sklon <strong>4°</strong>. Krytina musí být plechová nebo z fólie, protože tašky na 4° nejdou.\n</li><li>\n<strong>Západní vikýř:</strong> x 4,80–12,70, je nad 2.06, 2.07 a 2.08.\n</li><li>\n<strong>Východní vikýř:</strong> x 13,75–18,45, je nad 2.10.\n</li><li>\nKomín zůstává v mezeře mezi vikýři. Schodiště z 1.NP (x ≥ 18,55) je dál pod původní střechou, výška nad ním stačí.\n</li></ul>\n</li><li>\n<strong>Světlá výška pod vikýřem:</strong>\n<ul><li>\n<strong>2,54 m</strong> u chodby;\n</li><li>\n<strong>2,30–2,39 m</strong> u zadní stěny západního vikýře;\n</li><li>\n<strong>2,24–2,29 m</strong> u zadní stěny východního vikýře.\n</li><li>\nMístnosti 2.06–2.10 jsou tedy plně obytné po celé hloubce.\n</li></ul>\n</li><li>\n<strong>Okna v čele vikýřů</strong> mají nadpraží 2,10 m nad podlahou:\n<ul><li>\n2.06: 1,20 m, parapet 0,90 m;\n</li><li>\nkoupelna: 1,00 m, parapet 1,20 m;\n</li><li>\ntechnická místnost: 0,80 m;\n</li><li>\n2.10: dvakrát 1,20 m.\n</li></ul>\n</li><li>\n<strong>Výkres:</strong> <code>V2 V02 Pohled dvorní (sever, vikýře)</code>. Vikýř je vidět také v řezech R01 a R02.\n</li><li>\n<strong>Ověřit:</strong>\n<ul><li>\nzda unese zadní zeď nadezdívku, nebo zda bude čelo vikýře lehké (dřevostavba na pozednici);\n</li><li>\nnapojení vikýřů na krov;\n</li><li>\nzda takový zásah povolí stavební úřad (vzhled dvorní fasády).\n</li></ul>\n</li><li>\n<strong>Další úprava:</strong> šířky vikýřů a polohy oken jsou parametry <code>VIKYRE</code> v <code>scripts\\b08_varianta2.py</code>. Po rozvržení místností se upraví tam.\n</li></ul>\n<h3>Nutno ověřit (statika, normy)</h3>\n<ul><li>\n<strong>Trámy hliněného stropu nad 2.NP jsou nejspíš vazné trámy krovu</strong> (stejně jako ve V1). Nad obývákem se odstraní bez náhrady, proto je potřeba návrh statika, například:\n<ul><li>\nkleštiny nebo táhla,\n</li><li>\nnosné vaznice.\n</li></ul>\n</li><li>\n<strong>Otvor pro schodiště v podlaze patra pod pultem</strong> (x 18,55–19,45) přeruší stropní trámy. Je potřeba výměna.\n</li><li>\n<strong>Nové dveře v podélné zdi</strong> potřebují překlad. Zeď je nosná.\n</li><li>\nSpodní líc střechy je v modelu odhad: horní líc krytiny ze skenu minus 0,25 m. Pozednice, krokve a pultovou střechu je potřeba zaměřit na místě.\n</li><li>\nPo zateplení střechy se výšky sníží o 0,1–0,2 m.\n</li><li>\nSchodiště a zábradlí: parametry ověřit podle ČSN 73 4130.\n</li><li>\nKoupelna a technika jsou nad 1.NP v zadním traktu. Ověřit trasu odpadu do 1.NP a nosnost podlahy (bojler, akumulace).\n</li></ul>\n<h3>Soubory</h3>\n<ul><li>\n<strong>Blender:</strong> <code>blender\\Prasklice_V2_rekonstrukce.blend</code> (kolekce <code>V2_Rekonstrukce</code> a IFC v Bonsai, kamera <code>V2_kamera_obyvak</code>).\n</li><li>\n<strong>IFC:</strong> <code>bim\\varianty\\V2\\Prasklice_V2_rekonstrukce.ifc</code>.\n</li><li>\n<strong>Výkresy (PDF a SVG):</strong> <code>bim\\varianty\\V2\\vykresy\\</code>\n<ul><li>\nP02 1.NP, P03 2.NP, P04 podkroví a ochozy;\n</li><li>\nR01 x = 12, R02 x = 7 (pokoj v podkroví), R03 y = 4,1 (schody na ochozy), R04 x = 19 (schodiště z 1.NP), V02 dvorní pohled s vikýři.\n</li></ul>\n</li><li>\n<strong>Pohledy</strong> (složka bim/varianty/V2): <code>V2_pohled_obyvak.png</code>, <code>V2_pohled_ochoz_zapad.png</code>, <code>V2_pohled_podkrovi_zapad.png</code>.\n</li><li>\n<strong>Skripty:</strong>\n<ul><li>\n<code>scripts\\b08_varianta2.py</code> (model; parametry jsou nahoře ve skriptu);\n</li><li>\n<code>scripts\\b09_varianta2_ifc_vykresy.py</code> (IFC a výkresy);\n</li><li>\npak <code>17_export_vykresy.py … V2</code> (PDF).\n</li></ul>\n</li></ul>",
   "rendery": {
    "ulice": "img/V2/ulice.webp",
    "dvur": "img/V2/dvur.webp",
    "rez_1np": "img/V2/rez_1np.webp",
    "rez_2np": "img/V2/rez_2np.webp",
    "rez_podkrovi": "img/V2/rez_podkrovi.webp"
   },
   "patra": [
    {
     "kod": "P01",
     "nazev": "Sklep",
     "vykres": {
      "kod": "P01",
      "nazev": "Půdorys sklepa (řez v −1,30)",
      "src": "img/stav/vykres_P01.webp",
      "pdf": "pdf/stav/P01_Pudorys_sklep.pdf"
     },
     "zdedeno": true,
     "rez3d": null,
     "mistnosti": [
      {
       "c": "0.01",
       "n": "Sklep",
       "st": "SK",
       "a": 14.31,
       "h": 1.98,
       "z": -2.36
      }
     ]
    },
    {
     "kod": "P02",
     "nazev": "1.NP – přízemí",
     "vykres": {
      "kod": "P02",
      "nazev": "Půdorys 1.NP – návrh (schodiště do patra)",
      "src": "img/V2/vykres_P02.webp",
      "pdf": "pdf/V2/V2_P02_Pudorys_1NP.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/V2/rez_1np.webp",
     "mistnosti": [
      {
       "c": "P.01",
       "n": "Průjezd / garáž",
       "st": "PR",
       "a": 23.12,
       "h": 3.53,
       "z": -1.23
      },
      {
       "c": "1.01",
       "n": "Pokoj A",
       "st": "NP1",
       "a": 24.08,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.02",
       "n": "Pokoj B",
       "st": "NP1",
       "a": 30.31,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.03",
       "n": "Chodba",
       "st": "NP1",
       "a": 12.82,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.04",
       "n": "Pokoj D",
       "st": "NP1",
       "a": 13.85,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.06",
       "n": "Zadní trakt 1",
       "st": "NP1",
       "a": 16.02,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.07",
       "n": "Zadní trakt 2",
       "st": "NP1",
       "a": 5.42,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.08",
       "n": "Zadní trakt 3",
       "st": "NP1",
       "a": 8.49,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.08a",
       "n": "WC",
       "st": "NP1",
       "a": 2.1,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.09",
       "n": "Zadní trakt 4",
       "st": "NP1",
       "a": 16.55,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.10",
       "n": "Zadní trakt 5",
       "st": "NP1",
       "a": 14.71,
       "h": 2.44,
       "z": 0.0
      }
     ]
    },
    {
     "kod": "P03",
     "nazev": "2.NP – patro",
     "vykres": {
      "kod": "P03",
      "nazev": "Půdorys 2.NP – návrh (řez v +4,00)",
      "src": "img/V2/vykres_P03.webp",
      "pdf": "pdf/V2/V2_P03_Pudorys_2NP.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/V2/rez_2np.webp",
     "mistnosti": [
      {
       "c": "N.01",
       "n": "Místnost nad průjezdem",
       "st": "NADPR",
       "a": 24.38,
       "h": 2.62,
       "z": 2.6,
       "mimo": "Samostatný prostor nad průjezdem / garáží – bude vyžadovat úplně jiné řešení než zbytek domu, proto se nezapočítává do součtů ploch."
      },
      {
       "c": "2.01",
       "n": "Kuchyň + obývací pokoj (do krovu)",
       "st": "NP2",
       "a": 31.56,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.02",
       "n": "Pokoj",
       "st": "NP2",
       "a": 14.74,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.03",
       "n": "Předsíň + schody na ochoz",
       "st": "NP2",
       "a": 13.32,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.04",
       "n": "Pokoj",
       "st": "NP2",
       "a": 14.51,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.05",
       "n": "Předsíň + schody na ochoz",
       "st": "NP2",
       "a": 12.2,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.06",
       "n": "Místnost (podkrovní)",
       "st": "NP2",
       "a": 7.19,
       "h": 2.54,
       "z": 3.03
      },
      {
       "c": "2.07",
       "n": "Koupelna",
       "st": "NP2",
       "a": 9.26,
       "h": 2.54,
       "z": 3.03
      },
      {
       "c": "2.08",
       "n": "Technická místnost",
       "st": "NP2",
       "a": 8.44,
       "h": 2.54,
       "z": 3.03
      },
      {
       "c": "2.09",
       "n": "Chodba",
       "st": "NP2",
       "a": 9.7,
       "h": 2.77,
       "z": 3.03
      },
      {
       "c": "2.10",
       "n": "Schodiště z 1.NP + sklad",
       "st": "NP2",
       "a": 30.99,
       "h": 2.54,
       "z": 3.03
      }
     ]
    },
    {
     "kod": "P04",
     "nazev": "Podkroví / půda",
     "vykres": {
      "kod": "P04",
      "nazev": "Půdorys podkroví – ochozy (řez v +6,50)",
      "src": "img/V2/vykres_P04.webp",
      "pdf": "pdf/V2/V2_P04_Pudorys_podkrovi.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/V2/rez_podkrovi.webp",
     "mistnosti": [
      {
       "c": "3.01",
       "n": "Pokoj v podkroví",
       "st": "PUDA",
       "a": 18.79,
       "h": 2.55,
       "z": 5.75
      },
      {
       "c": "3.02",
       "n": "Ochoz + schody",
       "st": "PUDA",
       "a": 9.88,
       "h": 2.55,
       "z": 5.75
      },
      {
       "c": "3.03",
       "n": "Ochoz + schody",
       "st": "PUDA",
       "a": 12.69,
       "h": 2.55,
       "z": 5.75
      },
      {
       "c": "3.04",
       "n": "Pokoj v podkroví (menší)",
       "st": "PUDA",
       "a": 14.61,
       "h": 2.55,
       "z": 5.75
      }
     ]
    }
   ]
  },
  {
   "id": "V3",
   "nazev": "Varianta 3",
   "kratky": "V3",
   "typ": "studie",
   "datum": "25. 11. 2026",
   "shrnuti": "Jasně oddělené zóny. Ze schodů z 1.NP se vchází rovnou do vstupní haly, u ní je denní část. Na západě je klidová část s ložnicí, koupelnou a šatnou. Do podkrovního pokoje vedou jedny normální schody, na východní půdu skládací.",
   "body": [
    "Vstup: nové dveře hned u výstupu ze schodiště z 1.NP do haly 2.05.",
    "Denní část: obývák + kuchyň do krovu, WC 2.11 a pracovna 2.12.",
    "Noční část: ložnice 2.02, hala se schody, šatna, koupelna, prádelna.",
    "Podkroví: pokoj 3.01 přes celou západní část (vnitřní okno do obýváku), na východě půda (sklad) se skládacími schody.",
    "9 střešních oken 78 × 118 cm, vikýře nad zadním traktem."
   ],
   "vykresy": [
    {
     "kod": "P02",
     "nazev": "Půdorys 1.NP – návrh (schodiště do patra)",
     "src": "img/V3/vykres_P02.webp",
     "pdf": "pdf/V3/V3_P02_Pudorys_1NP.pdf"
    },
    {
     "kod": "P03",
     "nazev": "Půdorys 2.NP – návrh (řez v +4,00)",
     "src": "img/V3/vykres_P03.webp",
     "pdf": "pdf/V3/V3_P03_Pudorys_2NP.pdf"
    },
    {
     "kod": "P04",
     "nazev": "Půdorys podkroví – návrh (řez v +6,50)",
     "src": "img/V3/vykres_P04.webp",
     "pdf": "pdf/V3/V3_P04_Pudorys_podkrovi.pdf"
    },
    {
     "kod": "R01",
     "nazev": "Příčný řez x = 12,00 – obývák",
     "src": "img/V3/vykres_R01.webp",
     "pdf": "pdf/V3/V3_R01_Pricny_rez_x_12_0_obyvak.pdf"
    },
    {
     "kod": "R02",
     "nazev": "Příčný řez x = 5,00 – schody do podkroví",
     "src": "img/V3/vykres_R02.webp",
     "pdf": "pdf/V3/V3_R02_Pricny_rez_x_5_0_schody_do_podkrovi.pdf"
    },
    {
     "kod": "R03",
     "nazev": "Podélný řez y = 4,20 – podkroví, schody",
     "src": "img/V3/vykres_R03.webp",
     "pdf": "pdf/V3/V3_R03_Podelny_rez_y_4_2_podkrovi_schody.pdf"
    },
    {
     "kod": "R04",
     "nazev": "Příčný řez x = 18,00 – skládací schody, vstup",
     "src": "img/V3/vykres_R04.webp",
     "pdf": "pdf/V3/V3_R04_Pricny_rez_x_18_0_skladaci_schody_vstup.pdf"
    },
    {
     "kod": "V02",
     "nazev": "Pohled dvorní (sever) – vikýře",
     "src": "img/V3/vykres_V02.webp",
     "pdf": "pdf/V3/V3_V02_Pohled_dvorni_sever_vikyre.pdf"
    }
   ],
   "pohledy": [
    {
     "src": "img/V3/pohled_1.webp",
     "nazev": "Obývák do krovu, vnitřní okno podkrovního pokoje"
    },
    {
     "src": "img/V3/pohled_2.webp",
     "nazev": "Hala 2.03 se schody do podkroví"
    },
    {
     "src": "img/V3/pohled_3.webp",
     "nazev": "Podkrovní pokoj 3.01, výstup schodů"
    }
   ],
   "mistnosti": [
    {
     "c": "0.01",
     "n": "Sklep",
     "st": "SK",
     "a": 14.31,
     "h": 1.98,
     "z": -2.36
    },
    {
     "c": "P.01",
     "n": "Průjezd / garáž",
     "st": "PR",
     "a": 23.12,
     "h": 3.53,
     "z": -1.23
    },
    {
     "c": "1.01",
     "n": "Pokoj A",
     "st": "NP1",
     "a": 24.08,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.02",
     "n": "Pokoj B",
     "st": "NP1",
     "a": 30.31,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.03",
     "n": "Chodba",
     "st": "NP1",
     "a": 12.82,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.04",
     "n": "Pokoj D",
     "st": "NP1",
     "a": 13.85,
     "h": 2.72,
     "z": 0.0
    },
    {
     "c": "1.06",
     "n": "Zadní trakt 1",
     "st": "NP1",
     "a": 16.02,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.07",
     "n": "Zadní trakt 2",
     "st": "NP1",
     "a": 5.42,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.08",
     "n": "Zadní trakt 3",
     "st": "NP1",
     "a": 8.49,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.08a",
     "n": "WC",
     "st": "NP1",
     "a": 2.1,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.09",
     "n": "Zadní trakt 4",
     "st": "NP1",
     "a": 16.55,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "1.10",
     "n": "Zadní trakt 5",
     "st": "NP1",
     "a": 14.71,
     "h": 2.44,
     "z": 0.0
    },
    {
     "c": "N.01",
     "n": "Místnost nad průjezdem",
     "st": "NADPR",
     "a": 24.38,
     "h": 2.62,
     "z": 2.6,
     "mimo": "Samostatný prostor nad průjezdem / garáží – bude vyžadovat úplně jiné řešení než zbytek domu, proto se nezapočítává do součtů ploch."
    },
    {
     "c": "2.01",
     "n": "Obývací pokoj + kuchyň (do krovu)",
     "st": "NP2",
     "a": 31.56,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.02",
     "n": "Ložnice",
     "st": "NP2",
     "a": 14.74,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.03",
     "n": "Hala + schody do podkroví",
     "st": "NP2",
     "a": 13.32,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.04",
     "n": "Pokoj",
     "st": "NP2",
     "a": 14.51,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.05",
     "n": "Vstupní hala (půdní schody)",
     "st": "NP2",
     "a": 12.2,
     "h": 2.5,
     "z": 3.03
    },
    {
     "c": "2.06",
     "n": "Šatna",
     "st": "NP2",
     "a": 7.19,
     "h": 2.54,
     "z": 3.03
    },
    {
     "c": "2.07",
     "n": "Koupelna",
     "st": "NP2",
     "a": 9.26,
     "h": 2.54,
     "z": 3.03
    },
    {
     "c": "2.08",
     "n": "Prádelna + technika",
     "st": "NP2",
     "a": 8.44,
     "h": 2.54,
     "z": 3.03
    },
    {
     "c": "2.09",
     "n": "Chodba",
     "st": "NP2",
     "a": 9.7,
     "h": 2.77,
     "z": 3.03
    },
    {
     "c": "2.10",
     "n": "Schodiště z 1.NP + chodba",
     "st": "NP2",
     "a": 11.76,
     "h": 2.77,
     "z": 3.03
    },
    {
     "c": "2.11",
     "n": "WC",
     "st": "NP2",
     "a": 5.0,
     "h": 2.54,
     "z": 3.03
    },
    {
     "c": "2.12",
     "n": "Pracovna / pokoj",
     "st": "NP2",
     "a": 12.63,
     "h": 2.54,
     "z": 3.03
    },
    {
     "c": "3.01",
     "n": "Pokoj v podkroví",
     "st": "PUDA",
     "a": 28.67,
     "h": 2.55,
     "z": 5.75
    },
    {
     "c": "3.02",
     "n": "Půda – sklad",
     "st": "PUDA",
     "a": 27.3,
     "h": 2.55,
     "z": 5.75
    }
   ],
   "poznamky": "<h2>Rekonstrukce – varianta 3 (studie): jasné zóny, jedno schodiště do podkroví, na východní půdu skládací schody</h2>\n<p>Výšky jsou od podlahy přízemí (±0,000). Podlaha 2.NP je +3,03, podlaha podkroví +5,75.</p>\n<h3>Myšlenka</h3>\n<ul><li>\n<strong>Schodiště z 1.NP zůstává</strong> v zadní východní místnosti (x 18,55–19,45, 17 × 178 mm).\n</li><li>\n<strong>Příchod:</strong> nahoře je hned vedle výstupu ze schodiště nové dveře do <strong>vstupní haly 2.05</strong>. Nemusí se přes chodbu ani přes obývák.\n<ul><li>\nNové dveře 0,85 × 2,00 jsou v podélné zdi, x 17,45–18,30 (nosná zeď, nutný překlad).\n</li><li>\nDveře z V2 (x 15,25–16,10) se nedělají.\n</li></ul>\n</li><li>\n<strong>Denní zóna (východ, u příchodu):</strong>\n<ul><li>\n2.05 Vstupní hala (12,2 m²): odtud do obýváku, do pokoje 2.04 a skládací schody na půdu;\n</li><li>\n2.01 Obývací pokoj + kuchyň (31,6 m²), otevřený do krovu, kuchyň u východní příčky blízko vstupu;\n</li><li>\nza ním v zadním traktu 2.11 WC (5,0 m²) a 2.12 Pracovna / pokoj (12,6 m², dvě okna ve vikýři), přístup chodbou 2.10 od schodiště.\n</li></ul>\n</li><li>\n<strong>Noční zóna (západ):</strong>\n<ul><li>\n2.02 Ložnice do ulice (14,7 m²);\n</li><li>\n2.03 Hala + schody do podkroví (13,3 m²);\n</li><li>\nza ní chodba 2.09 a 2.06 Šatna (7,2 m²), 2.07 Koupelna (9,3 m²), 2.08 Prádelna + technika (8,4 m², u komína).\n</li><li>\nLožnice, šatna a koupelna jsou u sebe a nechodí se k nim přes obývák.\n</li></ul>\n</li><li>\n<strong>Pokoje 2.02 a 2.04 mají dveře jen z hal</strong> (ve V2 vedly i přímo do obýváku).\n</li><li>\nObývák má dvoje dveře 0,90, z obou hal (y 4,60–5,50).\n</li></ul>\n<h3>Podkroví</h3>\n<ul><li>\n<strong>3.01 Pokoj v podkroví (západ):</strong> celá západní část, x 4,4–9,4, podlaha 28,7 m² včetně otvoru pro schody.\n<ul><li>\nMimo schodiště je šířka 3,9 m. Plocha s výškou ≥ 1,2 m je asi 14 m², s výškou ≥ 1,9 m asi 6,7 m², pod hřebenem 2,55 m.\n</li><li>\nK volnému prostoru obýváku je plná příčka s <strong>vnitřním oknem</strong> 1,6 × 0,9 m. Pokoj má soukromí a obývák světlo z pokoje.\n</li><li>\nSvětlo: 2 střešní okna nad pokojem a 1 nad schody.\n</li></ul>\n</li><li>\n<strong>3.02 Půda – sklad (východ):</strong> jen úložný prostor. Přístup <strong>skládacími půdními schody</strong> s poklopem 120 × 70 cm ve stropu vstupní haly 2.05 (x 17,40–18,60, y 3,85–4,55).\n<ul><li>\nSklon žebříku asi 60°. Nad poklopem je výška 1,8–2,4 m, takže se tam dá vstát.\n</li><li>\nK volnému prostoru obýváku je plná příčka. Na půdě je 1 střešní okno do dvora.\n</li></ul>\n</li><li>\n<strong>Ochozy z V2 nejsou.</strong> Nad obývákem je čistý prostor do krovu, ohraničený příčkami podkroví.\n</li></ul>\n<h3>Schody do podkroví (západ)</h3>\n<ul><li>\n<strong>Lomené schodiště s kosými stupni</strong> v SZ rohu haly 2.03 u štítové zdi:\n<ul><li>\nnástup od východu (z haly);\n</li><li>\n2 přímé stupně k západu, 3 kosé stupně v rohu u podélné zdi, 9 přímých stupňů k jihu podél štítové zdi;\n</li><li>\n15 výšek × 181 mm, stupeň 250 mm, šířka ramene 0,90 m.\n</li></ul>\n</li><li>\nVýstup do podkroví je v pásu pod hřebenem (y 3,15). Podchodná výška je všude ≥ 2,4 m.\n</li><li>\nHorní 2 stupně přesahují nad roh ložnice 2.02 (asi 0,9 × 0,4 m). Tam je snížený podhled ve výšce asi 2,2 m nad podlahou ložnice, místo pro vestavěnou skříň.\n</li><li>\nZábradlí: ve 2.NP skleněné podél ramene, v podkroví kolem otvoru. Kosé stupně a parametry ověřit podle ČSN 73 4130.\n</li></ul>\n<h3>Střešní okna 78 × 118 cm (9 ks)</h3>\n<ul><li>\n3.01 pokoj: 2 okna (jih a sever) a 1 nad schody (sever);\n</li><li>\nobývák: 4 okna (2 na jih, 2 na sever);\n</li><li>\npůda 3.02: 1 okno (sever);\n</li><li>\n1 okno nad schodištěm z 1.NP v pultové střeše.\n</li><li>\nOkna v jižním sklonu jdou do ulice. Ověřit na stavebním úřadě.\n</li></ul>\n<h3>Zadní trakt a vikýře</h3>\n<ul><li>\nVikýře jsou stejné jako ve V2: západ x 4,80–12,70, východ x 13,75–18,45, střecha 4°.\n</li><li>\nOkna ve východním vikýři jsou podle nových místností:\n<ul><li>\nWC: 0,60 × 0,70, parapet 1,40;\n</li><li>\npracovna: 1,20 a 1,00 × 1,20.\n</li></ul>\n</li><li>\nSvětlá výška pod vikýři je 2,2–2,5 m.\n</li></ul>\n<h3>Nutno ověřit (stejně jako ve V2)</h3>\n<ul><li>\nOdstranění hliněného stropu nad obývákem (vazné trámy krovu) je potřeba posoudit se statikem.\n</li><li>\nPřeklad nad novými dveřmi v podélné zdi.\n</li><li>\nVýměna stropních trámů u otvoru schodiště z 1.NP a nového otvoru pro schody do podkroví.\n</li><li>\nSpodní líc střechy je odhad, zaměřit na místě. Po zateplení se výšky sníží o 0,1–0,2 m.\n</li><li>\nOdpad z koupelny, WC a prádelny do 1.NP a nosnost podlahy v zadním traktu.\n</li></ul>\n<h3>Soubory</h3>\n<ul><li>\n<strong>Blender:</strong> <code>blender\\Prasklice_V3_rekonstrukce.blend</code> (kolekce <code>V3_Rekonstrukce</code>, kamera <code>V3_kamera</code>).\n</li><li>\n<strong>IFC:</strong> <code>bim\\varianty\\V3\\Prasklice_V3_rekonstrukce.ifc</code>.\n</li><li>\n<strong>Výkresy (PDF a SVG):</strong> <code>bim\\varianty\\V3\\vykresy\\</code>\n<ul><li>\nP02 1.NP, P03 2.NP, P04 podkroví;\n</li><li>\nR01 x = 12 (obývák), R02 x = 5 (schody do podkroví), R03 y = 4,2 (podélný), R04 x = 18 (skládací schody, vstup);\n</li><li>\nV02 dvorní pohled.\n</li></ul>\n</li><li>\n<strong>Pohledy:</strong> <code>bim\\varianty\\V3\\V3_pohled_obyvak.png</code>, <code>V3_pohled_hala_schody.png</code>, <code>V3_pohled_podkrovi_pokoj.png</code>.\n</li><li>\n<strong>Twinmotion:</strong> <code>twinmotion\\Prasklice_V3_rekonstrukce.fbx</code>.\n</li><li>\n<strong>Skripty:</strong>\n<ul><li>\n<code>scripts\\b11_varianta3.py</code> (model; parametry jsou nahoře ve skriptu);\n</li><li>\n<code>scripts\\b12_varianta3_ifc_vykresy.py</code> (IFC a výkresy);\n</li><li>\npak <code>17_export_vykresy.py … V3</code> (PDF).\n</li></ul>\n</li></ul>",
   "rendery": {
    "ulice": "img/V3/ulice.webp",
    "dvur": "img/V3/dvur.webp",
    "rez_1np": "img/V3/rez_1np.webp",
    "rez_2np": "img/V3/rez_2np.webp",
    "rez_podkrovi": "img/V3/rez_podkrovi.webp"
   },
   "patra": [
    {
     "kod": "P01",
     "nazev": "Sklep",
     "vykres": {
      "kod": "P01",
      "nazev": "Půdorys sklepa (řez v −1,30)",
      "src": "img/stav/vykres_P01.webp",
      "pdf": "pdf/stav/P01_Pudorys_sklep.pdf"
     },
     "zdedeno": true,
     "rez3d": null,
     "mistnosti": [
      {
       "c": "0.01",
       "n": "Sklep",
       "st": "SK",
       "a": 14.31,
       "h": 1.98,
       "z": -2.36
      }
     ]
    },
    {
     "kod": "P02",
     "nazev": "1.NP – přízemí",
     "vykres": {
      "kod": "P02",
      "nazev": "Půdorys 1.NP – návrh (schodiště do patra)",
      "src": "img/V3/vykres_P02.webp",
      "pdf": "pdf/V3/V3_P02_Pudorys_1NP.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/V3/rez_1np.webp",
     "mistnosti": [
      {
       "c": "P.01",
       "n": "Průjezd / garáž",
       "st": "PR",
       "a": 23.12,
       "h": 3.53,
       "z": -1.23
      },
      {
       "c": "1.01",
       "n": "Pokoj A",
       "st": "NP1",
       "a": 24.08,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.02",
       "n": "Pokoj B",
       "st": "NP1",
       "a": 30.31,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.03",
       "n": "Chodba",
       "st": "NP1",
       "a": 12.82,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.04",
       "n": "Pokoj D",
       "st": "NP1",
       "a": 13.85,
       "h": 2.72,
       "z": 0.0
      },
      {
       "c": "1.06",
       "n": "Zadní trakt 1",
       "st": "NP1",
       "a": 16.02,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.07",
       "n": "Zadní trakt 2",
       "st": "NP1",
       "a": 5.42,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.08",
       "n": "Zadní trakt 3",
       "st": "NP1",
       "a": 8.49,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.08a",
       "n": "WC",
       "st": "NP1",
       "a": 2.1,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.09",
       "n": "Zadní trakt 4",
       "st": "NP1",
       "a": 16.55,
       "h": 2.44,
       "z": 0.0
      },
      {
       "c": "1.10",
       "n": "Zadní trakt 5",
       "st": "NP1",
       "a": 14.71,
       "h": 2.44,
       "z": 0.0
      }
     ]
    },
    {
     "kod": "P03",
     "nazev": "2.NP – patro",
     "vykres": {
      "kod": "P03",
      "nazev": "Půdorys 2.NP – návrh (řez v +4,00)",
      "src": "img/V3/vykres_P03.webp",
      "pdf": "pdf/V3/V3_P03_Pudorys_2NP.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/V3/rez_2np.webp",
     "mistnosti": [
      {
       "c": "N.01",
       "n": "Místnost nad průjezdem",
       "st": "NADPR",
       "a": 24.38,
       "h": 2.62,
       "z": 2.6,
       "mimo": "Samostatný prostor nad průjezdem / garáží – bude vyžadovat úplně jiné řešení než zbytek domu, proto se nezapočítává do součtů ploch."
      },
      {
       "c": "2.01",
       "n": "Obývací pokoj + kuchyň (do krovu)",
       "st": "NP2",
       "a": 31.56,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.02",
       "n": "Ložnice",
       "st": "NP2",
       "a": 14.74,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.03",
       "n": "Hala + schody do podkroví",
       "st": "NP2",
       "a": 13.32,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.04",
       "n": "Pokoj",
       "st": "NP2",
       "a": 14.51,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.05",
       "n": "Vstupní hala (půdní schody)",
       "st": "NP2",
       "a": 12.2,
       "h": 2.5,
       "z": 3.03
      },
      {
       "c": "2.06",
       "n": "Šatna",
       "st": "NP2",
       "a": 7.19,
       "h": 2.54,
       "z": 3.03
      },
      {
       "c": "2.07",
       "n": "Koupelna",
       "st": "NP2",
       "a": 9.26,
       "h": 2.54,
       "z": 3.03
      },
      {
       "c": "2.08",
       "n": "Prádelna + technika",
       "st": "NP2",
       "a": 8.44,
       "h": 2.54,
       "z": 3.03
      },
      {
       "c": "2.09",
       "n": "Chodba",
       "st": "NP2",
       "a": 9.7,
       "h": 2.77,
       "z": 3.03
      },
      {
       "c": "2.10",
       "n": "Schodiště z 1.NP + chodba",
       "st": "NP2",
       "a": 11.76,
       "h": 2.77,
       "z": 3.03
      },
      {
       "c": "2.11",
       "n": "WC",
       "st": "NP2",
       "a": 5.0,
       "h": 2.54,
       "z": 3.03
      },
      {
       "c": "2.12",
       "n": "Pracovna / pokoj",
       "st": "NP2",
       "a": 12.63,
       "h": 2.54,
       "z": 3.03
      }
     ]
    },
    {
     "kod": "P04",
     "nazev": "Podkroví / půda",
     "vykres": {
      "kod": "P04",
      "nazev": "Půdorys podkroví – návrh (řez v +6,50)",
      "src": "img/V3/vykres_P04.webp",
      "pdf": "pdf/V3/V3_P04_Pudorys_podkrovi.pdf"
     },
     "zdedeno": false,
     "rez3d": "img/V3/rez_podkrovi.webp",
     "mistnosti": [
      {
       "c": "3.01",
       "n": "Pokoj v podkroví",
       "st": "PUDA",
       "a": 28.67,
       "h": 2.55,
       "z": 5.75
      },
      {
       "c": "3.02",
       "n": "Půda – sklad",
       "st": "PUDA",
       "a": 27.3,
       "h": 2.55,
       "z": 5.75
      }
     ]
    }
   ]
  }
 ]
};
