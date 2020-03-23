# HW10ProjectDeployment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Deploy to GitHub Pages

### Prerequisite

```
$ git remote add origin <GitHub project address>
$ npm install -g angular-cli-ghpages
```

### Start to deploy

```Bash
$ ng build --prod --base-href /deploy-angular-to-github-page/
$ ngh --dir=dist/HW10-Project-Deployment --no-silent
```

or

    # Generate files to docs folder
    $ ng build --prod --output-path docs --base-href /deploy-angular-to-github-page/

    $ npx angular-cli-ghpages --dir=docs --no-silent

[The website address](https://obelisk0114.github.io/deploy-angular-to-github-page/)

### Reference website (deploy to GitHub Pages)

[GitHub Pages](https://pages.github.com/)

[Deploy to GitHub pages in Angular website](https://angular.io/guide/deployment#deploy-to-github-pages)

[angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages/blob/master/docs/README_standalone.md)

## Deploy to Firebase

### Prerequisite

1. Sign up for a Firebase Account (Google account)
2. Create a New Firebase Project
3. `$ npm install -g firebase-tools`

### Start to deploy

```Bash
$ firebase login

$ firebase init
Hosting
What do you want to use as your public directory? dist (the deployment folder. The same as "outputPath" in "angular.json")
Configure as a single-page app (rewrite all urls to /index.html)? Yes

$ ng build --prod
$ firebase deploy
```

Use `firebase open hosting:site` to open the website

### Reference website (deploy to Firebase)

[Deploy to Firebase in Angular website](https://angular.io/start/start-deployment#hosting-an-angular-app-on-firebase)

[firebase-tools](https://github.com/firebase/firebase-tools)

[Deploying an Angular CLI App to Production with Firebase](https://scotch.io/tutorials/deploying-an-angular-cli-app-to-production-with-firebase)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
