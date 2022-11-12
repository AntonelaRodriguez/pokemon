import './pokemonDetail.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonDetail } from "../../redux/actions/index";
import DetailCard from '../detailCard/DetailCard';

export default function PokemonDetail(props) {

    const dispatch = useDispatch();
    const pokemonId = props.match.params.id;
    

    useEffect(() =>{
        dispatch(getPokemonDetail(pokemonId))
    }, [dispatch, pokemonId]);

    const pokemon = useSelector((state) => state.pokemonDetail);
    console.log(pokemon)

    return(
        <div>
            <h3>Pokemon</h3>
            {
                pokemon && pokemon.map((el) => {
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
                })
            }
        </div>
    )
}