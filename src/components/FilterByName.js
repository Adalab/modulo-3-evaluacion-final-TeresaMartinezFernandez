import React from "react";
import "../stylesheets/App.scss";
import "../stylesheets/filters.scss";

function FilterByName(props) {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </>
  );
}

export default FilterByName;
