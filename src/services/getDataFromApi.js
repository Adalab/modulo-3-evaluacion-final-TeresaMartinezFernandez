import React from "react";

function getDataFromApi() {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          status: character.status,
          origin: character.origin,
          episode: character.episode,
        };
      });
    });
}

export default getDataFromApi;

//"https://rickandmortyapi.com/api/character"
