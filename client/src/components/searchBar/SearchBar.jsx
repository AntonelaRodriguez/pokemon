import React from 'react';
import './searchBar.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from  '../../redux/actions/index';

const SearchBar = ({pageToOne}) => {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setPokemonName(e.target.value);
        console.log(pokemonName);
    };

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getPokemonByName(pokemonName));
        pageToOne();
    };

    return(
        <div className='search'>
            <input 
                className='searchInput'
                type="text"
                placeholder='Search...'
                onChange={(e) => handleChange(e)}
            />
            <button type='submit' onClick={(e) => handleSubmit(e)} className='btnSearch'>🔍</button>
        </div>
    );
};

export default SearchBar;