const axios = require('axios')
const { Pokemon, Type } = require('../db');

const allInfo = async () => {
    const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then(response => response.data);
    
    let base = apiUrl.results;

    let pokemonInfoApi = [];
    for(let i=0; i < base.length; i++){
        if (!base[i]) return pokemonInfoApi;
        if (base[i].url) {
            const pokemon = await axios.get(base[i].url)
                .then(response => response.data);

                pokemonInfoApi.push({
                    id: pokemon.id,
                    img: pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default,
                    name: pokemon.name,
                    type: pokemon.types.map((t) => t.type.name)
                    
      });
    }
    }

    const db = await Pokemon.findAll({ include: {model: Type}});
    let pokemonInfoDb = [];
    for(let i=0; i < db.length; i++){
        if (db.length === 0) {
            return pokemonInfoDb;
        } else {
            pokemonInfoDb.push({
                id: db[i].id,
                img: "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif",
                name: db[i].name,
                type: db[i].Types.map(el=>el.name)
                
            })
        }
    }

    const all = [...pokemonInfoApi, ...pokemonInfoDb];
    return all;
}

const allInfoDetails = async () => {
    const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then(response => response.data);
    
    let base = apiUrl.results;

    let pokemonInfoApi = [];
    for(let i=0; i < base.length; i++){
        if (!base[i]) return pokemonInfoApi;
        if (base[i].url) {
            const pokemon = await axios.get(base[i].url)
                .then(response => response.data);

                pokemonInfoApi.push({
                    id: pokemon.id,
                    img: pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default,
                    name: pokemon.name,
                    type: pokemon.types.map((t) => t.type.name),
                    hp: pokemon.hp,
                    attack: pokemon.attack,
                    defense: pokemon.defense,
                    speed: pokemon.speed,
                    height: pokemon.height,
                    weight: pokemon.weight,
      });
    }
    }

    const db = await Pokemon.findAll({ include: {model: Type}});
    let pokemonInfoDb = [];
    for(let i=0; i < db.length; i++){
        if (db.length === 0) {
            return pokemonInfoDb;
        } else {
            pokemonInfoDb.push({
                id: db[i].id,
                img: "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif",
                name: db[i].name,
                type: db[i].Types.map(el=>el.name),
                hp: db[i].hp,
                attack: db[i].attack,
                defense: db[i].defense,
                speed: db[i].speed,
                height: db[i].height,
                weight: db[i].weight,
            })
        }
    }

    const all = [...pokemonInfoApi, ...pokemonInfoDb];
    return all;
}

module.exports = { allInfo, allInfoDetails};