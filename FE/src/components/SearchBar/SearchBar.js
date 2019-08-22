import React from 'react';
import CategoryInput from '../CategoryInput';

import './SearchBar.css';

const SearchBar = ({ searchForShows, setSearchValues, searchValues }) => {
    const changeFormValue = (name, value) => {
        setSearchValues({
            ...searchValues,
            [name]: value
        });
    }

    const handleChange = ({ target: input }) => {
        changeFormValue(input.getAttribute('name'), input.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        searchForShows(true);
    }

    return (
        <form className='search-bar' onSubmit={submitForm}>
            <div className='search-bar__inputs search-bar__inputs--upper d-flex justify-content-between'>
                <div className='form-group'>
                    <label className='text-white' htmlFor='title'>Title</label>
                    <input type='text' className='form-control' id='title' name='title' onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label className='text-white' htmlFor='rating-min'>Rating from</label>
                    <input type='text' className='form-control' id='rating-min' name='minRating' onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label className='text-white' htmlFor='rating-max'>Rating to</label>
                    <input type='text' className='form-control' id='rating-max' name='maxRating' onChange={handleChange} />
                </div>
            </div>
            <div className='search-bar__inputs search-bar__inputs--lower d-flex justify-content-between'>
                <div className='form-group'>
                    <label className='text-white' htmlFor='release-year'>Release year</label>
                    <input type='text' className='form-control' id='release-year' name='releaseYear' onChange={handleChange} />
                </div>
                <CategoryInput onChange={changeFormValue} selectedCategories={searchValues.categories} />
            </div>
            <button type='submit' className='btn btn-light'>Apply filters</button>
        </form>
    );
}

export default SearchBar;