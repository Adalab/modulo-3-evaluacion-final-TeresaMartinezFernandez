import React from "react";

function FilterByName(props) {
  const handleChange = (event) => {
    props.handleFilter({
      key: "name",
      value: event.target.value,
    });
  };
  return (
    <>
      <label className="form__label display-block" htmlFor="name">
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
