const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRoute = require("./videogame.js");
const genreRoute = require("./genres.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogame", videogamesRoute);
router.use("/genres", genreRoute);

module.exports = router;
