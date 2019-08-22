import $ from 'jquery';

const API_URL = process.env.REACT_APP_API_URL;
const NUMBER_OF_ITEMS_PER_PAGE = 15;

export const getShows = async ({
    title,
    minRating,
    maxRating,
    releaseYear
}, offset) => {
    const searchParams = {
        title,
        min_rating: minRating,
        max_rating: maxRating,
        year: releaseYear,
        limit: NUMBER_OF_ITEMS_PER_PAGE,
        offset
    };
    const requestUrl = `${API_URL}/api/shows?${$.param(searchParams)}`;

    const response = await fetch(requestUrl);
    const json = await response.json();

    return json;
}