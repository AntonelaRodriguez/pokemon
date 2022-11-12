import { GET_ALL_POKEMONS, GET_POKEMON_DETAIL } from '../actions/index';

const initialState = {
    allPokemons: [],
    pokemonDetail: [],
    pokemon: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_POKEMONS:
          return {
            ...state,
            allPokemons: action.payload
          }
        case 'GET_POKEMON_DETAIL':
          return {
            ...state,
            pokemonDetail: action.payload
          }
        case 'GET_POKEMON_BY_NAME':
          return{
          ...state,
          pokemon: action.payload
          }
        default:
            return state
    }
};

export default rootReducer;