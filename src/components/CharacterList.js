import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const characterElements = props.characters.map((character) => {
    console.log(character);
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className="cards">{characterElements}</ul>
    </section>
  );
}
export default CharacterList;
