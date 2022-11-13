import axios from 'axios';

export const getAllPokemons = () => {
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/pokemons')
            return dispatch({type: "GET_ALL_POKEMONS", payload: json.data})
    };
};


export const getPokemonByName = (name) => {
    return async function(dispatch) {
        try{
            let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch({type:"GET_POKEMON_BY_NAME", payload: json.data})
        } catch(e) {
            console.log(e);
        }
    };
};

export const getPokemonDetail = (id) => {
    return async function(dispatch) {
        try{
            let json = await axios.get(`http://localhost:3001/pokemons/${id}`);
            return dispatch({type:"GET_POKEMON_DETAIL", payload: json.data})
        } catch(e) {
            console.log(e);
        }
    };
};

export const getTypes = () => {
    return async function(dispatch) {
        try{
            let types = await axios.get('http://localhost:3001/types')
            return dispatch({type:'GET_TYPES', payload: types.data})
        } catch(e) {
            console.log(e);
        }
    }
}

export const postPokemon = (newPokemon) => {
    return async function(dispatch) {
        try{
            let pokemon = await axios.post('http://localhost:3001/pokemons', newPokemon)
            return pokemon;
        } catch(e) {
            console.log(e);
        }
    }
}