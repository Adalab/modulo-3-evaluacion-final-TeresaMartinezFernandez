import React from "react";
import CharacterDetail from "./CharacterDetail";
// import PropTypes from "prop-types";

function CharacterCard(props) {
  // console.log(props.character.episode.length);
  return (
    <>
      <img
        className="card__img"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__description">{props.character.species}</p>
      {/* <CharacterDetail /> */}
    </>
  );
}
// CharacterCard.PropTypes = {
//   name: PropTypes.string,
//   species: PropTypes.string,
// };

export default CharacterCard;
