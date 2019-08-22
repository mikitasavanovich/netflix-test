import React from 'react';
import ShowCard from '../ShowCard';

import './ShowsList.css';

const ShowsList = ({ shows, hasMore, setSearchInProgress }) => {    
    return (
        <div className='shows-list'>
            {!shows.length && (
                <div className='spinner-border text-danger'>
                    <span className='sr-only'>Loading...</span>
                </div>
            )}
            {shows.map((show) => <ShowCard key={show.title} show={show} />)}
        </div>
    );
}

export default ShowsList;
