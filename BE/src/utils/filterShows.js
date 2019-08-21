module.exports = (shows, {
    title,
    lowerThanRating,
    higherThanRating,
    releaseYear,
    categories
}) => (
    shows.filter((show) => {
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
    })
)