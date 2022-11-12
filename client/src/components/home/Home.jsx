import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../../redux/actions";
import PokemonCard from "../pokemonCard/PokemonCard";

export default function Home() {

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.allPokemons);

    useEffect(() => {
        dispatch(getAllPokemons());
    },[dispatch]);
    console.log(pokemons)
    return(
        <div>
            <h1>Pokemons</h1>
            {
                pokemons && pokemons.map((el) => {
                    return <Link to={`/home/${el.id}`}>
                    <PokemonCard
                        key={el.id}
                        id={el.id}
                        image={el.img}
                        name={el.name}
                        type={el.type.join(' ')}
                    />
                    <hr></hr>
                    </Link>
                })
            }
        </div>
    )
}