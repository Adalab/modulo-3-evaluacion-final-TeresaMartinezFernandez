import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../stylesheets/App.scss";
import "../stylesheets/filters.scss";

function Filters(props) {
  console.log(props);
  return (
    <section>
      <form className="filters__form">
        <FilterByName
          handleFilter={props.handleFilter}
          nameFilter={props.nameFilter}
        />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
}

export default Filters;
