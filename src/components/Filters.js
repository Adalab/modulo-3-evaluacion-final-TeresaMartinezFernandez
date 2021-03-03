import React from "react";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterByCity from "./FilterByCity";

function Filters(props) {
  return (
    <section>
      <form>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterByGender handleFilter={props.handleFilter} />
        <FilterByCity cities={props.cities} handleFilter={props.handleFilter} />
      </form>
    </section>
  );
}

export default Filters;
