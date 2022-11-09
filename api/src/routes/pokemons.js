const { Router } = require('express');
const { allInfo, allInfoDetails } = require('../middlewares/middleware')
const { Pokemon, Type } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
    if(name){
        try{
            let pokemonName = name.toLowerCase()
            const allPokemons = await allInfo();
            let pokemon = allPokemons.filter(el => {
                return el.name === pokemonName;
            });
            res.status(200).json(pokemon);
        } catch(e) {
            res.status(404).json(e.message);
        }
    } else{
        try{
            const info = await allInfo();
            res.status(200).send(info)
        } catch(e) {
            res.status(404).json(e.message);
        }
    }
})

router.post("/", async (req,res) => {
    try {
        const { name, hp, attack, defense, speed, height, weight, createdInDb, types } = req.body;
        if(
            isNaN(hp) || isNaN(attack) || isNaN(defense) || isNaN(speed) || isNaN(height) || isNaN(weight)
        ) return res.status(404).send("One of the arguments is not a number");
        if(!name) return res.status(404).send("Name is required");
        const newPokemon = await Pokemon.create({
            name: name.toLowerCase(),
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            createdInDb
        });
        let typeOfPokemon = await Type.findAll({ where: { name: types } });
        newPokemon.addType(typeOfPokemon);
        res.status(200).json(newPokemon);
    } catch(e) {
        res.status(404).send(e.message)
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        let detail = await allInfoDetails();
        let pokemon = detail.filter((el) => {
            return el.id.toString() === id;
        });
        if(pokemon.length < 1) throw new Error("No hay detalles de este pokemon");
        res.status(200).json(pokemon);
    } catch(e) {
        res.status(404).send(e.message)
    }
})

module.exports = router;