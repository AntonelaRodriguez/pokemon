import './navBar.css';
import pokeball from '../../assets/pokeball1.png';
import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from '../searchBar/SearchBar';
import { getAllPokemons } from "../../redux/actions/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const NavBar = ({pageToOne}) => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.allPokemons);

    useEffect(() => {
        dispatch(getAllPokemons());
    },[dispatch]);

    const handleClick = (e) => {
        dispatch(getAllPokemons());
    };

    return(
        <div className='nav'>
            <div className='boton'>
                <Link to='/create'><button className='btn'>Create Pokemon</button></Link>
                <button className='btn' onClick={(e) => handleClick(e)}>Find them All!</button>
                <Link to='/'><button className='btn'>Landing Page</button></Link>
            </div>
            
            <div className='logo'>
                <img src={pokeball} className='pokeball'/>
            </div>
            
            <div className='searchBar'>
                <SearchBar pageToOne={pageToOne}/>
            </div>
            
        </div>
    );
};

export default NavBar;