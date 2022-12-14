import'./createPokemon.css';
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getTypes, getPokemonByName } from "../../redux/actions/index";
import { Link } from "react-router-dom";

export const validate = (input) => {
    let error = {};
    if(!input.name) error.name = "Pokemon's name is required!";

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


const CreatePokemon = () => {
    
    const dispatch = useDispatch();
    const pokemonTypes = useSelector((state) => state.allTypes);
   
    const [input, setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        type: [],
        img: "",
    });
    const [error, setError] = useState({});

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);

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

    const created = {
        name: input.name,
        hp: input.hp === "" ? 1 : input.hp,
        attack: input.attack === "" ? 0 : input.attack,
        defense: input.defense === "" ? 0 : input.defense,
        speed: input.speed === "" ? 0 : input.speed,
        height: input.height === "" ? 1 : input.height,
        weight: input.weight === "" ? 1 : input.weight,
        type: input.type,
        img: input.img === "" ? "https://art.pixilart.com/eb39e5e2deb7e3a.gif" : input.img,
    }

    const handleSubmit = (event) => {
        if(dispatch(getPokemonByName(created.name))){
            alert("That Pokemon already exists, please change the name!");
        } else {
        event.preventDefault();
        dispatch(postPokemon(created));
        alert("Pokemon successfully created! Find your created Pokemon on your Pokedex!");
        setInput({
            name: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            type: [],
            img: "",
        });
        }
    };

    return(
        <div className="create">
            <div className='create-info'>
            <h2>Let's create your own Pokemon!</h2>
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
                {
                    error.height && (
                        <p className="danger">{error.height}</p>
                    )
                }

                <label>Weight:</label>
                <input
                    type="number"
                    value={input.weight}
                    name="weight"
                    placeholder="Type the weight of your pokemon..."
                    onChange={(e) => handleChange(e)}
                />
                {
                    error.weight && (
                        <p className="danger">{error.weight}</p>
                    )
                }

                <label>Types:</label>
                <select 
                    disabled={input.type.length > 2}
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
                {
                    error.type && (
                        <p className="danger">{error.type}</p>
                    )
                }

                <label>Pokemon image: </label>
                <input 
                type="url"
                name="img"
                value={input.img}
                placeholder="Url image..."
                onChange={(e) => handleChange(e)}
                 />
                 {
                    error.img && (
                        <p className="danger">{error.img}</p>
                    )
                }

                <button className='btn-create' type="submit" disabled={Object.keys(error).length === 0 ? false : true}>Create Pokemon !</button>
            </form>
            <Link to='/home'><button className='btn-home'>Got to your Pokedex!</button></Link>
            </div>
        </div>
    )
}

export default CreatePokemon;