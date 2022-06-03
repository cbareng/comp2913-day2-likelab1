import { useState } from "react";

export default function Oven() {
  // useState returns an array
  // setTemperature is a function that allows us to change "temperature"
  const [temperature, setTemperature] = useState(0);
  const handleClick = (setting) => {
    if (setting === "INCREASE") {
      setTemperature(temperature + 1);
    } else {
      setTemperature(temperature - 1);
    }
  };
  // ONCLICK= <<FUNCTION>>
  return (
    <div>
      <p>Temperature: {temperature}</p>
      <button onClick={() => handleClick("INCREASE")}>+</button>
      <button onClick={() => handleClick("DECRESE")}>-</button>
    </div>
  );
}
