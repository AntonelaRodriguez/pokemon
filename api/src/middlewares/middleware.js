const axios = require('axios');
const { Pokemon, Type } = require('../db');

const allInfo = async () => {
    const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")
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
                    createdInDb: false,
                    attack: pokemon.stats[1].base_stat,
                    
      });
    };
    };

    const db = await Pokemon.findAll({ include: {model: Type}});
    let pokemonInfoDb = [];
    for(let i=0; i < db.length; i++){
        if (db.length === 0) {
            return pokemonInfoDb;
        } else {
            pokemonInfoDb.push({
                id: db[i].id,
                img: db[i].img,
                name: db[i].name,
                type: db[i].Types.map(el=>el.name),
                createdInDb: db[i].createdInDb,
                attack: db[i].attack
            });
        };
    };

    const all = [...pokemonInfoApi, ...pokemonInfoDb];
    return all;
}

const pokemonByName = async (name) => {
    try{
    const pokemonDb = await Pokemon.findOne({
        where: {
          name: name,
        },
        include: Type,
      });
    if (pokemonDb) {
        const pokemonInfoDb = [
          {
            id: pokemonDb.id,
            img: pokemonDb.img,
            name: pokemonDb.name,
            type: pokemonDb.Types.map((el) => el.name),
          },
        ];
        return pokemonInfoDb;
    }  else {
        const pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.data);
            
        const pokemonInfoApi = [
          {
            id: pokemonApi.id,
            img: pokemonApi.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
            name: pokemonApi.name,
            type: pokemonApi.types.map((t) => t.type.name),
          },
        ];
        return pokemonInfoApi;
    };
    } catch(e){
        return [];
    };
};


const allInfoDetails = async (id) => {
    try{
    if(id.length > 3){
        const newId = id.toString();
        const pokemonDb = await Pokemon.findOne({
            where: {
              id: newId,
            },
            include: Type,
          });
          const pokemonInfoDb = [
            {
              id: pokemonDb.id,
              img: pokemonDb.img,
              name: pokemonDb.name,
              type: pokemonDb.Types.map((el) => el.name),
              hp: pokemonDb.hp,
              attack: pokemonDb.attack,
              defense: pokemonDb.defense,
              speed: pokemonDb.speed,
              height: pokemonDb.height,
              weight: pokemonDb.weight,
            },
          ];
          return pokemonInfoDb;
    } else {
        
        const pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.data);
            
        const pokemonInfoApi = [
          {
            id: pokemonApi.id,
            img: pokemonApi.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
            name: pokemonApi.name,
            type: pokemonApi.types.map((t) => t.type.name),
            hp: pokemonApi.stats[0].base_stat,
            attack: pokemonApi.stats[1].base_stat,
            defense: pokemonApi.stats[2].base_stat,
            speed: pokemonApi.stats[5].base_stat,
            height: pokemonApi.height,
            weight: pokemonApi.weight,
          },
        ];
        return pokemonInfoApi;
    }
    } catch(e){
        return [];
    };
};

module.exports = { allInfo, allInfoDetails, pokemonByName};