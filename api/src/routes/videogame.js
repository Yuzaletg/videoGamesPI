require("dotenv").config();
const { Router } = require("express");
const { API_KEY } = process.env;
const axios = require("axios");

const { Videogame, Genres } = require("../db");

const router = Router();

//"GET/videogame"

router.get("/", async (req, res, next) => {
  let videogamesDb = await Videogame.findAll({
    include: Genres,
  });
  videogamesDb = JSON.stringify(videogamesDb);
  videogamesDb = JSON.parse(videogamesDb);
  videogamesDb = videogamesDb.reduce(
    (acc, el) =>
      acc.concat({
        ...el,
        genres: el.genres.map((g) => g.name),
      }),
    []
  );

  //GET /videogame?name="..."
  if (req.query.name) {
    try {
      let response = await axios.get(
        `https://api.rawg.io/api/games?search=${req.query.name}&key=${API_KEY}`
      );
      if (!response.data.count)
        return res
          .status(404)
          .json(`No encontramos el juego ${req.query.name}`);
      //devuelve los datos necesarios para la ruta principal
      const Allgames = response.data.results.map((Vg) => {
        return {
          id: Vg.id,
          name: Vg.name,
          background_image: Vg.background_image,
          rating: Vg.rating,
          genres: Vg.genres.map((genre) => genre.name),
        };
      });

      //me trae todos los primeros 15 videojuegos por nombre con la data necesaria
      const GamesDb = videogamesDb.filter((g) =>
        g.name.toLowerCase().includes(req.query.name.toLowerCase())
      );
      const results = [...GamesDb, ...Allgames.splice(0, 15)];
      return res.json(results);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      let pages = 0;
      let results = [...videogamesDb];
      let response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );
      while (pages < 6) {
        pages++;
        const allGamesApi = response.data.results.map((game) => {
          return {
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            rating: game.rating,
            genres: game.genres.map((g) => g.name),
          };
        });
        results = [...results, ...allGamesApi];
        response = await axios.get(response.data.next);
      }
      return res.json(results);
    } catch (error) {
      next(error);
    }
  }
});

// router.delete("/", (req, res, next) => {
//   res.send("Soy Delete de Videogame");
// });
// router.put("/", (req, res, next) => {
//   res.send("Soy Put de Videogame");
// });

module.exports = router;
