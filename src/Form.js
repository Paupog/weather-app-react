import React, { useState } from "react";

export default function Form({ setCity }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCity(input);
  }

  function updateInput(event) {
    setInput(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter city" onChange={updateInput} />
      <button>Search</button>
    </form>
  );
}
