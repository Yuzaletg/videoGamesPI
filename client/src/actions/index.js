import axios from "axios";
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const ORDER_BY = "ORDER_BY";
export const FILTER_BY = "FILTER_BY";

//* Trae todos los juegos (DB + API)
export function getAllGames() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/Videogame")
      .then((res) => {
        dispatch({ type: GET_ALL_GAMES, payload: res.data });
      })
      .catch((err) => {
        return err;
      });
  };
}

//* Trae todos los juegos encontrados por nombre (QUERY: "name")
export function searchByName(name) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/videogame?name=${name}`)
      .then((res) => {
        dispatch({ type: SEARCH_BY_NAME, payload: res.data });
      })
      .catch((err) => {
        return err;
      });
  };
}

//* Trae los detalles del juego pasado por (params :ID)
export function getVideogameDetail(id) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/videogame/${id}`)
      .then((res) => {
        dispatch({ type: GET_VIDEOGAME_DETAIL, payload: res.data });
      })
      .catch((err) => {
        return err;
      });
  };
}

//* Trae todos los generos
export function getGenres() {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/genres`)
      .then((res) => {
        dispatch({ type: GET_GENRES, payload: res.data });
      })
      .catch((err) => {
        return err;
      });
  };
}

//* Ordenamiento
export function orderBy(order) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY, payload: order });
  };
}

//* Filtrado
export function filterBy(order) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY, payload: order });
  };
}
