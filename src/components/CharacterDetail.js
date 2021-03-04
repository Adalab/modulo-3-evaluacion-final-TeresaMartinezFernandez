import React from "react";

function CharacterDetail() {
  return (
    <>
      <header>
        <h1 className="title--big">Personajes Rick and Morty </h1>
      </header>
      <main>
        <section>
          <form>
            <button>volver</button>
          </form>
        </section>
        <section>
          <img className="card__img" src alt="imagen" title="imagen"></img>
          <h4 className="card__title">nombre</h4>
          <p className="card__description">status</p>
          <p className="card__description">species</p>
          <p className="card__description">origin</p>
          <p className="card__description">episodes</p>
        </section>
      </main>
      <footer>HAsta luego Mari CArmen</footer>
    </>
  );
}

export default CharacterDetail;
