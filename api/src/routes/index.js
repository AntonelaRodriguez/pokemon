const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('../routes/pokemons');
const types = require('../routes/types');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req, res) => {
    res.status(200).send('Funciona correctamente.')
})

router.use('/pokemons', pokemons);
router.use('/types', types);


module.exports = router;
