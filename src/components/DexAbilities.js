import React, { useState } from "react";

function DexAbilities({ abilities }) {
  return (
    <div>
      {abilities.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}

export default DexAbilities;
