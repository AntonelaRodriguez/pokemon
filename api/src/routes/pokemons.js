const { Router } = require('express');
const { allInfo, allInfoDetails, pokemonByName } = require('../middlewares/middleware');
const { Pokemon, Type } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
    if(name){
        try{
            const pokemonName = name.toLowerCase();
            const pokemon = await pokemonByName(pokemonName);

            if(pokemon.length < 1) throw new Error("That pokemon doesn't exists in the pokedex");

            res.status(200).json(pokemon);
        } catch(e) {
            res.status(404).json(e.message);
        }
    } else{
        try{
            const info = await allInfo();
            res.status(200).send(info);
        } catch(e) {
            res.status(404).json(e.message);
        }
    };
});

router.post("/", async (req,res) => {
    try {
        const { name, hp, attack, defense, speed, height, weight, img, createdInDb, type } = req.body;

        if(
            isNaN(hp) || isNaN(attack) || isNaN(defense) || isNaN(speed) || isNaN(height) || isNaN(weight)
        ) throw new Error("One of the arguments is not a number");

        if(!name) throw new Error("Name is required");

        let newName = name.toLowerCase();
        const exists = await Pokemon.findOne({ where: { name: newName } });
        if (exists) throw new Error("That pokemon already exists in the pokedex");

        const newPokemon = await Pokemon.create({
            name: newName,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            img,
            createdInDb
        });

        let typeOfPokemon = await Type.findAll({ where: { name: type } });
        newPokemon.addType(typeOfPokemon);

        res.status(200).json(newPokemon);
    } catch(e) {
        res.status(404).send(e.message);
    };
});

router.get('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        let detail = await allInfoDetails(id);
        if(detail.length < 1) throw new Error("That pokemon doesn't exists in the pokedex");

        res.status(200).json(detail);
    } catch(e) {
        res.status(404).send(e.message);
    }
});

module.exports = router;