import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";
import "../stylesheets/characterdetail.scss";

function CharacterDetail(props) {
  const iconHeartClassName =
    props.character.status === "Alive" ? "fas fa-heart" : "";
  const iconSkullClassName =
    props.character.status === "Dead" ? "fas fa-skull" : "";
  const iconUnknownClassName =
    props.character.status === "unknown" ? "fas fa-question" : "";
  return (
    <>
      <main className="card">
        <Link to="/">
          <button className="card__button">
            <i class="fa fa-arrow-left" aria-hidden="true"></i> Volver
          </button>
        </Link>
        <section className="card__detail">
          <img
            className="card__detail--img"
            src={props.character.image}
            alt={`imagen de ${props.character.name}`}
            title={`imagen de ${props.character.name}`}
          ></img>
          <h4 className="card__detail--title">{props.character.name}</h4>
          <p className="card__detail--description">
            {`status: ${props.character.status}`}_
            <i
              className={`${iconHeartClassName} ${iconSkullClassName} ${iconUnknownClassName}`}
            ></i>
          </p>
          <p className="card__detail--description">{`species: ${props.character.species}`}</p>
          <p className="card__detail--description">{`origin: ${props.character.origin.name}`}</p>
          <p className="card__detail--description">{`episodes: ${props.character.episode.length}`}</p>
        </section>
      </main>
    </>
  );
}

export default CharacterDetail;
