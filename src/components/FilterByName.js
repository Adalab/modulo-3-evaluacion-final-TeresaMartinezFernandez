import React from "react";

function FilterByName() {
  return (
    <>
      <label className="form__label display-block" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input className="form__input-text" type="text" name="name" id="name" />
    </>
  );
}

export default FilterByName;
