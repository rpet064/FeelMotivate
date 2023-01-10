import { useState } from "react";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} maxLength="80"/>
      <button
        id="toDoButton"
        title="Add a new item"
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      > Add
      </button>
    </div>
  );
}
