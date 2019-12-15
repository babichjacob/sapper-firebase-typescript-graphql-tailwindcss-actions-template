<h1 align="center">🌐 Opinionated Sapper project base</h1>

## ❓ What is this?
The site built from this repo can be found [here](https://fir-sapper-tailwindcss.web.app/).

This is an extremely opinionated Sapper project base intended for my own use; that means it contains configuration to my preference and scripts fit for my (Windows) machine. That being said, there is a bit of work put into it to make it generalized and adaptable to your own setup, given that you want to use *most* of these things. The lower something is on this list, the easier it is to reconfigure or remove:
* [Sapper](https://sapper.svelte.dev/)
  * [Svelte 3](https://svelte.dev/)
* [Firebase](https://firebase.google.com/)
  * [Functions](https://firebase.google.com/docs/functions/) for Server Side Rendering (SSR)
  * [Hosting](https://firebase.google.com/docs/hosting)
  * Thanks to [`sapper-firebase-starter`](https://github.com/Eckhardt-D/sapper-firebase-starter)
* [TypeScript](https://www.typescriptlang.org/)
  * [TypeGraphQL](https://typegraphql.ml/)
  * Inside Svelte components, thanks to [`svelte-typescript`](https://github.com/pyoner/svelte-typescript)
* [Tailwind CSS](https://tailwindcss.com/)
  * [PurgeCSS](https://www.purgecss.com/)
  * [CSSNano](https://cssnano.co/)
* [GitHub Actions](https://github.com/features/actions)
  * Automatic building and deployment (to Firebase), triggered on commits to master
* [ESLint](https://eslint.org/)
  * [VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [EditorConfig](https://editorconfig.org/)
  * [VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## 📋 Copy
Choose either to clone or fork depending on your preference.

### 🐑 Clone
```sh
git clone https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template
```
### 🍴 Fork
Click the `Use this template` button on [this project's GitHub page](https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template).

## 🛠 Usage
### 🔄 Development
```sh
npm run dev
```

### 🔥 Deployment to Firebase
This will run the `build` script for you before deploying.
```sh
npm run deploy
```

## ⚙ Configuration
### 🔥 Firebase and 🐙 GitHub Actions
The least you should need to modify to get started is to edit `.firebaserc`, changing the project ID to *your* project ID. This also, obviously, means that you need to have initialized your project in the [Firebase console](https://console.firebase.google.com/).

For automatic building and deployment to work, You need to generate [a CI login token from Firebase](https://firebase.google.com/docs/cli#cli-ci-systems):
```sh
firebase login:ci # if this doesn't work try node_modules\.bin\firebase login:ci
```
Go to your repository's Settings > Secrets. Copy the result of the command above and save it as a Secret named `FIREBASE_TOKEN`.

Test by making a commit to `master` and checking the Actions tab of your repository to see if your project successfully builds and deploys to Firebase.

### 🕸️ TypeGraphQL
Edit the `namedExports` in `rollup.config.js` for `"type-graphql"` [when you need to import something from the library](https://github.com/MichalLytek/type-graphql/issues/378).

## 😵 Help! I have a question
[Create an issue](https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template/issues/new) and I'll try to help.

## 😡 Fix! There is something that needs improvement
[Create an issue](https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template/issues/new) or [pull request](https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template/pulls) and I'll try to fix.

I'm sorry, I'm still a beginner so there are likely to be anti-patterns, bad practices, and suboptimal choices in this project. Thank you for bringing anything like that to my attention should you see any or fix them for me.

## 📄 License
MIT

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
