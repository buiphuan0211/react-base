import React, { useState } from "react";

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState("white");
  return (
    <div>
      {color}
      <button onClick={() => setColor("white")}>White</button>
      <button onClick={() => setColor("black")}>Black</button>
    </div>
  );
}

export default ColorBox;
