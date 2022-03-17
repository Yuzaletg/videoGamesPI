import { React, useEffect } from "react";
import { connect } from "react-redux";
import { getVideogameDetail } from "../../actions/index";
// import Navbar from "../NavBar/NavBar";
import photo from "../../img/created.jpg";
import { NavLink } from "react-router-dom";
import "./Details.css";

function GameDetails(props) {
  const { getVideogameDetail, gameDetails } = props;
  const { idVideogame } = props.match.params;

  useEffect(() => {
    getVideogameDetail(idVideogame);
  }, [getVideogameDetail, idVideogame]);

  return (
    <div className="container-detail">
      <div className="details-div">
        {gameDetails ? (
          <div>
            <h3 className="title">{gameDetails.name}</h3>
            {gameDetails.background_image ? (
              <div className="div-img">
                <img src={gameDetails.background_image} alt="Videogame"></img>
              </div>
            ) : (
              <div className="div-img">
                <img src={photo} alt="Videogame"></img>
              </div>
            )}
            {
              <p>
                <strong className="strong">Released Date :</strong>{" "}
                {`${gameDetails.released || "None"}`}
              </p>
            }
            <p>
              <strong className="strong">Rating :</strong> &#11088;{" "}
              {`${gameDetails.rating}`} &#11088;
            </p>

            {gameDetails.description &&
            gameDetails.genres &&
            gameDetails.platforms ? (
              <div className="div-descr">
                {
                  <p className="descripcion">
                    <strong className="strong">Description:</strong>
                    {gameDetails.description.replace(/(<([^>]+)>)/gi, "")}
                  </p>
                }
                {
                  <p>
                    <strong className="strong">Genres :</strong>{" "}
                    {`${gameDetails.genres.join(", ")}`}
                  </p>
                }
                {
                  <p>
                    <strong className="strong">Platforms :</strong>{" "}
                    {`${
                      typeof gameDetails.platforms === "string"
                        ? gameDetails.platforms
                        : gameDetails.platforms.join(", ")
                    }`}
                  </p>
                }
                <NavLink to="/videogames">
                  <button>Volver</button>
                </NavLink>
              </div>
            ) : (
              <h1>Cargando ...</h1>
            )}
          </div>
        ) : (
          <h1>Cargando ...</h1>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    gameDetails: state.gameDetails,
  };
};

export default connect(mapStateToProps, { getVideogameDetail })(GameDetails);
