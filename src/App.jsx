import { useState } from "react"
import { HomePage } from "./page/HomePage"
import imgDeFundo from "../src/img/tt.webp"
import './styles/index.scss'

function App() {
  const [listNotes, setListNotes] = useState([])

  const addNote = (title, message, category) => {
    const id = crypto.randomUUID()
    const newNote = {title, message,category, id}

     setListNotes([...listNotes, newNote])
    }

const removeNote = (id) => {
  const listFiltered = listNotes.filter((note) => {
    if(note.id != id) {
      return note
    }
  })
  setListNotes(listFiltered)
}

  return (
    <div style={{ backgroundImage: `url(${imgDeFundo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }}>
    
      <HomePage listNotes={listNotes} addNote={addNote} removeNote={removeNote}/>
    </div>
  )
}

export default App
