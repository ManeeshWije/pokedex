import axios from "axios";
import React, { useState, useEffect } from "react";

import "./index.css";

const getPokemon = () => {
	let randNum = Math.floor(Math.random() * 100) + 1;
	axios.get(`http://localhost:3001/pokemon/${randNum}`).then((response) => {});
};

function App() {
	return <div className="App">HI</div>;
}

export default App;
