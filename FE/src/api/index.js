import $ from 'jquery';
import createQueryString from '../utils/createQuerySting';

const API_URL = `${process.env.REACT_APP_API_URL}/api`;
const NUMBER_OF_ITEMS_PER_PAGE = 15;

export const getShows = async ({
    title,
    minRating,
    maxRating,
    releaseYear,
    categories
}, offset) => {
    const searchParams = {
        title,
        min_rating: minRating,
        max_rating: maxRating,
        year: releaseYear,
        categories: JSON.stringify(categories),
        limit: NUMBER_OF_ITEMS_PER_PAGE,
        offset
    };
    const requestUrl = `${API_URL}/shows?${createQueryString(searchParams)}`;

    const response = await fetch(requestUrl);
    const shows = await response.json();

    return shows;
}

export const getCategories = async () => {
    const requrestUrl = `${API_URL}/categories`;

    const response = await fetch(requrestUrl);
    const categories = await response.json();

    return categories;
}