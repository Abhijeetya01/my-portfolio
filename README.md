<h1 align="center">Abhijeet Ranjan | Portfolio</h1>

<p align="center">
  Software Developer · AWS Cloud &amp; Full-Stack Development<br>
  A fast, responsive portfolio built with plain HTML, CSS and JavaScript.
</p>

<p align="center">
  <a href="https://<your-username>.github.io/<repo-name>/"><b>Live site</b></a> ·
  <a href="assets/Abhijeet_Ranjan_Resume.pdf"><b>Resume (PDF)</b></a> ·
  <a href="https://www.linkedin.com/in/abhijeetya503"><b>LinkedIn</b></a>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black">
  <img alt="GitHub Pages" src="https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222?logo=github&logoColor=white">
</p>

---

## About this project

I wanted a portfolio that recruiters can scan in a minute and that shows how I build, not just what I list. It has no framework, no build step and no dependencies. Open `index.html` and it runs.

The hero is a terminal-style profile card that prints my stack line by line. Below it, the page covers who I am, what I work with, what I've built, and how to reach me.

## What's on the site

| Section | What you'll find |
|---|---|
| **Home** | Intro, resume download, LinkedIn and GitHub buttons, animated profile card |
| **About me** | Summary and an experience timeline (CipherPeak Technologies, Mahendra Skills Training) |
| **Technical skills** | Highlighted Cloud & DevOps panel (AWS EC2, Linux, deployment) and a filterable skill list |
| **Projects** | KhetWali, Full-Stack E-Commerce App, REPTO, Yattriwala, College Complaint Portal, Orange Grand Website |
| **Education** | B.E. Computer Software Engineering (CGPA 8.01) and Higher Secondary |
| **Certifications** | IBM SkillsBuild, Google Cloud, a conference publication and Capgemini Inspirathon |
| **Contact** | Email, phone, LinkedIn, copy-email button and a message form |

## Features

- Responsive layout for desktop, tablet and mobile, with a slide-down menu on small screens
- Light and dark themes, remembered between visits and following your system setting by default
- Skill filter by category: Languages, Frontend, Backend, Databases, Cloud & DevOps, Tools
- Navigation that highlights the section you're reading
- One-click resume download and copy-to-clipboard email
- Contact form that opens your email app with the message filled in
- Accessible by design: skip link, visible keyboard focus, and reduced-motion support

## Tech stack

HTML5, CSS3 (custom properties, grid, flexbox) and vanilla JavaScript. Fonts are Bricolage Grotesque, IBM Plex Sans and IBM Plex Mono from Google Fonts.

## Project structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── config.js        # GitHub, LinkedIn, email and phone links
│   └── main.js
├── assets/
│   ├── Abhijeet_Ranjan_Resume.pdf
│   └── favicon.svg
└── .nojekyll
```

## Run it locally

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
python -m http.server 8000
```

Open http://localhost:8000. You can also double-click `index.html`.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository, with `index.html` at the root.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main**, folder **/ (root)**, then **Save**.
5. After a minute or two, the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Make it yours

- **Links:** set your GitHub URL in `js/config.js`. GitHub buttons stay hidden until you do.
- **Resume:** replace `assets/Abhijeet_Ranjan_Resume.pdf` and keep the file name.
- **Content:** edit the sections in `index.html`.
- **Colors:** change the variables at the top of `css/style.css`.

## Contact

- Email: [abhijeetya.ssm02@gmail.com](mailto:abhijeetya.ssm02@gmail.com)
- LinkedIn: [linkedin.com/in/abhijeetya503](https://www.linkedin.com/in/abhijeetya503)
- Location: Chennai, Tamil Nadu, India

I'm looking for entry-level roles as a Software Developer, AWS Cloud Engineer or DevOps Specialist. If you're hiring, I'd like to hear from you.

---

<p align="center">Built by Abhijeet Ranjan</p>
