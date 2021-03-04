import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
import getDataFromApi from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
import logo from "../images/logo.png";
import CharacterDetail from "./CharacterDetail";

// console.log(getDataFromApi());

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("all");
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  console.log(characters);

  //event handlers

  const handleFilter = (inputFilter) => {
    console.log(inputFilter);
    if (inputFilter.key === "name") {
      setNameFilter(inputFilter.value);
    } else if (inputFilter.key === "species") {
      setSpeciesFilter(inputFilter.value);
    }
  };
  // console.log(nameFilter);
  // console.log(speciesFilter);

  const filteredCharacters = characters
    .filter((character) => {
      // console.log(character.species);
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      // console.log(character.species);
      if (speciesFilter === "all") {
        return true;
      } else {
        return speciesFilter === character.species;
      }
    });
  console.log(filteredCharacters);

  //render tarjeta de personaje

  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === characterId;
    });

    return <CharacterDetail character={selectCharacter} />;
  };

  return (
    <>
      <header>
        <img
          className="card__img"
          src={logo}
          alt="logo Rick and Morty"
          title="Logo Rick and"
        ></img>
        <h1 className="title--big">Personajes Rick s and Morty </h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Filters handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
          </Route>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
      <footer>hasta luego mari Carmen</footer>
    </>
  );
};
export default App;
