import $ from 'jquery';

const API = 'http://localhost:3000/api';
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
    const requestUrl = `${API}/shows?${$.param(searchParams)}`;

    const response = await fetch(requestUrl);
    const json = await response.json();

    return json;
}