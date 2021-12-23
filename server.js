const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const mongoose = require("mongoose");
const pokemonModel = require("./models");
const { default: axios } = require("axios");
require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: "true",
		useUnifiedTopology: "true",
	})
	.then(() => {
		console.log("Connected to DB");
	})
	.catch(console.error);

app.get("/pokemon", async (req, res) => {
	const pokemons = await pokemonModel.find();
	res.json(pokemons);
});

app.post("/pokemon", (req, res) => {
	let randNum = Math.floor(Math.random() * 100) + 1;
	axios.get(`http://pokeapi.co/api/v2/pokemon/${randNum}`).then((response) => {
		const pokemon = new pokemonModel({
			name: response.data.name,
			abilities: response.data.abilities,
			sprite: response.data.sprites.front_default,
			baseExperience: response.data.base_experience,
		});
		pokemon.save();
		res.json(pokemon);
	});
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
