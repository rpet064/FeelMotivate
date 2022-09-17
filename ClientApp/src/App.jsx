import "./styles.css";
import { useEffect } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useState } from "react";
import ToDoItem from "./components/toDoList/ToDoItem";
import InputArea from "./components/toDoList/InputArea";
import axios from 'axios';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub,faLinkedin, faEnvelope);

 export default function App() {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    fetchData()
  }, []);

  const addItem = async (inputText) =>{ 
    const postData = await axios.post('http://localhost:4000/notes',{
      Content: inputText
    })
    await fetchData()
  }


  async function deleteNote(id) {
    await fetch(`http://localhost:4000/notes/${id}`, { method: 'DELETE' })
    await fetchData();
  }

  const fetchData = async() => {
    axios.get('http://localhost:4000/notes'
  ).then(
    (response) => {
      setNotes(response.data)
    })
  }

    return(
      <div>
        <Header />
        <div>
          <div id="toDoList">
            <InputArea onAdd={addItem} />
            <div>
              <ul>
                {notes && notes.map((toDoNote) => (
                  <ToDoItem
                    key={toDoNote.id}
                    id={toDoNote.id}
                    text={toDoNote.content}
                    onChecked={deleteNote}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )}
