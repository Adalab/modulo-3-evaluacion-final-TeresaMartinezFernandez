import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../stylesheets/App.scss";

function Filters(props) {
  return (
    <section>
      <form className="filters__form">
        <FilterByName handleFilter={props.handleFilter} />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
}

export default Filters;
