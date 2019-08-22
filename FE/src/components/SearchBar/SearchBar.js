import React from 'react';
import CategoryInput from '../CategoryInput';

const SearchBar = ({ searchForShows, setSearchValues, searchValues }) => {
    const changeFormValue = ({ target: input }) => {
        setSearchValues({
            ...searchValues,
            [input.getAttribute('name')]: input.value
        });
    }

    const submitForm = (event) => {
        event.preventDefault();
        searchForShows(true);
    }

    return (
        <form className='search-bar' onSubmit={submitForm}>
            <div className='search-bar__inputs d-flex justify-content-between'>
                <div className='form-group'>
                    <label className='text-white' htmlFor='title'>Title</label>
                    <input type='text' className='form-control' id='title' name='title' onChange={changeFormValue} />
                </div>
                <div className='form-group'>
                    <label className='text-white' htmlFor='rating-min'>Rating from</label>
                    <input type='text' className='form-control' id='rating-min' name='minRating' onChange={changeFormValue} />
                </div>
                <div className='form-group'>
                    <label className='text-white' htmlFor='rating-max'>Rating to</label>
                    <input type='text' className='form-control' id='rating-max' name='maxRating' onChange={changeFormValue} />
                </div>
                <div className='form-group'>
                    <label className='text-white' htmlFor='release-year'>Release year</label>
                    <input type='text' className='form-control' id='release-year' name='releaseYear' onChange={changeFormValue} />
                </div>
                <CategoryInput />
            </div>
            <button type='submit' className='btn btn-light'>Apply filters</button>
        </form>
    );
}

export default SearchBar;