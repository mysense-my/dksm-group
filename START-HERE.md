# DKSM website — start here

This is the DKSM Group website mockup. It's built with React + Vite + Tailwind.
You don't need GitHub: edit the files, check them in the browser, then send the
folder back.

## 1. One-time setup

1. Install **Node.js LTS** from https://nodejs.org (the big green "LTS" button).
2. Install **VS Code** from https://code.visualstudio.com if you don't have it.
3. Unzip the project, then in VS Code: **File → Open Folder…** → pick `DKSM Website`.
4. That's it. The launcher in step 2 installs everything else the first time
   (or run `npm install` in the VS Code terminal yourself).

## 2. Run the site while you work

**Double-click `Start Live Preview`** in the project folder
(`Start Live Preview.command` on Mac, `Start Live Preview.bat` on Windows).
The first time, it installs the libraries by itself. Then it opens the site in
your browser.

Leave that window open while you work. **Every time you save a file in VS Code,
the browser updates by itself within a second.** No refreshing, no GitHub,
no waiting. Close the window when you're done.

(Same thing from the VS Code terminal: `npm run dev`.)

Don't double-click `index.html`. It only shows a notice, because the site needs
this live preview to run.

The first time, your computer may block it because it came from a download:

- **Mac:** open **System Settings → Privacy & Security**, scroll down, and click
  **Open Anyway** next to the "Start Live Preview" message.
- **Windows:** on the blue "Windows protected your PC" box, click **More info →
  Run anyway**.

After that it opens normally. If it still won't run, use `npm run dev` in the
VS Code terminal instead. It does exactly the same thing.

## 3. Where to edit what

Almost every amendment is a text or image change in **`src/data/`**. You
rarely need to touch the page layouts.

| To change… | Edit this file |
|---|---|
| Company intro, slogan, stats, contact details, operating hours, timeline, mission/vision/values | `src/data/company.ts` |
| Leadership (names, roles, photos, bios) | `src/data/team.ts` |
| Service lines, fire-protection systems list | `src/data/services.ts` |
| Industries | `src/data/industries.ts` |
| Projects, client logos, gallery | `src/data/projects.ts` |
| Registrations / memberships / awards logos | `src/data/credentials.ts` |
| FAQs | `src/data/faqs.ts` |
| Knowledge Centre guides | `src/data/articles.ts` |
| Company news | `src/data/news.ts` |
| Page layout and section headings | `src/pages/*.tsx` (one file per page) |
| Header menu / footer | `src/components/Header.tsx`, `src/components/Footer.tsx` |

### Images

1. Put the image in the matching folder under `public/images/`
   (e.g. a project photo goes in `public/images/projects/`).
   Use JPG or WebP, around 1400 px wide, not straight-from-camera 8 MB files.
2. In the data file, refer to it starting from `/images/`, e.g.
   `image: '/images/projects/my-photo.webp'`.

If you ever add an `<img>` directly in a page file, wrap the path with
`asset()`, like `src={asset('/images/brand/logo.png')}`. Otherwise the image
breaks on the online preview.

## 4. House rules for this client

- **Fire protection always comes before MEP** in any wording ("fire-protection
  and MEP", not "MEP and fire protection").
- **Never mention Dyno MEP Services / DMS** anywhere on the site.
- Small labels are **normal sentence case**: no ALL CAPS, no wide letter
  spacing, no "01 / 02" numbering in front of headings.
- Lines marked `TODO: Confirm` are facts still waiting on the client. Leave the
  marker in until they confirm.
- After each change, also check the page in a **phone-width** browser window.

## 5. Before sending it back

1. Stop the dev server (`Ctrl+C`) and run:

   ```
   npm run build
   ```

   If it ends with `✓ built`, you're good. If it shows red errors, fix those
   first or mention them when you send it back.
2. Write a short list of what you changed.
3. Zip the `DKSM Website` folder **without** the `node_modules` and `dist`
   folders (they're big and get recreated), and send it back.

Keep the hidden `.git` folder inside. It lets us see exactly what you
changed before we publish it online.
