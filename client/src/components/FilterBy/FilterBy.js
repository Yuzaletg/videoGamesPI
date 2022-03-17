import React from "react";
import { connect } from "react-redux";
import { orderBy, filterBy } from "../../actions/index";
import "./Filterby.css";

function FilteredBy({ orderBy, genres, filterBy }) {
  const handleSelect = (e) => {
    filterBy(e.target.value);
  };

  const handleSelect2 = (e) => {
    orderBy(e.target.value);
  };
  return (
    <div className="container-div">
      <select className="selectCont" onChange={handleSelect} name="" id="">
        <option className="option" value="default">
          FILTRAR POR...
        </option>
        <optgroup className="optionGroup" label="My Games">
          <option className="option" value="DB">
            MY GAMES
          </option>
        </optgroup>
        <optgroup className="optionGroup" label="API">
          <option className="option" value="API">
            API
          </option>
        </optgroup>
        <optgroup className="optionGroup" label="GENRES">
          {genres &&
            genres.map((g) => (
              <option key={g.name} value={g.name}>
                {g.name}
              </option>
            ))}
        </optgroup>
      </select>
      <select className="selectCont" onChange={handleSelect2} name="" id="">
        <option className="option" value="default">
          ORDENAR POR...
        </option>
        <optgroup className="optionGroup" label="Rating">
          <option className="option" value="asc">
            &#9650;
          </option>
          <option className="option" value="desc">
            &#9660;
          </option>
        </optgroup>
        <optgroup className="optionGroup" label="Alphabetic">
          <option className="option" value="A-Z">
            A - Z
          </option>
          <option className="option" value="Z-A">
            Z - A
          </option>
        </optgroup>
      </select>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
  };
};

export default connect(mapStateToProps, { orderBy, filterBy })(FilteredBy);
