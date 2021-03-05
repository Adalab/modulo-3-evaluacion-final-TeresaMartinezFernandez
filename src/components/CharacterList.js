import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/characterlist.scss";

function CharacterList(props) {
  const characterElements = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section className="list__container">
      <ul className="cards">{characterElements}</ul>
    </section>
  );
}
export default CharacterList;
