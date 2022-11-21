import React,{ useEffect, useState} from 'react';
import { updatePokemon, getPokemonDetail, getTypes } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingPage from "../loadingPage/LoadingPage";

export const validate = (input) => {
    let error = {};

    if(input.hp > 100) error.hp = "Your pokemon can't have more than 100 hp.";
    if(input.hp < 0) error.hp = "Your pokemon can't have less than 1 hp.";

    if(input.attack > 100) error.attack = "Your pokemon can't have more than 100 of attack power.";
    if(input.attack < 0) error.attack = "Your pokemon can't have less than 1 of attack power.";

    if(input.defense > 100) error.defense = "Your pokemon can't have more than 100 of defense.";
    if(input.defense < 0) error.defense = "Your pokemon can't have less than 1 of defense.";

    if(input.speed > 100) error.speed = "Your pokemon can't have more than 100 of speed.";
    if(input.speed < 0) error.speed = "Your pokemon can't have less than 1 of speed.";

    return error;
}

const UpdatePokemon = (props) => {
    const dispatch = useDispatch();
    const pokemonTypes = useSelector((state) => state.allTypes);
    const pokemon = useSelector((state) => state.pokemonDetail);
    const pokemonId = props.match.params.id;
   
    const [input, setInput] = useState({
        name: pokemon.name,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        type: pokemon.type,
        img: pokemon.img,
    });

    const [error, setError] = useState({});

    useEffect(() => {
        dispatch(getPokemonDetail(pokemonId))
        dispatch(getTypes())
    }, [dispatch, pokemonId]);

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name] : event.target.value
        });
        setError(validate({
            ...input,
            [event.target.name] : event.target.value
        }));
    };

    const handleSelect = (event) => {
        setInput({
            ...input,
            type: [...input.type, event.target.value]
        });
    };

    const handleDelete = (type) => {
        setInput({
            ...input,
            type: input.type.filter((t) => t !== type)
        });
    };

    const updated = {
        name: input.name === "" ? pokemon.name : input.name,
        hp: input.hp === "" ? pokemon.hp : input.hp,
        attack: input.attack === "" ? pokemon.attack : input.attack,
        defense: input.defense === "" ? pokemon.defense : input.defense,
        speed: input.speed === "" ? pokemon.speed : input.speed,
        height: input.height === "" ? pokemon.height : input.height,
        weight: input.weight === "" ? pokemon.weight : input.weight,
        type: input.type === [] ? pokemon.type : input.type,
        img: input.img === "" ? pokemon.img : input.img,
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updatePokemon(pokemonId, updated));
        alert("Pokemon successfully updated! Find your updated Pokemon on your Pokedex!");
        setInput({
            name:"",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            type: [],
            img: "",
        });
    };

    return(
        <div className="create">
            <div className='create-info'>
            {Object.keys(pokemon).length !== 0 ?
            <>
            <h2>Let's update your own Pokemon!</h2>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name:</label>
                <input
                    type="name"
                    value={input.name}
                    name="name"
                    placeholder="Type your pokemon name..."
                    onChange={(e) => handleChange(e)}
                />
                {
                    error.name && (
                        <p className="danger">{error.name}</p>
                    )
                }

                <label>Hp:</label>
                <input
                    type="number"
                    value={input.hp}
                    name="hp"
                    placeholder="1-100"
                    onChange={(e) => handleChange(e)}
                />
                {
                    error.hp && (
                        <p className="danger">{error.hp}</p>
                    )
                }

                <label>Attack:</label>
                <input
                    type="number"
                    value={input.attack}
                    name="attack"
                    placeholder="1-100"
                    onChange={(e) => handleChange(e)}
                />
                {
                    error.attack && (
                        <p className="danger">{error.attack}</p>
                    )
                }

                <label>Defense:</label>
                <input
                    type="number"
                    value={input.defense}
                    name="defense"
                    placeholder="1-100"
                    onChange={(e) => handleChange(e)}
                />
                {
                    error.defense && (
                        <p className="danger">{error.defense}</p>
                    )
                }

                <label>Speed:</label>
                <input
                    type="number"
                    value={input.speed}
                    name="speed"
                    placeholder="1-100"
                    onChange={(e) => handleChange(e)}
                />
                {
                    error.speed && (
                        <p className="danger">{error.speed}</p>
                    )
                }

                <label>Height:</label>
                <input
                    type="number"
                    value={input.height}
                    name="height"
                    placeholder="Type the height of your pokemon..."
                    onChange={(e) => handleChange(e)}
                />

                <label>Weight:</label>
                <input
                    type="number"
                    value={input.weight}
                    name="weight"
                    placeholder="Type the weight of your pokemon..."
                    onChange={(e) => handleChange(e)}
                />

                <label>Types:</label>
                <select 
                    onChange={(e) => handleSelect(e)}
                    defaultValue="title"
                >
                    <option value="title" name="type" disabled>
                        Select your type of Pokemon...
                    </option>
                    {
                        pokemonTypes && pokemonTypes.map((el) => {
                            return (<option value={el.name} key={el.id}>
                                {el.name}
                            </option>
                            )
                        })
                    }
                </select>
                {input.type && input.type.map((t, index) =>{
                    return(
                    <div key={index}>
                        <span>{t}</span>
                        <span className='delete' onClick={() => handleDelete(t)}>x</span>
                    </div>
                    )
                })}
                <label>Pokemon image: </label>
                <input 
                type="url"
                name="img"
                value={input.img}
                placeholder="Url image..."
                onChange={(e) => handleChange(e)}
                 />

                <button className='btn-create' type="submit" disabled={Object.keys(error).length === 0 ? false : true}>Update Pokemon !</button>
            </form>
            <Link to='/home'><button className='btn-home'>Got to your Pokedex!</button></Link>
            </>
            :<LoadingPage/>}
            </div>
        </div>
    )
};

export default UpdatePokemon;