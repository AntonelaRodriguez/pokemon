import React from "react";
import './home.css'
import logo from '../../assets/IPokemon.png';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { 
    getAllPokemons, 
    getTypes,
    filterByType,
    filterByCreatedMode,
    orderbyAlphabet,
    orderByAttack,
} from "../../redux/actions/index";
import NavBar from "../navBar/NavBar";
import Pagination from "../pagination/Pagination";
import PokemonCard from "../pokemonCard/PokemonCard";
import LoadingPage from "../loadingPage/LoadingPage";
import Error404 from '../error404/error404';

const Home = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.allPokemons);
    const types = useSelector((state) => state.allTypes);
    const error = useSelector((state) => state.error);

    useEffect(() => {
        dispatch(getAllPokemons());
        dispatch(getTypes());
    },[dispatch]);
    
    //-------------- PAGINATION ------------------//
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const lastPokemon = currentPage * pokemonsPerPage;
    const firstPokemon = lastPokemon - pokemonsPerPage;
    const currentsPokemons = pokemons.slice(firstPokemon, lastPokemon);

    const pagination = (page) => {
        setCurrentPage(page);
    };

    //-------------------FILTERS----------------//
    const handleFilterTypes = (e) => {
        e.preventDefault();
        dispatch(filterByType(e.target.value));
        setCurrentPage(1);
    }

    const handleFilterCreation = (e) => {
        e.preventDefault();
        dispatch(filterByCreatedMode(e.target.value));
        setCurrentPage(1);
    }

    const [order, setOrder] = useState("");

    const orderAlph = (e) => {
        e.preventDefault();
        dispatch(orderbyAlphabet(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`);
    };

    const orderAttack = (e) => {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`);
    };

    const pageToOne = () => {
        setCurrentPage(1);
    };
    console.log(pokemons)

    return(
         
        <div className="home">
            <NavBar pageToOne={pageToOne}/>

            <img className='pokemons' src={logo} alt="" />

            <div className="filters">
            <ul>
                <li>
                    <select 
                    defaultValue="title"
                    onChange={(e) => handleFilterTypes(e)}
                    >
                        <option value="title" disabled>Filter by Types:</option>
                        <option value="all">All</option>
                        {
                            types && types.map((t) => {
                                return (
                                    <option value={t.name} key={t.id}>{t.name}</option>
                                )
                            })
                        }
                    </select>
                </li>
                <li>
                    <select defaultValue="title" onChange={(e) => handleFilterCreation(e)}>
                        <option value="title" disabled>Filter by Existing or Created:</option>
                        <option value="all">All</option>
                        <option value="created">Created</option>
                        <option value="existing">Existing</option>
                    </select>
                </li>
                <li>
                    <select defaultValue="title" onChange={(e) => orderAlph(e)}>
                        <option value="title" disabled>Order by Alphabet:</option>
                        <option value="asc">A to Z</option>
                        <option value="desc">Z to A</option>
                    </select>
                </li>
                <li>
                    <select defaultValue="title" onChange={(e) => orderAttack(e)}>
                        <option value="title" disabled>Filter by Attack Power:</option>
                        <option value="weak">Weak</option>
                        <option value="powerful">Powerful</option>
                    </select>
                </li>
            </ul>
            </div>
            
            { error ? (
            <Error404/>) :
            <div className="grid-container">
            { 
                currentsPokemons.length > 0 ? currentsPokemons.map((el) => {
                    return <div>
                    <Link to={`/home/${el.id}`}>
                    <PokemonCard
                        id={el.id}
                        key={el.id}
                        image={el.img}
                        name={el.name}
                        type={el.type.join(', ')}
                    />
                    </Link>
                    </div>
                }) : <LoadingPage/>
            }
            </div>
            }
            <Pagination
                pokemonsPerPage={pokemonsPerPage}
                pokemons={pokemons.length}
                pagination={pagination}
            />
        </div>
    )
}

export default Home;