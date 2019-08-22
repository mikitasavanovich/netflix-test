import React from 'react';

const ShowCard = ({
    show: {
        title,
        imdb,
        date_released,
        category
    }
}) => {
    const categories = category.split('\n').map((item) => item.trim());

    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>Imdb: {imdb || '-'}</p>
                <p className='card-text'>Release date {new Date(date_released).toLocaleDateString()}</p>
                <p className='card-text'>
                    {categories.map((item) => (
                        <span key={item} className='badge badge-secondary mx-1'>{item}</span>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default ShowCard;
