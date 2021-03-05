import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../stylesheets/App.scss";
import "../stylesheets/charactercard.scss";

function CharacterCard(props) {
  return (
    <>
      <Link to={`/character/${props.character.id}`}>
        <article className="character__card">
          <img
            className="character__card--img"
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
          <h4 className="character__card--title">{props.character.name}</h4>
          <p className="character__card--description">
            {props.character.species}
          </p>
        </article>
      </Link>
    </>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
};

export default CharacterCard;
