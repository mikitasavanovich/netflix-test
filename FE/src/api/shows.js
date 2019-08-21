import $ from 'jquery';

const API = 'http://localhost:3000/api'

export const getShows = async ({
    title,
    minRating,
    maxRating,
    releaseYear
}) => {
    const searchParams = {
        title,
        min_rating: minRating,
        max_rating: maxRating,
        year: releaseYear
    };
    const requestUrl = `${API}/shows?${$.param(searchParams)}`;

    const response = await fetch(requestUrl);
    const json = await response.json();

    return json;
}