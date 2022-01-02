const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const mongoose = require("mongoose");
const pokemonModel = require("./models/Pokemon");
const pokedexModel = require("./models/Pokedex");
const { default: axios } = require("axios");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "client", "build")));

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

app.get("/pokemons", async (req, res) => {
  let randNum = Math.floor(Math.random() * 898) + 1;
  await axios
    .get(`http://pokeapi.co/api/v2/pokemon/${randNum}`)
    .then((response) => {
      const pokemon = new pokemonModel({
        id: response.data.id,
        name: response.data.name,
        abilities: response.data.abilities,
        sprite: response.data.sprites.front_default,
        baseExperience: response.data.base_experience,
      });
      pokemon.save();
      res.json(pokemon);
    });
});

app.get("/api/pokedex", async (req, res) => {
  const pokedex = await pokedexModel.find();
  res.json(pokedex);
});

app.post("/pokemon/add", (req, res) => {
  const pokemon = new pokedexModel({
    name: req.body.name,
    abilities: req.body.abilities,
    sprite: req.body.sprite,
    baseExperience: req.body.baseExperience,
  });
  pokedexModel.countDocuments({ name: pokemon.name }, (err, count) => {
    if (count > 0) {
      console.log("DUPE");
    } else {
      pokemon.save();
    }
  });
  res.json(pokemon);
});

app.delete("/api/pokedex/delete/:id", async (req, res) => {
  const pokemon = await pokedexModel.findByIdAndDelete(req.params.id);
  res.json(pokemon);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
