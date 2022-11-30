const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app
    .use(router.routes())
    .use(router.allowedMethods());

router.get('index', '/', (ctx, next) => {
    ctx.body = '<h1>INDEX SAYFASINA HOSGELDINIZ</h1>';
});

router.get('hakkimda', '/hakkimda', (ctx, next) => {
    ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>';
});

router.get('iletisim', '/iletisim', (ctx, next) => {
    ctx.body = '<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>';
});

app.listen(3000)