import React from 'react';
import ShowCard from '../ShowCard';

import './ShowsList.css';

const ShowsList = ({ shows, hasMore, setSearchInProgress }) => {    
    return (
        <div className='shows-list'>
            {shows.map((show) => <ShowCard key={show.title} show={show} />)}
        </div>
    );
}

export default ShowsList;
