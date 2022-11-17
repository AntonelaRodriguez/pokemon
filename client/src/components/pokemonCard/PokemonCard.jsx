import './pokemonCard.css';
import React from 'react';

const PokemonCard = ({image, name, type}) => {
    return(
        <div className='card'>
                <img className='card-img' src={image} alt='Image not found' />
                <h3 className='card-name'>{name.toUpperCase()}</h3>
                <h5 className='card-type'> Type: {type}.</h5>
        </div>
    );
};

export default PokemonCard;