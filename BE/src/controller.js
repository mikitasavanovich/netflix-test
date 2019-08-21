const service = require('./service');

const getShows = async (ctx) => {
    const searchParams = {
        title: ctx.query.title,
        lowerThanRating: Number(ctx.query.max_rating),
        higherThanRating: Number(ctx.query.min_rating),
        releaseYear: Number(ctx.query.year),
        categories: JSON.parse(ctx.query.categories || "[]"),
        limit: ctx.query.limit,
    }
    const shows = await service.getShows(searchParams);

    ctx.body = shows;
}

module.exports = {
    getShows
};
