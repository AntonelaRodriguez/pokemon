import './navBar.css';
import React from 'react';
import { Link } from "react-router-dom"
import SearchBar from '../searchBar/SearchBar';

export default function NavBar() {

    return(
        <div>
            <button>Create Pokemon</button>
            <Link to='/home'><button>Find them All!</button></Link>
            <button>Landing Page</button>

            <img src='../../assets/png-clipart-pokemon-logo-pokemon-logo.png' />

            <SearchBar/>
        </div>
    )
};