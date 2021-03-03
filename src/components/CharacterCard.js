import React from "react";

function CharacterCard(props) {
  return (
    <>
      <img
        className="card__img"
        src="https://i.pinimg.com/474x/6e/04/93/6e04932f60b65dd2872ec241fe755e6f.jpg"
        alt="foto de mujer"
      />
      <h4 className="card__title">Nombre Apellido</h4>
      <p className="card__description">ciudad / genero</p>
      <p className="card__description">ciudad / genero</p>
      <p className="card__description">ciudad / genero</p>
      <p className="card__description">ciudad / genero</p>
    </>
  );
}

export default CharacterCard;
