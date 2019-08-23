module.exports = async function bodyParser(ctx, next) {
  // Hack to pass the parsed body into koa from gcf
  ctx.request.body = ctx.request.header.body;
  delete ctx.request.header.body;

  await next();
};
