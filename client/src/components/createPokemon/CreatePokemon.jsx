import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getTypes } from "../../redux/actions/index";
import { Link } from "react-router-dom"

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
        types: [],
    });

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
    };

    const handleSelect = (event) => {
        setInput({
            ...input,
            types: [...input.types, event.target.value]
        })
    };

    const handleDelete = (type) => {
        setInput({
            ...input,
            types: input.types.filter((t) => t !== type)
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postPokemon(input));
        alert("Pokemon successfully created! Find your created Pokemon on your Pokedex!");
        setInput({
            name: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: [],
        })
    }

    return(
        <div>
            <h2>Let's create your own Pokemon</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name:</label>
                <input
                    type="name"
                    value={input.name}
                    name="name"
                    placeholder="Type your pokemon name..."
                    onChange={(e) => handleChange(e)}
                />

                <label>Hp:</label>
                <input
                    type="number"
                    value={input.hp}
                    name="hp"
                    placeholder="1-100"
                    onChange={(e) => handleChange(e)}
                />

                <label>Attack:</label>
                <input
                    type="number"
                    value={input.attack}
                    name="attack"
                    placeholder="1-100"
                    onChange={(e) => handleChange(e)}
                />

                <label>Defense:</label>
                <input
                    type="number"
                    value={input.defense}
                    name="defense"
                    placeholder="1-100"
                    onChange={(e) => handleChange(e)}
                />

                <label>Speed:</label>
                <input
                    type="number"
                    value={input.speed}
                    name="speed"
                    placeholder="1-100"
                    onChange={(e) => handleChange(e)}
                />

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
                    // defaultValue="titlle"
                >
                    <option value="title" name="types">
                        Select your type of Pokemon...
                    </option>
                    {
                        pokemonTypes && pokemonTypes.map((el) => {
                            return <option value={el.name} key={el.id}>
                                {el.name}
                            </option>
                        })
                    }
                </select>
                {input.types && input.types.map((t, index) =>{
                    return(
                    <div key={index}>
                        <span>{t}</span>
                        <span onClick={() => handleDelete(t)}>X</span>
                    </div>
                    )
                })}

                <button type="submit">Create Pokemon !</button>
            </form>
            <Link to='/home'><button>Got to your Pokedex!</button></Link>
        </div>
    )
}

export default CreatePokemon;