"use strict";

const appFactory = require("./src/app");
const app = appFactory.create("koa2");

app.listen(3000);
console.log("Started koa2");
