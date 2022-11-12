import axios from 'axios';
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
// export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";


export const getAllPokemons = () => {
    return async function(dispatch){
        return fetch('http://localhost:3001/pokemons')
            .then((respose) => respose.json())
            .then(allPokemons => dispatch({type: GET_ALL_POKEMONS, payload: allPokemons}))
    };
};

// export const getPokemonDetail = (id) => {
//     return async function(dispatch) {
//         return fetch(`http://localhost:3001/pokemons/${id}`)
//             .then((response) => response.json())
//             .then(detail => dispatch({type: GET_POKEMON_DETAIL, payload: detail}))
//     };
// };

export function getPokemonByName(name) {
    return async function(dispatch) {
        try{
            let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch({type:"GET_POKEMON_BY_NAME", payload: json.data})
        } catch(e) {
            console.log(e);
        }
    };
};

export function getPokemonDetail(id) {
    return async function(dispatch) {
        try{
            let json = await axios.get(`http://localhost:3001/pokemons/${id}`);
            return dispatch({type:"GET_POKEMON_DETAIL", payload: json.data})
        } catch(e) {
            console.log(e);
        }
    };
};