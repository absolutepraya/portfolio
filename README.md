## 📌 Notes:

- Code has not been refactored yet, because it was done quickly in ~1 week
- Motion element and animations are not implemented yet
- Responsive design has only been implemented for mobile and desktop, not for tablets

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

***Don't forget to run them before pushing your code.***


## Production

- Build for production:
```bash
$ npm run build
```

- Build for production (Heroku):
```bash
$ npm start
```