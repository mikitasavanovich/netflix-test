const Router = require('koa-router');
const controller = require('./controller');

const router = new Router({ prefix: '/api' });

router.get('/shows', controller.getShows);
router.get('/categories', controller.getCategories);

module.exports = router;