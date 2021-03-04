import React from "react";

function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
    // console.log(ev.target.value);
  };

  return (
    <>
      <label className="form__label display-block" htmlFor="species">
        Filtrar por especie:
      </label>
      <select
        className="form__input-text"
        name="species"
        id="species"
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="human">Humano</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
}

export default FilterBySpecies;
