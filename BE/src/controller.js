const service = require('./service');

const getShows = async (ctx) => {
    const searchParams = {
        title: ctx.query.title,
        lowerThanRating: Number(ctx.query.max_rating),
        higherThanRating: Number(ctx.query.min_rating),
        releaseYear: Number(ctx.query.year),
        categories: ctx.query.categories ? JSON.parse(ctx.query.categories) : []
    };

    const shows = await service.getShows(
        searchParams,
        Number(ctx.query.limit),
        Number(ctx.query.offset)
    );

    ctx.body = shows;
}

const getCategories = async (ctx) => {
    const categories = await service.getCategories();

    ctx.body = categories;
}

module.exports = {
    getShows,
    getCategories
};
