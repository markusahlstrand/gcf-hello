const packageJson = require("../../package.json");
const Router = require("koa-router");
const _ = require("lodash");

function create(app) {
  const router = new Router();

  router.get("/", ctx => {
    ctx.body = {
      name: packageJson.name,
      version: packageJson.version
    };
  });

  router.post("/hook", ctx => {
    const config = ctx.request.body;

    // Add any new names to config
    const handlers = _.get(config, "install.options.handlers", []);
    handlers.forEach(handler => {
      if (!handler.name.length) {
        handler.name = handler.handler;
      }
    });

    ctx.body = config;
  });
  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = {
  create
};
