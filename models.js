const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  abilities: {
    type: Array,
    unique: true,
  },
  sprite: {
    type: String,
    unique: true,
  },
  baseExperience: {
    type: Number,
    unique: true,
  },
});

const Pokemon = mongoose.model("pokemon", pokemonSchema);

module.exports = Pokemon;
