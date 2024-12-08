import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [inputName, setInputName] = useState(null);

  function handleClick() {
    setInputName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {inputName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
