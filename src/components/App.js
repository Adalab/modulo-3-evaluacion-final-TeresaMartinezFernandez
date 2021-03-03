import React, { useEffect, useState } from "react";
// // import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
// // import UserDetail from "./UserDetail";
import getDataFromApi from "../services/getDataFromApi";
import FilterByName from "./FilterByName";
import CharacterList from "./CharacterList";

console.log(getDataFromApi());

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  console.log(characters);
  return (
    <>
      <header>
        <h1 className="title--big">Personajes Rick and Morty </h1>
      </header>
      <main>
        <Filters />
        <CharacterList characters={characters} />
      </main>
      <footer>hasta luego mari Carmen</footer>
    </>
  );
};
export default App;
