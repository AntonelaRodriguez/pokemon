import './pokemonCard.css';
import React from 'react';

export default function PokemonCard({image, name, type}) {
    return(
        <div className='Card'>
            <img src={image} alt='Image not found' />
            <h3>{name}</h3>
            <h5>{type}</h5>
        </div>
    )
}