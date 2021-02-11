import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {
    
    const [inputValue , setInputValue] = useState('');
    
    const handleInputChange  = (e) =>{
        setInputValue(e.target.value)
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if ( inputValue.trim().length > 2 ){
            setCategorias(cate => [inputValue,...cate]);
            setInputValue('');
        }

    }
    return (
        <form onSubmit={ handleSubmit }>
            <h2>AddCategory</h2>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            >
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
