import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from  '../../redux/actions/index'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setPokemonName(e.target.value)
        console.log(pokemonName)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getPokemonByName(pokemonName))
    }

    return(
        <div>
            <input 
                type="text"
                placeholder='Search...'
                onChange={(e) => handleChange(e)}
            />
            <button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
};