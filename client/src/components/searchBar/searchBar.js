import { React, useState } from "react";
import { connect } from "react-redux";
import { searchByName, getAllGames } from "../../actions/index";
import "./searchBar.css";

function SearchBar({ searchByName, getAllGames }) {
  const [input, setInput] = useState({
    buscar: "",
  });

  const handleInputChange = function (e) {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = () => {
    searchByName(input.buscar);
    setInput({
      buscar: "",
    });
  };

  const handleOnClickAll = () => {
    getAllGames();
    setInput({
      buscar: "",
    });
  };

  return (
    <div className="searchbar-div">
      <div className="searchbar">
        {" "}
        <input
          className="bar-btn"
          name="buscar"
          placeholder="buscar videojuego..."
          onChange={handleInputChange}
          value={input.buscar}
          autoComplete="off"
        ></input>
        <button className="btn" onClick={handleOnClick}>
          Buscar
        </button>
        <button className="btn" onClick={handleOnClickAll}>
          All Games
        </button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default connect(null, { searchByName, getAllGames })(SearchBar);
