"use strict";

const appFactory = require("./src/app");

const app = appFactory.create();

module.exports = {
  app: (req, res) => {
    // Hack to pass the parsed body into koa
    req.headers["body"] = req.body;
    return app.callback()(req, res);
  },
  hello: (req, res) => {
    // Hack to pass the parsed body into koa
    req.headers["body"] = req.body;
    return app.callback()(req, res);
  }
};
