import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css";
import PokemonList from "./PokemonList";

function App() {
	const [name, setName] = useState();
	const [sprite, setSprite] = useState("");
	const [baseExperience, setBaseExperience] = useState("");
	const [abilities, setAbilities] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3001/pokemon`)
			.then((response) => {
				// console.log(response.data.map((p) => p.name));
				setName(response.data.map((p) => p.name));
			})
			.catch((error) => console.log(error));
	}, []);

	return <div>{name}</div>;
}

export default App;
