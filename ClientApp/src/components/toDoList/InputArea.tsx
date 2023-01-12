import { useState } from "react";

type Props = {
  onAdd: Function;
}

 const InputArea:React.FC<Props> = (props) => {
  const [inputText, setInputText] = useState("");

  function handleChange(event: any) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} maxLength={80}/>
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

export default InputArea
