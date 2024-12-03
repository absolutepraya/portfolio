## 📌 Notes:

Current website analysis score with [PageSpeed](https://pagespeed.web.dev/analysis/https-abhipraya-dev/j7zj1ndu5g?form_factor=desktop):

<div align='center'>

Desktop:

![PageSpeed Desktop](/src/assets/readme/pagespeed_desktop.webp)

Mobile:

![PageSpeed Mobile](/src/assets/readme/pagespeed_mobile.webp)

</div>

### Soon to be implemented:

- Motion element and animations are not implemented yet.
- Responsive design has only been implemented for mobile and desktop, not for tablets.

## Initial Setup

Make sure you have installed Node.js and npm on your machine.

- To install Node modules:

```bash
$ npm install
```

## Development

- Run development server:

```bash
$ npm run dev
```

or

- Run development server to be accessible from other devices (like phones):

```bash
$ npm run dev -- --host
```

## Linting and Formatting

This project uses ESLint, Prettier, and Prettier for TailwindCSS for linting and formatting. Please install the respective plugins for your code editor.

- Run ESLint:

```bash
$ npm run lint
```

If there are any errors, you can try to fix them automatically by running:

```bash
$ npm run lint -- --fix
```

- Run Prettier and Prettier for TailwindCSS (just for src):

```bash
$ npx prettier --check src
```

If there are any errors, you can try to fix them automatically by running:

```bash
$ npx prettier --write src
```

**_Don't forget to run them before pushing your code._**

## Image Optimization (Bash Script)

Install `webp` and `svgo` globally on your machine.

```bash
$ sudo apt install webp svgo -y
```

- To optimize images:

```bash
$ ./compress-optimize.sh
```

## Production

- Build for production:

```bash
$ npm run build
```

- Build for production (Heroku):

```bash
$ npm start
```
