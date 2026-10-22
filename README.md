# Abhijeet Ranjan – Portfolio

A responsive portfolio built with plain HTML, CSS and JavaScript. No build step or dependencies. All content comes from the resume in `assets/`.

## Structure

```
index.html
css/style.css
js/config.js        <- your links live here
js/main.js
assets/Abhijeet_Ranjan_Resume.pdf
assets/favicon.svg
.nojekyll
```

## 1. Add your GitHub link

Open `js/config.js` and set:

```js
github: "https://github.com/your-username",
```

Until you do, GitHub buttons stay hidden so visitors never hit a broken link. LinkedIn, email and phone are already set from the resume.

## 2. Preview locally

Double-click `index.html`, or run a local server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## 3. Deploy on GitHub Pages

1. Create a new repository on GitHub, for example `portfolio` (or `<your-username>.github.io` for a root URL).
2. Upload everything from this folder to the repository root, so `index.html` is at the top level. With Git:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then **Save**.
5. Wait one to two minutes. Your site will be live at `https://<your-username>.github.io/<repo>/` (or `https://<your-username>.github.io/` for the `.github.io` repository).

## Updating content

- **Resume:** replace `assets/Abhijeet_Ranjan_Resume.pdf`, keeping the same file name.
- **Text, skills, projects:** edit `index.html`.
- **Colors:** edit the variables at the top of `css/style.css`.
- **Project links:** add an `<a href="...">` inside a project card once repositories or live demos exist.

## Notes

- The contact form opens the visitor's email app with the message filled in. There is no server, so nothing is stored.
- Fonts load from Google Fonts. If offline, the site falls back to system fonts.
