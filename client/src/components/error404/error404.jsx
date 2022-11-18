import React from "react";
import './error404.css'
import pikachu from '../../assets/pikachu.gif'

const Error404 = () => {
    return(
        <div className="error-404">
            <img src={pikachu} alt="" />
            <h2>No matches found. Try again or go find all pokemons!</h2>
        </div>
    )
}

export default Error404;