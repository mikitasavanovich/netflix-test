import React, { useState, useEffect } from 'react';
import { getCategories } from '../../api';

import './CategoryInput.css';

const CategoryInput = ({ selectedCategories = [], onChange }) => {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [inputCategory, setInputCategory] = useState('');

    const handleInputChange = ({ target: { value } }) => (
        setInputCategory(value.toLowerCase())
    )

    const selectCategory = ({ target: { innerText: category } }) => {
        const newCategories = [...selectedCategories, category];
        onChange('categories', newCategories);
        setInputCategory('');
    }

    const removeCategory = ({ target }) => {
        const removedCategory = target.dataset.category;
        const newCategories = selectedCategories.filter((category) => category !== removedCategory);
        onChange('categories', newCategories);
    }

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getCategories();
            setCategories(categories);
        }

        fetchCategories();
    }, []);

    useEffect(() => {
        if (!inputCategory) {
            setFilteredCategories([]);
            return;
        }

        const filteredCategories = categories.filter((category) => (
            category.toLowerCase().includes(inputCategory)
                && !selectedCategories.includes(category)
        ));
        setFilteredCategories(filteredCategories);
    }, [inputCategory]);

    return (
        <>
            <div className='category-input'>
                {selectedCategories.map((category) => (
                    <span
                        key={`selected-category-${category}`}
                        className='badge badge-light'
                    >
                        {category}
                        <span 
                            className='badge-close' 
                            data-category={category}
                            onClick={removeCategory}
                        >
                            x
                        </span>
                    </span>
                ))}
                <div className='form-group'>
                    <label className='text-white' htmlFor='category'>Categories</label>
                    <input
                        type='text'
                        className='form-control'
                        id='category'
                        name='category'
                        value={inputCategory}
                        onChange={handleInputChange}
                    />
                    <div className='list-group category-hint'>
                        {filteredCategories.map((category) => (
                            <span
                                key={`category-hint-${category}`}
                                className='list-group-item list-group-item-action'
                                onClick={selectCategory}
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryInput;
