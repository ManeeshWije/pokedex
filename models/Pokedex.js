const mongoose = require("mongoose");

const pokedexSchema = new mongoose.Schema({
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

const Pokedex = mongoose.model("pokedex", pokedexSchema);

module.exports = Pokedex;
