## Simple Electron React Boilerplate

This is a simple boilerplate to get up and running with Electron and React.

### Install

#### Clone this repo

```
git clone https://github.com/Malzagic/electronjs-reactjs-simple-boilerplate
```

#### Install dependencies

```
npm install
```

### Usage

#### Run the app

```
npm start
```

#### Build the app (automatic)

### Change isDev variable to false to avoid open devtools (i am going to change this in the future to use NODE_ENV)

Change the app title in the **webpack.build.config.js** and the **webpack.dev.config.js** 

```
npm run package
```

or 

```
npm run make
```



#### Build the app (specified platform)

```
npm run make-win
```

or

```
npm run make-linux
```

or

```
npm run make-macos
```
