import './navBar.css';
import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from '../searchBar/SearchBar';

const NavBar = () => {

    return(
        <div>
            <Link to='/create'><button>Create Pokemon</button></Link>
            <Link to='/home'><button>Find them All!</button></Link>
            <Link to='/'><button>Landing Page</button></Link>

            <img src='../../assets/png-clipart-pokemon-logo-pokemon-logo.png' />

            <SearchBar/>
        </div>
    )
};

export default NavBar;