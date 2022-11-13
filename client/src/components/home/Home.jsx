import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../../redux/actions";
import Filter from "../filters/Filters";
import NavBar from "../navBar/NavBar";
import Pagination from "../pagination/Pagination";
import PokemonCard from "../pokemonCard/PokemonCard";

export default function Home() {

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.allPokemons);

    useEffect(() => {
        dispatch(getAllPokemons());
    },[dispatch]);
    
    //--------- PAGINATION ------------------//
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const lastPokemon = currentPage * pokemonsPerPage;
    const firstPokemon = lastPokemon - pokemonsPerPage;
    const currentsPokemons = pokemons.slice(firstPokemon, lastPokemon);

    const pagination = (page) => {
        setCurrentPage(page);
    };

    return(
        <div>
            <NavBar/>
            <Filter/>
            <h1>Pokemons</h1>
            {
                currentsPokemons && currentsPokemons.map((el) => {
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
            <Pagination
                pokemonsPerPage={pokemonsPerPage}
                pokemons={pokemons.length}
                pagination={pagination}
            />
        </div>
    )
}