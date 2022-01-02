import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [sprite, setSprite] = useState("");
  const [baseExperience, setBaseExperience] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [messages, setMessages] = useState("");

  useEffect(() => {
    genPokemon();
  }, []);

  const genPokemon = () => {
    axios
      .get(`http://localhost:3001/pokemon`)
      .then((response) => {
        setName(response.data.name);
        setSprite(response.data.sprite);
        setBaseExperience(response.data.baseExperience);
        let allAbilities =
          response.data.abilities.map((p) => p.ability.name) + ",";
        setAbilities(allAbilities);
        setMessages("");
      })
      .catch((error) => console.log(error));
  };

  const addPokemon = async () => {
    const data = await fetch(`http://localhost:3001/pokemon/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        abilities: abilities,
        sprite: sprite,
        baseExperience: baseExperience,
      }),
    }).then((res) => {
      setMessages("ADDED " + name + "!");
      res.json();
    });
  };

  return (
    <>
      <div className="container">
        {messages}
        <h2> Name: {name} </h2>
        <img alt="sprite" src={sprite} />
        <h3> Base Experience: {baseExperience} </h3>
        <h4 className="abilities">Abilities: {abilities}</h4>
        <button className="add" id="add-btn" onClick={addPokemon}>
          {" "}
          Add to Pokedex{" "}
        </button>
        <button className="next" id="next-btn" onClick={genPokemon}>
          Generate New Pokemon{" "}
        </button>
      </div>
    </>
  );
}

export default App;