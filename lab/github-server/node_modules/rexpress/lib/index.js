
'use strict';

const Rex = function (app) {
    if (!(this instanceof Rex)) {
        return new Rex(app);
    }
    this.app = app;
    this.middlewares = {};
    this.controllers = [];
    this.plugins = {};
};

Rex.prototype.setMiddlewares = function (middlewares) {
    middlewares(this);
};

Rex.prototype.load = function (name, fn) {
    this.middlewares[name] = fn;
};

Rex.prototype.use = function (name) {
    this.app.use(this.middlewares[name]);
};

Rex.prototype.setPlugin = function (name, plugin) {
    this.plugins[name] = plugin;
};

Rex.prototype.getPlugin = function (name) {
    return this.plugins[name];
};

Rex.prototype.setControllers = function (controllers) {
    console.log('\n\t/********************Routes********************/\n');
    for(var controller in controllers){
        this.controllers.push(new controllers[controller](this));
    }
    console.log('\n\t/**********************************************/\n');
};

Rex.prototype.route = function (method, path, middle, fn) {
    if(typeof fn === 'undefined'){
        fn = middle;
        console.log(`\t\t${method}\t${path}`);
        this.app[method](path, fn);
    }else{
        let args = Array.prototype.slice.call(arguments);
        args = args.slice(2, args.length);
        console.log(`\t\t${method}\t${path}\t(${args.slice(0, args.length - 1).join(', ')})`);
        args = args.map((arg) => {
            if(typeof arg === 'string'){
                return this.middlewares[arg];
            }else{
                return arg;
            }
        });
        args.unshift(path);
        this.app[method].apply(this.app, args);
    }
};

Rex.prototype.get = function() {
    let args = Array.prototype.slice.call(arguments);
    args.unshift('get');
    this.route.apply(this, args);
};

Rex.prototype.post = function() {
    let args = Array.prototype.slice.call(arguments);
    args.unshift('post');
    this.route.apply(this, args);
};

Rex.prototype.put = function() {
    let args = Array.prototype.slice.call(arguments);
    args.unshift('put');
    this.route.apply(this, args);
};

Rex.prototype.delete = function() {
    let args = Array.prototype.slice.call(arguments);
    args.unshift('delete');
    this.route.apply(this, args);
};

module.exports = Rex;
