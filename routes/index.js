const packageJson = require("../package.json");
const Router = require("koa-router");

function create(app) {
  const router = new Router();

  router.get("/", ctx => {
    ctx.body = {
      name: packageJson.name,
      version: packageJson.version
    };
  });

  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = {
  create
};
