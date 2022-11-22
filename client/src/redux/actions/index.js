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
            return dispatch({
                type: 'ERROR_404',
                payload: {error: e.message}
            });
        }
    };
};

export const getPokemonDetail = (id) => {
    return async function(dispatch) {
        try{
            let json = await axios.get(`http://localhost:3001/pokemons/${id}`);
            return dispatch({type:"GET_POKEMON_DETAIL", payload: json.data})
        } catch(e) {
            return dispatch({
                type: 'ERROR_404',
                payload: {error: e.message}
            });
        };
    };
};

export const getTypes = () => {
    return async function(dispatch) {
        try{
            let types = await axios.get('http://localhost:3001/types')
            return dispatch({type:'GET_TYPES', payload: types.data})
        } catch(e) {
            console.log(e);
        };
    };
};

export const postPokemon = (newPokemon) => {
    return async function(dispatch) {
        try{
            let pokemon = await axios.post('http://localhost:3001/pokemons', newPokemon)
            return pokemon;
        } catch(e) {
            console.log(e);
        };
    };
};

export const filterByType = (payload) => {
    return {
        type: 'FILTER_BY_TYPE',
        payload
    };
};

export const filterByCreatedMode = (payload) => {
    return {
        type: 'FILTER_BY_CREATED_MODE',
        payload
    };
};

export const orderbyAlphabet = (payload) => {
    return {
        type: 'ORDER_BY_ALPHABET',
        payload
    };
};

export const orderByAttack = (payload) => {
    return {
        type: 'ORDER_BY_ATTACK',
        payload
    };
};

export const cleanDetail = () => {
    return{
        type: 'CLEAN_DETAIL',
    };
};

export const cleanHome = () => {
    return{
        type: 'CLEAN_HOME',
    };
};

export const updatePokemon = (id, updatedPokemon) => {
    return async function(dispatch){
        try{
            let pokemon = await axios.put(`http://localhost:3001/pokemons/update/${id}`,updatedPokemon);
            return pokemon;
        } catch(e) {
            console.log(e);
        };
    };
};

export const deletePokemon = (id) => {
    return async function(dispatch){
        try{
            let pokemon = await axios.delete(`http://localhost:3001/pokemons/delete/${id}`);
            return pokemon;
        } catch(e) {
            console.log(e);
        };
    };
};