const Koa = require('koa');
const router = require('./router');

const PORT = process.env.PORT || 3000;

const app = new Koa();

app.use(router.routes());

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
