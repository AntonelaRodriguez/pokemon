import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";

export default function Home() {

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.allPokemons);

    useEffect(() => {
        dispatch(getAllPokemons());
    },[]);

    return(
        <div>

        </div>
    )
}