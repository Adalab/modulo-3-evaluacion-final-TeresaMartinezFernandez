import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
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

  //event handlers

  const handleFilter = (inputFilter) => {
    console.log(inputFilter);
    if (inputFilter.key === "name") {
      setNameFilter(inputFilter.value);
    } else if (inputFilter.key === "species") {
      setSpeciesFilter(inputFilter.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      if (speciesFilter === "all") {
        return true;
      } else {
        return character.species === speciesFilter;
      }
    });
  // console.log(filteredCharacters);

  //render character detail card

  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === characterId;
    });

    return <CharacterDetail character={selectCharacter} />;
  };

  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="logo Rick and Morty"
          title="Logo Rick and"
        ></img>
        <h1 className="header__title">Personajes Ricks and Morty </h1>
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Filters handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
          </Route>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
      <footer className="footer">hasta luego mari Carmen</footer>
    </>
  );
};
export default App;
