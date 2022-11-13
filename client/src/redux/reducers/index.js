const initialState = {
    allPokemons: [],
    pokemonDetail: [],
    pokemon: [],
    allTypes:[]
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_POKEMONS':
          return {
            ...state,
            allPokemons: action.payload
          }
        case 'GET_POKEMON_BY_NAME':
            return{
            ...state,
            pokemon: action.payload
            }
        case 'GET_POKEMON_DETAIL':
          return {
            ...state,
            pokemonDetail: action.payload
          }
        case 'GET_TYPES':
          return {
            ...state,
            allTypes: action.payload
          }
        case 'POST_POKEMON':
          return {
            ...state
          }
        default:
            return state
    }
};

export default rootReducer;