# Homework Nine

A simple frontend project built with HTML, CSS, and JavaScript. The project includes a Sass source file compiled into a CSS stylesheet and a small app entry point in `app.js`.

## Project Structure

- `index.html` — main page shell
- `app.js` — JavaScript entry point
- `model.js` — supporting model logic
- `scss/styles.scss` — Sass source stylesheet
- `css/styles.css` — compiled stylesheet
- `package.json` — npm metadata and scripts

## Setup

1. Install dependencies:

```bash
npm install
```

2. Compile Sass and watch for changes:

```bash
npm run compile:sass
```

3. Start the local development server:

```bash
npm run serve
```

## Notes

- `serve` uses `live-server` to host the project locally.
- `compile:sass` watches `scss/styles.scss` and outputs `css/styles.css`.

## License

ISC
https://in-info-web4.luddy.indianapolis.iu.edu/~aadesaki/homework-nine/
