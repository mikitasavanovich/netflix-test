const fetch = require('node-fetch');

const SHOWS_URL = 'http://54.172.194.177/tv.json';

const getShows = async ({
    title,
    lowerThanRating,
    higherThanRating,
    releaseYear,
    categories
}) => {
    const response = await fetch(SHOWS_URL);
    const json = await response.json();

    const filteredShows = json.filter((show) => {
        const filterResults = [];

        if (title) {
            filterResults.push(
                show.title.toLowerCase().includes(title.toLowerCase())
            );
        }

        const showRating = show.imdb
            ? Number(show.imdb.split('/')[0])
            : null;

        if (!showRating && (lowerThanRating || higherThanRating)) {
            filterResults.push(false);
        } else if (showRating) {
            lowerThanRating = lowerThanRating || 10;
            higherThanRating = higherThanRating || 0;

            filterResults.push(
                showRating
                    ? showRating >= higherThanRating
                        && showRating <= lowerThanRating
                    : false
            );
        }

        if (releaseYear) {
            const showReleaseYear = new Date(show.date_released).getFullYear();
            filterResults.push(showReleaseYear === releaseYear);
        }

        if (categories && categories.length) {
            const showCategories = show.category.split('\n').map((category) => category.trim());

            const passed = categories.every((category) => showCategories.includes(category));
            filterResults.push(passed);
        }

        return filterResults.every((result) => !!result);
    });

    return filteredShows;
}

module.exports = {
    getShows
}