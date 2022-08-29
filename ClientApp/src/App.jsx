import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useState } from "react";
import ToDoItem from "./components/toDoList/ToDoItem";
import InputArea from "./components/toDoList/InputArea";


 export default function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
    return(
      <div>
        <Header />
        <div>
          <h1> Feeling Motivated?</h1>
          <div id="toDoList">
            <InputArea onAdd={addItem} />
            <div>
              <ul>
                {items.map((todoItem, index) => (
                  <ToDoItem
                    key={index}
                    id={index}
                    text={todoItem}
                    onChecked={deleteItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )}
