# Project CV with React

Ce projet consiste à concevoir un site (CV ) en utilisant ReactJS et Bootsrap.
- Le dossier src contient les pages du site.


## Application
Vous trouverez le site sur ce lien: (https://mauricette-g.github.io/cv-react-site/)

## Pré-requis

### installer les packages node

```sh
npm install
```

### Installer l'application react

```sh
npx create-react-app
```

## Pour l'execution de l'application

```sh
npm start
```

## Déploiement

### En local :

```sh
npm run build
npm install -g serve
serve -s build
```

### Sur github avec github-page:
Ajouter dans le fichier package.json:
"homepage": "https://myusername.github.io" 
```sh
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build"
```
Puis après, 
```sh
npm run deploy
```



