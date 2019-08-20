const fetch = require('node-fetch');

const SHOWS_URL = 'http://54.172.194.177/tv.json';

const getShows = async () => {
    const response = await fetch(SHOWS_URL);
    const json = await response.json();

    return json;
}

module.exports = {
    getShows
}