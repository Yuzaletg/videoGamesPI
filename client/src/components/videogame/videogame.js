import React from "react";
import { Link } from "react-router-dom";
import "./videogame.css";
import photo from "../../img/created.jpg";

export default function Videogame(props) {
  return (
    <div className="container-game">
      <div className="title-game">{props.name}</div>
      <div className="game-div">
        {props.image ? (
          <img src={`${props.image}`} alt="Videogame" className="Img"></img>
        ) : (
          <img src={photo} alt="Videogame" className="Img"></img>
        )}
      </div>
      <div className="infoRating">
        {
          <p>
            <strong>Rating</strong>: &#11088;{`${props.rating}`}&#11088;
          </p>
        }
      </div>
      <div className="infoContGenres">
        {
          <p className="">
            <strong>Genres :</strong>{" "}
            {`${
              typeof props.genres === "string"
                ? props.genres
                : props.genres.join(", ")
            }`}
          </p>
        }
      </div>
      <div className="div-button">
        {props.id && (
          <Link to={`/videogame/${props.id}`}>
            <button className="btn-grad">Details</button>
          </Link>
        )}
      </div>
    </div>
  );
}
