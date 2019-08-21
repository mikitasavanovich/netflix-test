const Koa = require('koa');
const cors = require('@koa/cors');
const router = require('./router');

const PORT = process.env.PORT || 3000;

const app = new Koa();

app.use(cors());
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        console.error(error);
        ctx.status = 500;
    }
})
app.use(router.routes());

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
