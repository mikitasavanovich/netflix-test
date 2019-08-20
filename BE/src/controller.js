const service = require('./service');

const getShows = async (ctx) => {
    const shows = await service.getShows();

    ctx.body = shows;
}

module.exports = {
    getShows
};
