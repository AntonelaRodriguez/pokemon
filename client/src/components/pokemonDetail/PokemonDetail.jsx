import './pokemonDetail.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail, getPokemonDetail } from "../../redux/actions/index";
import DetailCard from '../detailCard/DetailCard';
import LoadingPage from '../loadingPage/LoadingPage';
import Error404 from '../error404/error404';


const PokemonDetail = (props) => {

    const dispatch = useDispatch();
    const pokemonId = props.match.params.id;
    

    useEffect(() =>{
        dispatch(getPokemonDetail(pokemonId))
        return function(){
            dispatch(cleanDetail())
        }
    }, [dispatch, pokemonId]);

    const pokemon = useSelector((state) => state.pokemonDetail);
    const error = useSelector((state) => state.error);
    console.log(pokemon);

    return(
        <div>
            <h3>Pokemon</h3>
            { error ? (
                <Error404/>
            ) :
                pokemon.length > 0 ? pokemon.map((el) => {
                    return <DetailCard
                        key={el.id}
                        id={el.id}
                        image={el.img}
                        name={el.name}
                        type={el.type.join(' ')}
                        hp={el.hp}
                        attack={el.attack}
                        defense={el.defense}
                        speed={el.speed}
                        height={el.height}
                        weight={el.weight}
                    />
                }) : <LoadingPage/>
            }
        </div>
    );
};

export default PokemonDetail;