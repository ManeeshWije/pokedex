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

app.get("/pokemon", (req, res) => {
  pokemonModel.count().exec((err, count) => {
    var random = Math.floor(Math.random() * count);

    pokemonModel
      .findOne()
      .skip(random)
      .exec((err, result) => {
        res.json(result);
      });
  });
});

app.get("/pokemons", (req, res) => {
  let randNum = Math.floor(Math.random() * 898) + 1;
  axios.get(`http://pokeapi.co/api/v2/pokemon/${randNum}`).then((response) => {
    const pokemon = new pokemonModel({
      id: response.data.id,
      name: response.data.name,
      abilities: response.data.abilities,
      sprite: response.data.sprites.front_default,
      baseExperience: response.data.base_experience,
    });
    pokemon.save();
    res.send(pokemon);
  });
});

//TODO
app.post("/pokemon/add", (req, res) => {
  console.log("hi");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
