const initialState = {
    allPokemons: [],
    pokemons: [],
    pokemonDetail: {},
    allTypes:[],
    error: null,
    filterT: [],
    filterO: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_POKEMONS':
          return {
            ...state,
            allPokemons: action.payload,
            pokemons: action.payload,
            filterT: action.payload,
            filterO: action.payload
          };
        case 'GET_POKEMON_BY_NAME':
            return{
            ...state,
            allPokemons: action.payload
            };
        case 'GET_POKEMON_DETAIL':
          return {
            ...state,
            pokemonDetail: action.payload
          };
        case 'GET_TYPES':
          return {
            ...state,
            allTypes: action.payload
          };
        case 'POST_POKEMON':
          return {
            ...state
          };
        case 'FILTER_BY_TYPE':
          const abAllPokemons = state.pokemons;
          const filterType = action.payload === 'all' ? state.pokemons
          : abAllPokemons.filter((el) => 
            el.type.map((t)=> t).includes(action.payload)
          );
          const mixed1 = state.filterO.length > 0
          ? filterType.filter((poks) => state.filterO.includes(poks))
          : filterType;
          return{
            ...state,
            filterT: filterType,
            allPokemons: mixed1,
          };
        case 'FILTER_BY_CREATED_MODE':
          const abAllPokemons1 = state.pokemons;
          const filterExistance = action.payload === "created" 
          ? abAllPokemons1.filter(el => el.createdInDb === true)
          : abAllPokemons1.filter(el => el.createdInDb === false);
          const mixed2 = state.filterT.length > 0
          ? filterExistance.filter((pokes) => state.filterT.includes(pokes))
          : filterExistance;
          return {
            ...state,
            filterO: filterExistance,
            allPokemons: mixed2
          };
        case 'ORDER_BY_ALPHABET':
          const abAllPokemons2 = state.allPokemons;
          const orderAlphabet = action.payload === "asc"
          ? abAllPokemons2.sort(function(a,b) {
            if(a.name > b.name) {
              return 1;
            }
            if(a.name < b.name){
              return -1;
            } else {
              return 0;
            };
          })
          : abAllPokemons2.sort(function(a,b) {
            if(a.name > b.name) {
              return -1;
            }
            if(a.name < b.name){
              return 1;
            } else {
              return 0;
            }
          });
          return {
            ...state,
            allPokemons: orderAlphabet,
          };
        case 'ORDER_BY_ATTACK':
          const abAllPokemons3 = state.allPokemons;
          const attackOrder = action.payload === "weak"
          ? abAllPokemons3.sort(function(a, b){
            if(a.attack > b.attack){
              return 1;
            }
            if(a.attack < b.attack){
              return -1
            } else {
              return 0;
            }
          })
          : abAllPokemons3.sort(function(a,b){
            if(a.attack < b.attack){
              return 1;
            }
            if(a.attack > b.attack){
              return -1
            } else {
              return 0;
            }
          });
          return {
            ...state,
            allPokemons: attackOrder,
          };
        case 'CLEAN_DETAIL':
          return{
            ...state,
            pokemonDetail: {},
          };
        case 'CLEAN_HOME':
          return{
            ...state,
            allPokemons: [],
          };
          case 'ERROR_404':
            return{
              ...state,
              error: action.payload
            }
          case 'UPDATE_POKEMON':
            return{
              ...state
            }
          case 'DELETE_POKEMON':
            return{
              ...state
            }
        default:
            return state;
    };
};

export default rootReducer;