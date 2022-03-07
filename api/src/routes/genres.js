require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios").default;
const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Genres } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    // data base
    const genresFromDb = await Genres.findAll();
    if (genresFromDb.length) return res.json(genresFromDb);

    // API
    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const genres = response.data.results;
    genres.forEach(async (genre) => {
      await Genres.findOrCreate({
        where: {
          name: genre.name,
        },
      });
    });
    // lo mando al FRONT
    const genresFront = genres.map((genres) => {
      return {
        id: genres.id,
        name: genres.name,
      };
    });
    res.json(genresFront);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
