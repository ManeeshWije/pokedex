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

// app.get("/pokemon", async (req, res) => {
// 	const pokemon = await pokemonModel.find();
// 	try {
// 		res.send(pokemon);
// 	} catch (error) {
// 		res.status(500).send(error);
// 	}
// });

app.get("/pokemon/:id", (req, res) => {
	axios.get("http://pokeapi.co/api/v2/pokemon/id").then((response) => {
		const p = response.data;
		// const abilities = res.data.abilities;
		// const sprite = res.data.sprites.front_default;
		// const baseExperience = res.data.base_experience;
		// console.log(name + abilities + sprite + baseExperience);
		console.log(p);
	});
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
