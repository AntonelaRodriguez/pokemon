import './pokemonDetail.css';
import logo from '../../assets/IPokemon.png'
import pokeball from '../../assets/pokeball1.png'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail, deletePokemon, getPokemonDetail } from "../../redux/actions/index";
import LoadingPage from '../loadingPage/LoadingPage';
import Error404 from '../error404/error404';
import { useHistory } from 'react-router-dom';


const PokemonDetail = (props) => {

    const dispatch = useDispatch();
    const pokemonId = props.match.params.id;
    const history = useHistory();
    

    useEffect(() =>{
        dispatch(getPokemonDetail(pokemonId))
        return function(){
            dispatch(cleanDetail())
        }
    }, [dispatch, pokemonId]);

    const pokemon = useSelector((state) => state.pokemonDetail);
    const error = useSelector((state) => state.error);

    console.log(pokemon.type)
    console.log(pokemon)

    const handleUpdate = () => {
        if(pokemon.createdInDb === true){
                history.push(`/update/${pokemonId}`);
        } else {
                alert("You can't update an original pokemon.")
        }
    }
    
    const handleDelete = () => {
        if(pokemon.createdInDb === true){
            dispatch(deletePokemon(pokemonId));
            alert("Your pokemon has been succesfully deleted.")
        } else {
                alert("You can't delete an original pokemon.")
        }
    }

    return(
        <div className='pokemon-detail'>
            <img className='pokemon' src={logo} alt="" />
            { error ? <Error404/> :
            <div className='card-detail'>
                { Object.keys(pokemon).length !== 0 ?
                <>
                <img src={pokemon.img} alt='Not found' />
                <h3>{pokemon.name.toUpperCase()}</h3>
                <h5>Type: {pokemon.type.join(', ')}.</h5>
                <h4>ID: {pokemon.id}.</h4>
                <h4>HP: {pokemon.hp}.</h4>
                <h4>Statistics: </h4>
                <ul>
                    <li>Attack: {pokemon.attack}.</li>
                    <li>Defense: {pokemon.defense}.</li>
                    <li>Speed: {pokemon.speed}.</li>
                </ul>
                <h4>Height: {pokemon.height}.</h4>
                <h4>Weight: {pokemon.weight}.</h4>
                </>
                : <LoadingPage/> }
            </div>
            }
            <button className='btn-create' onClick={() => handleUpdate()}>UPDATE</button>
            <button className='btn-create' onClick={() => handleDelete()}>DELETE</button>
            <img className='pokeballs' src={pokeball} alt="" />
        </div>
    );
};

export default PokemonDetail;