const cache = require('memory-cache');
const fetch = require('node-fetch');
const filterShows = require('./utils/filterShows');

const SHOWS_URL = 'http://54.172.194.177/tv.json';
const SHOWS_CACHE_KEY = 'shows';
const SHOWS_CACHE_TIMEOUT_MS = 600 * 1000; // 10 minutes;
const DEFAULT_LIMIT = 15;
const DEFAULT_OFFSET = 0;

const getShows = async (params, limit = DEFAULT_LIMIT, offset = DEFAULT_OFFSET) => {
    const filteredShowsCacheKey = JSON.stringify(params);
    let filteredShows = cache.get(filteredShowsCacheKey);

    if (!filteredShows) {
        let shows = cache.get(SHOWS_CACHE_KEY);

        if (!shows) {
            const response = await fetch(SHOWS_URL);
            shows = await response.json();
        }
        cache.put(SHOWS_CACHE_KEY, shows, SHOWS_CACHE_TIMEOUT_MS);
        filteredShows = filterShows(shows, params);
    }
    cache.put(filteredShowsCacheKey, filteredShows, SHOWS_CACHE_TIMEOUT_MS);

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