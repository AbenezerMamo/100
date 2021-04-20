# rexpress

Just a way to organize your mvc express apps

## Install

```
$ npm install --save rexpress
```

## Usage
server.js
```js
const http = require('http');
const express = require('express');
const Rex = require('rexpress');
const router = express();
const app = new Rex(router);
const server = http.createServer(router);

const middlewares = require('./middlewares');
const controllers = require('./controllers');

app.setMiddlewares(middlewares);
app.setControllers(controllers);

server.listen(5000, (err) => {
  if(err)console.log(err);
  else console.log('Magic on 5000');
});
```
middlewares.js
```js
const express = require('express');

function mymid (req, res, next) {
  console.log('mymid working for this route');
  next();
}

module.exports = function (rex) {
  rex.load('static', express.static('public'));
  rex.load('mymid', mymid);
  
  //We use 'use' for those middlewares that are going to work with every route
  rex.use('static');
};
```
controllers.js
```js
const Test = require('./controllers/test'); //Doesn't matter where you want to have your controllers

module.exports = {
  'test': Test
};
```
/controllers/test.js
```js
const Test = function (rex) {// Note that rex is not an express router instance.
  //Just route and handler
  rex.get('/test', this.get);
  //Using middleware preloaded in middlewares.js
  rex.get('/test2', 'mymid', this.get2);
};

Test.prototype.get = function (req, res) {
  console.log('test working');
  res.end();
};

Test.prototype.get2 = function (req, res) {
  console.log('test with middleware working');
  res.end();
};

module.exports = Test;
```
