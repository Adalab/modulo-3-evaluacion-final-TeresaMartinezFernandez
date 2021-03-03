import React from "react";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterByCity from "./FilterByCity";

function Filters() {
  return (
    <section className="col2">
      <form>
        <FilterByName />
      </form>
    </section>
  );
}

export default Filters;
