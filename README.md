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

## Deploy to Firebase with Real-time Database

### Set up Firebase

1. Add the Firebase to your web app.
2. Gear icon > Project setting. Find the Firebase SDK snippet section. Select Config option to get the firebaseConfig.

### Create Database

1. Click on create database button.
2. Start in test mode
3. Click on the Cloud Firestore button and choose Realtime Database option
4. Go to `Database > Rules`. Paste these security rules in your Realtime Database’s Rules tab.

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### Prerequisite

```
AngularFire 5 (Use this in here)
$ npm install firebase @angular/fire --save

$ npm install -g firebase-tools
```

### Set up Angular

`environment.ts`

```
  firebase: {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "..."
  }
```

`app.module.ts`

```
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [...],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    ...
  ],
  providers: [...],
  bootstrap: [...]
})
```

### Code

```
import { AngularFireDatabase } from '@angular/fire/database';

items: Observable<any[]>;
constructor(db: AngularFireDatabase) {
  this.items = db.list('items').valueChanges();
  const relative = db.object('item').valueChanges();
}
```

#### Adding new items

Use the `push()` method to add new items on the list.

```
const itemsRef = db.list('items');
itemsRef.push({ name: newName });
```

#### Saving data

Use the `set()` method for **destructive** updates.

```
const itemRef = db.object('item');
itemRef.set({ name: 'new name!'});
```

#### Updating data

Use the `update()` method for **non-destructive** updates.

```
const itemRef = db.object('item');
itemRef.update({ age: newAge });
```

#### Deleting data

Use the `remove()` method to remove data at the object's location.

```
const itemRef = db.object('item');
itemRef.remove();
```

#### Use `snapshotChanges()` to get metadata

```
this.courseRef = db.list('Course');

this.courseRef.snapshotChanges().subscribe(actions => {
  actions.forEach(action => {
    console.log(action.type);
    console.log(action.key);
    console.log(action.payload.val());
  });
});
```

[Retrieving data as objects](https://github.com/angular/angularfire/blob/v5/docs/rtdb/objects.md)

[Retrieving data as lists](https://github.com/angular/angularfire/blob/v5/docs/rtdb/lists.md)

### Start to deploy

If encounter `Could not find plugin "proposal-numeric-separator" ...`, when `ng build`

1. ADD "@babel/compat-data": "7.8.0" to package.json
2. CLEAN node_modules
3. DELETE package-lock.json
4. RUN npm install
5. RUN ng build

```
{
  "scripts": {
    // no change here
  },
  "dependencies": {
    // no change here
  },
  "devDependencies": {
    "@babel/compat-data": "7.8.0" // added
  }
}
```

[Error | Could not find plugin "proposal-numeric-separator" | Generating ES5 bundles for differential loading](https://github.com/angular/angular-cli/issues/17262)

```Bash
$ firebase login
$ firebase init

$ ng build --prod
$ firebase deploy
```

Use `firebase open hosting:site` to open the website

### Reference website (deploy to Firebase with Real-time Database)

[The official Angular library for Firebase](https://github.com/angular/angularfire#readme)

[The official Angular library for Firebase v5](https://github.com/angular/angularfire/blob/v5/docs/install-and-setup.md)

[Deploy Angular 8/9 App to Firebase](https://www.positronx.io/deploy-angular-8-app-to-firebase/)

[Create Firebase Account | Setup AngularFire2 Library in Angular 7](https://www.positronx.io/setup-angularfire2-library-in-angular-7-project/)

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
