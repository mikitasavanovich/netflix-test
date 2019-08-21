import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import ShowsList from '../ShowsList';
import { getShows } from '../../api/shows';

import logo from '../../images/logo.png';
import './App.css';

const App = () => {
  const [shows, setShows] = useState([]);
  const [searchInProgress, setSearchInProgress] = useState(true);
  const [searchValues, setSearchValues] = useState({});
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      const offset = shows.length;
      const result = await getShows(searchValues, offset);
      setShows([
        ...shows,
        ...result.shows
      ]);
      setHasMore(result.hasMore);
      setSearchInProgress(false);
    }

    if (searchInProgress) {
      fetchShows();
    }
}, [searchInProgress]);

  return (
    <div className='app bg-dark'>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='Netflix logo' />
          <h2 className='text-white'>Netflix TV shows</h2>
        </div>
        <SearchBar
          searchForShows={setSearchInProgress}
          searchValues={searchValues}
          setSearchValues={setSearchValues}
        />
        <ShowsList
          hasMore={hasMore}
          searchForShows={setSearchInProgress}
          shows={shows}
        />
      </div>
    </div>
  );
}

export default App;
