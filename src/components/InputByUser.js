import React, { useState } from "react";

function InputByUser(Props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }
  return (
    <form className="flex-form">
      <input
        autoFocus
        className="inputbox__style"
        onChange={handleChange}
        type="input"
        placeholder="e.g. Make a cup of coffee"
        value={inputText}
        required
      />
      <button
        onClick={() => {
          Props.handleClick(inputText);
          setInputText("");
        }}
        className="btn"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default InputByUser;
