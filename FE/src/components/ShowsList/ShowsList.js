import React from 'react';
import ShowCard from '../ShowCard';

import './ShowsList.css';

const ShowsList = ({ shows }) => {
    const showsToShow = shows.slice(0, 12);
    
    return (
        <div className='shows-list'>
            {shows.map((show) => <ShowCard show={show} />)}
        </div>
    );
}

export default ShowsList;
