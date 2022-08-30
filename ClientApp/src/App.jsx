import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useState } from "react";
import ToDoItem from "./components/toDoList/ToDoItem";
import InputArea from "./components/toDoList/InputArea";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub,faLinkedin, faEnvelope);

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
