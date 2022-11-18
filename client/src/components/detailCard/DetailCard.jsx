import React from 'react';
import './detailCard.css';

const DetailCard =({image, name, type, id, hp, attack, defense, speed, height, weight}) => {
    return(
        <div className='card-detail'>
            <img src={image} alt='Not found' />
            <h3>{name.toUpperCase()}</h3>
            <h5>Type: {type}.</h5>
            <h4>ID: {id}.</h4>
            <h4>Statistics: </h4>
            <ul>
                <li>Attack: {attack}.</li>
                <li>Defense: {defense}.</li>
                <li>Speed: {speed}.</li>
            </ul>
            <h4>Height: {height}.</h4>
            <h4>Weight: {weight}.</h4>
        </div>
    );
};

export default DetailCard;