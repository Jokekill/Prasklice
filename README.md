# Web – RD Prasklice

A static website comparing the current state of the house with its reconstruction variants. It needs no server and no libraries.

## How to open it

- Directly: double-click `web/index.html`.
- Or through a local server, from the `E:\Prasklice` folder:
  `py -m http.server 8765 --bind 127.0.0.1 --directory web`
  Then open http://localhost:8765.
- To share it, copy the whole `web/` folder (about 6 MB). Nothing else is needed.

## What is where

| File / folder | Contents |
|---|---|
| `index.html`, `app.js`, `styl.css` | The site itself: overview, version pages, comparison, image viewer |
| `verze.json` | **Texts for the versions** (name, date, summary, key points, which drawings and models to use). Edit this by hand. |
| `data.js` | Generated data. **Do not edit by hand**; `scripts/20_web.py` overwrites it. |
| `img/<version>/` | Drawings (`vykres_*.webp`), 3D renders (`ulice`, `dvur`, `rez_1np`, `rez_2np`, `rez_podkrovi`), interior views (`pohled_N`) |
| `pdf/<version>/` | PDF drawings to download |

## Adding a new version (for example V4)

1. Build the model and its drawings as with V3:
   - drawings in `bim/varianty/V4/vykresy/` (SVG + PDF);
   - rooms in `analysis/mistnosti_V4.json`;
   - notes in `bim/varianty/V4/V4_poznamky.md`;
   - interior views `V4_pohled_*.png`;
   - model in `blender/Prasklice_V4_rekonstrukce.blend` with the collection `V4_Rekonstrukce`.
2. Run the generator with renders:
   ```
   uv run --no-project python scripts/20_web.py --rendery
   ```
   The `V4` folder is picked up automatically, with default texts taken from the notes.
3. Optional: in `verze.json`, fill in the V4 summary and key points (copy the V3 entry), then run the generator again without `--rendery`.

Version colours are predefined in `styl.css` up to V6 (`--c-V4` …). For more versions, add another line there.

## Scripts

- `scripts/20_web.py` builds the website:
  - drawings SVG → PNG (headless Edge) → cropped WebP;
  - PDF copies;
  - room areas;
  - notes;
  - `data.js`.
  It skips images that are already up to date.
- `scripts/b13_web_rendery.py` makes the 3D images of a version in Blender (street, courtyard, and floor-by-floor cuts without the roof).
- `scripts/b14_web_obrazky.py` crops white margins and converts to WebP (in Blender, using numpy).

Blender is always run in the normal way, **never with `--factory-startup`**.
