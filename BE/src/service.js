const cache = require('memory-cache');
const fetch = require('node-fetch');
const filterShows = require('./utils/filterShows');

const SHOWS_URL = 'http://54.172.194.177/tv.json';
const DEFAULT_LIMIT = 15;
const DEFAULT_OFFSET = 0;

const getShows = async (params, limit = DEFAULT_LIMIT, offset = DEFAULT_OFFSET) => {
    const filteredShowsCacheKey = JSON.stringify(params);
    let filteredShows = cache.get(filteredShowsCacheKey);

    if (!filteredShows) {
        let shows = cache.get('shows');

        if (!shows) {
            const response = await fetch(SHOWS_URL);
            shows = await response.json();
        }
        cache.put('shows', shows, 100000);
        filteredShows = filterShows(shows, params);
    }
    cache.put(filteredShowsCacheKey, filteredShows, 10000);

    const showsToSend = filteredShows.slice(offset, offset + limit);
    const hasMore = filteredShows.length > offset + limit;

    return {
        shows: showsToSend,
        hasMore: true
    };
}

module.exports = {
    getShows
}