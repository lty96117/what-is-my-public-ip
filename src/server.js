const Koa = require('koa');
const app = new Koa();

// response

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(ctx => {
  ctx.body = { 'ctx.ip': ctx.ip, 'ctx.ips': ctx.ips };
});

const { PORT = 8080 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT} => http://localhost:8080/`));
