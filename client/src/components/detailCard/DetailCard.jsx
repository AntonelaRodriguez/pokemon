import React from 'react';

const DetailCard =({image, name, type, id, hp, attack, defense, speed, height, weight}) => {
    return(
        <div className='Card'>
            <img src={image} alt='Image not found' />
            <h3>{name}</h3>
            <h5>{type}</h5>
            <h4>ID: {id}</h4>
            <h4>Statistics: </h4>
            <h5>HP: {hp}</h5>
            <h5>Attack: {attack}</h5>
            <h5>Defense: {defense}</h5>
            <h5>Speed: {speed}</h5>
            <h4>Height: {height}</h4>
            <h4>Weight: {weight}</h4>
            
        </div>
    );
};

export default DetailCard;