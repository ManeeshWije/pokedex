import React, { useState, useEffect } from "react";
import axios from "axios";

function Pokedex() {
	const [dexName, setDexName] = useState("");
	const [dexSprite, setDexSprite] = useState("");
	const [dexBaseExperience, setDexBaseExperience] = useState(null);
	const [dexAbilities, setDexAbilities] = useState([]);

	const getPokedex = () => {
		axios
			.get(`http://localhost:3001/pokedex`)
			.then((response) => {
				console.log(response);
				setDexName(response.data.map((p) => p.name));
				// setDexSprite(response.data.map((p) => p.sprite));
				const image = response.data.map((p) => p.sprite);
				// image.toString().split(",");
				console.log(image);
				setDexBaseExperience(response.data.map((p) => p.baseExperience));
				setDexAbilities(response.data.map((p) => p.abilities));
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getPokedex();
	}, []);

	return (
		<div className="pokedex">
			<h2> Name: {dexName} </h2>
			<img alt="sprite" src={dexSprite} />
			<h3> Base Experience: {dexBaseExperience} </h3>
			<h4 className="abilities">Abilities: {dexAbilities}</h4>
		</div>
	);
}

export default Pokedex;
