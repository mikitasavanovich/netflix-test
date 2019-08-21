import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import { getShows } from '../../api/shows';

import logo from '../../images/logo.png';
import './App.css';

const App = () => {
  const [shows, setShows] = useState([]);
  const [searchInProgress, setSearchInProgress] = useState(true);
  const [searchValues, setSearchValues] = useState({});

  const fetchShows = async () => {
    const shows = await getShows(searchValues);
    setShows(shows);
    setSearchInProgress(false);
  }

  useEffect(() => {
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
      </div>
    </div>
  );
}

export default App;
