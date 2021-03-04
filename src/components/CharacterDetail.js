import React from "react";
import { Link } from "react-router-dom";

function CharacterDetail(props) {
  console.log(props);
  return (
    <>
      <header>
        <h1 className="title--big">Personajes Rick and Morty </h1>
      </header>
      <main>
        <Link to="/">
          <span>volver</span>
        </Link>
        <section>
          <img
            className="card__img"
            src={props.character.image}
            alt={`imagen de ${props.character.name}`}
            title={`imagen de ${props.character.name}`}
          ></img>
          <h4 className="card__title">{props.character.name}</h4>
          <p className="card__description">{`status: ${props.character.status}`}</p>
          <p className="card__description">{`species: ${props.character.species}`}</p>
          <p className="card__description">{`origin: ${props.character.origin.name}`}</p>
          <p className="card__description">{`episodes: ${props.character.episode.length}`}</p>
        </section>
      </main>
      <footer>HAsta luego Mari CArmen</footer>
    </>
  );
}

export default CharacterDetail;
