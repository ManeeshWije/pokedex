import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css";
import PokemonList from "./PokemonList";

function App() {
  const [name, setName] = useState("");
  const [sprite, setSprite] = useState("");
  const [baseExperience, setBaseExperience] = useState(null);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemon`)
      .then((response) => {
        setName(response.data.name);
        setSprite(response.data.sprite);
        setBaseExperience(response.data.baseExperience);
        setAbilities(response.data.abilities.map((p) => p.ability));
        //setAbilities(response.data.abilities);
        //Abilities: {abilities.map((p) => p.ability.name)}
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container">
        <h2> Name: {name} </h2>
        <img alt="sprite" src={sprite} />
        <h3> Base Experience: {baseExperience} </h3>
        <h4 className="abilities">
          Abilities: {abilities.map((p) => p.name) + "\n"}
        </h4>
      </div>
    </>
  );
}

export default App;
