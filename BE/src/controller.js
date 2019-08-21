const service = require('./service');

const DEFAULT_LIMIT = 16;
const DEFAULT_OFFSET = 0;

const getShows = async (ctx) => {
    const searchParams = {
        title: ctx.query.title,
        lowerThanRating: Number(ctx.query.max_rating),
        higherThanRating: Number(ctx.query.min_rating),
        releaseYear: Number(ctx.query.year),
        categories: JSON.parse(ctx.query.categories || "[]"),
        limit: Number(ctx.query.limit) || DEFAULT_LIMIT,
        offset: Number(ctx.query.offset) || DEFAULT_OFFSET
    }
    console.log(searchParams)
    const shows = await service.getShows(searchParams);

    ctx.body = shows;
}

module.exports = {
    getShows
};
