export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

export const getAllPokemons = () => {
    return async function(dispatch){
        return fetch('http://localhost:3001/pokemons')
            .then((respose) => respose.json())
            .then(allPokemons => dispatch({type: GET_ALL_POKEMONS, payload: allPokemons}))
    };
};



// export function getPokemons() {
//     return async function(dispatch){
//         let pokemons = await fetch('http://localhost:3001/pokemons/')
//             .then((response) => response.json())
//             .then((data) => dispatch()) 
//     }
// }