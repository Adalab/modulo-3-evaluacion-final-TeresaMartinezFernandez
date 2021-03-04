import React from "react";
import { Link } from "react-router-dom";

// import PropTypes from "prop-types";

function CharacterCard(props) {
  console.log(props.character.id);
  return (
    <>
      <Link to={`/character/${props.character.id}`}>
        <img
          className="card__img"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4 className="card__title">{props.character.name}</h4>
        <p className="card__description">{props.character.species}</p>
      </Link>
    </>
  );
}
// CharacterCard.PropTypes = {
//   character: PropTypes.object,
// };

export default CharacterCard;
