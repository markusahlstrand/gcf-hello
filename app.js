const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const routes = require("./routes");
const gcfBodyParser = require("./middlewares/gcfBodyParser");

function create(environment) {
  const app = new Koa();

  if (environment === "koa2") {
    app.use(bodyParser());
  } else {
    app.use(gcfBodyParser);
  }

  routes.create(app);

  return app;
}

module.exports = {
  create
};
