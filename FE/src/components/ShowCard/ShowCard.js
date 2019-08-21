import React from 'react';

const ShowCard = ({
    show: {
        title,
        imdb,
        date_released
    }
}) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>Imdb: {imdb || '-'}</p>
                <p className='card-text'>Release date {new Date(date_released).toLocaleDateString()}</p>
            </div>
        </div>
    );
}

export default ShowCard;
