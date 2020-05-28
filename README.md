<h1 align="center">🌐 Opinionated Sapper project base</h1>

## ❓ What is this?
The site that builds from this repository can be found [here](https://fir-sapper-tailwindcss.web.app/).

This is an extremely opinionated Sapper project base intended for my own use. That being said, there is quite a bit of work put into it to make it generalized and adaptable to your own setup, given that you want to use *most* of these things. The lower something is on this list, the easier it is to reconfigure or remove:
- [Sapper for Svelte](https://sapper.svelte.dev/)
  - [Official VS Code Plugin (beta)](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [Firebase](https://firebase.google.com/)
  - [Functions](https://firebase.google.com/docs/functions/) for Server Side Rendering (SSR)
  - [Hosting](https://firebase.google.com/docs/hosting)
  - Thanks to [`sapper-firebase-starter`](https://github.com/Eckhardt-D/sapper-firebase-starter)
- [TypeScript](https://www.typescriptlang.org/)
  - [TypeGraphQL](https://typegraphql.ml/)
  - Inside Svelte components, thanks to [`svelte-preprocess`](https://github.com/kaisermann/svelte-preprocess)
- [PostCSS](https://postcss.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [postcss-import](https://github.com/postcss/postcss-import)
  - [PurgeCSS](https://www.purgecss.com/)
  - [CSSNano](https://cssnano.co/)
  - Inside Svelte components, thanks to [`svelte-preprocess`](https://github.com/kaisermann/svelte-preprocess)
- [GitHub Actions](https://github.com/features/actions)
  - Automatic building and deployment to Firebase, triggered on commits to master
- [ESLint](https://eslint.org/)
  - [VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - `eslint:fix` package script
- [Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) best practices set up
  - [`manifest.json`](https://developer.mozilla.org/en-US/docs/Web/Manifest)'s most important fields filled out
  - High [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit score

## 📋 Copy

Choose either to clone or fork depending on your preference.

### 🐑 Clone

```sh
git clone https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template
```

### 🍴 Fork

Click the `Use this template` button on [this project's GitHub page](https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template).

### ⬇️ Install Dependencies
Both the project root's dependencies,
```sh
cd sapper-firebase-typescript-graphql-tailwindcss-actions-template
npm install  # pnpm also works
```
and the Firebase functions' dependencies (for deploying outside of GitHub Actions) need to be installed.
```sh
cd functions
npm install
```


## 🛠 Usage

### 🧪 Development

```sh
npm run dev
```

### 🔥 Deployment to Firebase
This will create a production build for you before deploying.
```sh
npm run deploy
```

If you do not need to include heavy Babel transforms and polyfills to support old browsers on your site, then remove the `--legacy` flag in the `sapper:build` package script to lighten it up.

### 🔨 Testing Production Builds Locally
This probably pairs well with [Firebase Emulators](https://firebase.google.com/docs/rules/emulator-setup).
```sh
npm run prod
npm run start
```

## ⚙ Configuration

### 🔥 Firebase and 🐙 GitHub Actions
The least you should need to do to get started is to edit `.firebaserc`, changing the project ID to *your* project (initialized in the [Firebase console](https://console.firebase.google.com/)) ID.

For automatic building and deployment to work, you need to generate [a CI login token from Firebase](https://firebase.google.com/docs/cli#cli-ci-systems):
```sh
npm run firebase login:ci
```
Then, go to your repository's Settings > Secrets. Copy the result of the command above and save it as a Secret named `FIREBASE_TOKEN`.

You can test if it's working by making a commit to `master` and checking the Actions tab of your repository to see if your project successfully builds and deploys to Firebase.

### ⚡ Web app
Many of the fields in `static/manifest.json` (`short_name`, `name`, `description`, `categories`, `theme_color`, and `background_color`) are filled with demonstrative values that won't match your site. Similarly, you've got to take new screenshots to replace the included `static/screenshot-1.png` and `static/screenshot-2.png` files. Once you change `theme_color`, update the `meta name="theme-color"` tag in `src/template.html` to match.

The [Apple touch icon](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html), favicon, and `logo-` files (also all in the `static` directory) are created by placing the logo within a "safe area" centered circle that takes up 80% of the canvas's dimension. For instance, the constraining circle in `logo-512.png` is 512 × 0.80 = 409.6 ≈ 410 pixels wide and tall. 

### 🕸️ TypeGraphQL
Edit the `namedExports` in `rollup.config.js` for `"type-graphql"` [when you need to import something from the library](https://github.com/MichalLytek/type-graphql/issues/378).

### 🗺 Source maps
This project base comes with [source maps](https://blog.teamtreehouse.com/introduction-source-maps) enabled during development and disabled during production for the best compromise between performance and developer experience. You can change this behavior through the `sourcemap` variable in `rollup.config.js`.

### 💨 Optionally removing Tailwind CSS

1. Remove all Tailwind imports in the `src/global.pcss` file
2. Remove these lines in `postcss.config.js`:
    1. ```js
       import tailwindcss from "tailwindcss";
       ```
    3. ```js
       import tailwindcssConfig from "./tailwind.config";
       ```
    3. ```js
       tailwindcss(tailwindcssConfig),
       ```
3. Delete the `tailwind.config.js` file
4. Uninstall the `tailwindcss` package

## 😵 Help! I have a question

[Create an issue](https://github.com/babichjacob/sapper-typescript-graphql-template/issues/new) and I'll try to help.

## 😡 Fix! There is something that needs improvement

[Create an issue](https://github.com/babichjacob/sapper-typescript-graphql-template/issues/new) or [pull request](https://github.com/babichjacob/sapper-typescript-graphql-template/pulls) and I'll try to fix.

I'm sorry, because of my skill level and the fragility of (the combination of) some of these tools, there are likely to be problems in this project. Thank you for bringing them to my attention or fixing them for me.

## 📄 License

MIT

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
