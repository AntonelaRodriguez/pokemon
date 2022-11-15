import './navBar.css';
import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from '../searchBar/SearchBar';
import { getAllPokemons } from "../../redux/actions/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.allPokemons);

    useEffect(() => {
        dispatch(getAllPokemons());
    },[dispatch]);

    const handleClick = (e) => {
        dispatch(getAllPokemons());
    };

    return(
        <div>
            <ul>
                <li><Link to='/create'><button>Create Pokemon</button></Link></li>
                <li><button onClick={(e) => handleClick(e)}>Find them All!</button></li>
                <li><Link to='/'><button>Landing Page</button></Link></li>
            </ul>
            
            <img src='../../assets/png-clipart-pokemon-logo-pokemon-logo.png' />

            <SearchBar/>
        </div>
    );
};

export default NavBar;