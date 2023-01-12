import "./styles.css";
import { useEffect } from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ToDoItem from "./components/toDoList/ToDoItem";
import InputArea from "./components/toDoList/InputArea";
import axios from 'axios';

 export default function App() {
  const [notes, setNotes] = useState([{
    "content": "",
    "id": 0
 }]);
  
  useEffect(() => {
    fetchData()
  }, []);

  const addItem = async (inputText: String) =>{ 

    // Capitalise string regardless of user input
    inputText = inputText.charAt(0).toUpperCase() + inputText.slice(1);

    // Post note data to sever
    const postData = await axios.post('http://localhost:4000/notes',{
      Content: inputText
    })
    console.log(postData);
    await fetchData()
  }


  async function deleteNote(id: Number) {

    // Delete note data from sever
    await fetch(`http://localhost:4000/notes/${id}`, { method: 'DELETE' })
    await fetchData();
  }

  const fetchData = async() => {

    // Detch note data from sever
    axios.get('http://localhost:4000/notes'
  ).then(
    (response) => {
      setNotes(response.data)
    })
  }

    return(
      <div id="main">
        <Navbar />
        <div id="main-content">
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
