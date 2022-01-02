import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css"

function Pokedex() {
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		getPokedex();
	}, []);

	const refreshPage = () => {
		window.location.reload();
	}

	const getPokedex = () => {
		axios
			.get(`http://localhost:3001/pokedex`)
			.then((response) => {
				setPokemon(response.data)
			})
			.catch((err) => console.log(err));
	};

	const deletePokemon = async (id) => {
		const data = await fetch("http://localhost:3001/pokedex/delete/" + id, {
		  method: "DELETE",
		})
		  .then((res) => {
			  res.json()
		  })
		refreshPage()
	  };

	const lineStyle = {
		width: "50%",
		color: "black"
	}

	return (
		pokemon.map((p, btn) => (
			<div key={p._id} className="pokedex">
				<button className="btn" key={btn} onClick={() => deletePokemon(p._id)}>REMOVE</button>
				<h2 key={p.name}>Name: {p.name}</h2>
				<img key={p.sprite} src={p.sprite} alt="pokemon" />
				<h3 key={p.baseExperience}>Base Experience: {p.baseExperience}</h3>
				<h4 key={p.abilities}>Abilities: {p.abilities}</h4>
				<br />
				<hr style={lineStyle} />
			</div>
		))
	);
}
export default Pokedex;