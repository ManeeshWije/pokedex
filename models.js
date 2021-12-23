const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	abilities: {
		type: Array,
	},
	sprite: {
		type: String,
	},
	baseExperience: {
		type: Number,
	},
});

const Pokemon = mongoose.model("pokemon", pokemonSchema);

module.exports = Pokemon;
