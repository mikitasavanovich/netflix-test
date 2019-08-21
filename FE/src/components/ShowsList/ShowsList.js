import React from 'react';
import ShowCard from '../ShowCard';

import './ShowsList.css';

const ShowsList = ({ shows, hasMore, searchForShows }) => {
    const loadMore = ({ currentTarget }) => {
        if (!hasMore) {
            return;
        }

        if (currentTarget.scrollTop + currentTarget.clientHeight === currentTarget.scrollHeight) {
            searchForShows(true);
        }
    }
    
    return (
        <div className='shows-list' onScroll={loadMore}>
            {shows.map((show) => <ShowCard show={show} />)}
        </div>
    );
}

export default ShowsList;
