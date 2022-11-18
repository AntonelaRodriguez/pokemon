const { Router } = require('express');
const { Type } = require('../db');
const axios = require('axios');

const router = Router();

router.get('/', async (req, res) => {
try{
    const apiTypes = await axios.get('https://pokeapi.co/api/v2/type')
        .then(response => response.data);

    let base = apiTypes.results;
    
    for(let i=0; i < base.length; i++){
        const exists = await Type.findOne({where: { name: base[i].name }});

        if(exists) return res.status(200).json(await Type.findAll());
        await Type.create({name: base[i].name});
    }
    res.status(200).json(await Type.findAll());
} catch(e){
    res.status(404).send(e.message);
};
});

module.exports = router;