import React, { useState, useEffect } from 'react';
import { getCategories } from '../../api';

import './CategoryInput.css';

const CategoryInput = () => {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [inputCategory, setInputCategory] = useState('');

    const handleInputChange = ({ target: { value }}) => (
        setInputCategory(value.toLowerCase())
    )

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
        ));
        setFilteredCategories(filteredCategories);
    }, [inputCategory]);

    return (
        <div className='form-group category-input'>
            <label className='text-white' htmlFor='category'>Categories</label>
            <input type='text' className='form-control' id='category' name='category' onChange={handleInputChange} />
            <div className='list-group category-hint'>
                {filteredCategories.map((category) => (
                    <span className='list-group-item list-group-item-action'>{category}</span>
                ))}
            </div>
        </div>
    );
}

export default CategoryInput;
