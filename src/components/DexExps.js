import React, { useState } from "react";

function DexExps({ baseExperience }) {
  return (
    <div>
      {baseExperience.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}

export default DexExps;
