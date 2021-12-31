import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css"
import DexNames from "./DexNames"
import DexSprites from "./DexSprites"
import DexExps from "./DexExps"
import DexAbilities from "./DexAbilities"

function Pokedex() {
	const [dexName, setDexName] = useState([]);
	const [dexSprite, setDexSprite] = useState([])
	const [dexBaseExperience, setDexBaseExperience] = useState([]);
	const [dexAbilities, setDexAbilities] = useState([]);

	const getPokedex = () => {
		axios
			.get(`http://localhost:3001/pokedex`)
			.then((response) => {
				setDexName(response.data.map((p) => p.name))
				setDexSprite(response.data.map((p) => p.sprite ))
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
			<DexNames pokemon={dexName}/>
			<DexSprites sprite={dexSprite}/>
			<DexExps baseExperience={dexBaseExperience} />
			<DexAbilities abilities={dexAbilities}/>
		</div>
	);
}
export default Pokedex;
