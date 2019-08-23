"use strict";

const appFactory = require("./app");

const app = appFactory.create();

module.exports["hello"] = (req, res) => {
  // Hack to pass the parsed body into koa
  req.headers["body"] = req.body;
  return app.callback()(req, res);
};
