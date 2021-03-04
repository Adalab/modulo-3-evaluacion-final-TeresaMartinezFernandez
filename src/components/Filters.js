import React from "react";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterByCity from "./FilterByCity";

function Filters(props) {
  return (
    <section className="col2">
      <form>
        <FilterByName handleFilter={props.handleFilter} />
      </form>
    </section>
  );
}

export default Filters;
