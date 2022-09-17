import React, { useState, useEffect } from "react";
import "../index.css"
const API = "https://pokedex-production-b655.up.railway.app"
// const API2 = "http://localhost:3001"

function Pokedex() {
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		getPokedex();
	}, []);

	const refreshPage = () => {
		window.location.reload();
	}

	const getPokedex = () => {	
		fetch(API + "/api/pokedex")
			.then((res) => res.json())
			.then((data) => setPokemon(data))
			.catch((err) => console.error(err));
	}

	const deletePokemon = async (id) => {
		await fetch(API + "/api/pokedex/delete/" + id, {
		  method: "DELETE",
		})
		  .then((res) => {
			  res.json();
		  })
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
