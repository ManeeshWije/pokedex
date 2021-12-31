import React, { useState } from "react";

function DexSprites({ sprite }) {
  return (
    <div>
      {sprite.map((p) => (
        <img key={p} src={p} alt="" />
      ))}
    </div>
  );
}

export default DexSprites;
