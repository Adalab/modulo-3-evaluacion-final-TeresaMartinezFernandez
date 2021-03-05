import React from "react";
import "../stylesheets/App.scss";
import "../stylesheets/filters.scss";

function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "species",
      value: ev.target.value,
    });
  };

  return (
    <>
      <label className="form__label" htmlFor="species">
        Filtrar por especie:
      </label>
      <select
        className="form__input-text"
        name="species"
        id="species"
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
}

export default FilterBySpecies;
