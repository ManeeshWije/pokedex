import React from "react";

export default function PokemonList({ name }) {
  return (
    <div>
      {name.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}
