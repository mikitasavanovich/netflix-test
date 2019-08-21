import React from 'react';
import ShowCard from '../ShowCard';

import './ShowsList.css';

const ShowsList = ({ shows, hasMore, setSearchInProgress }) => {
    const loadMore = ({ currentTarget }) => {
        if (!hasMore) {
            return;
        }

        if (currentTarget.scrollTop + currentTarget.clientHeight === currentTarget.scrollHeight) {
            setSearchInProgress(true);
        }
    }
    
    return (
        <div className='shows-list' onScroll={loadMore}>
            {shows.map((show) => <ShowCard key={show.title} show={show} />)}
        </div>
    );
}

export default ShowsList;
