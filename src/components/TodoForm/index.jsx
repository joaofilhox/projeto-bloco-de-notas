import { useState } from "react"
import { Input } from "../Forms/Input"
import { TextArea } from "../Forms/TextArea"
import { Select } from "../Forms/Select"

export const TodoForm = ({ addNote }) => {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [category, setCategory] = useState("tarefas")

  const submit = (e) => {
    e.preventDefault()

    if (title !== "" && message !== "") {
      addNote(title, message, category)

      setMessage("")
      setTitle("")
    }
  }

  return (
    <div>
      <h2 className="title two">Cadastre uma nota</h2>
      <form onSubmit={submit}>
        <Input
          label="Título: "
          placeholder="Título da nota"
          type="text"
          id="title"
          value={title}
          setValue={setTitle}
        />

        <TextArea
          label="Mensagem: "
          placeholder="Mensagem"
          id="message"
          value={message}
          setValue={setMessage}
        />
        <Select id="categoty" label="Categoria: " setValue={setCategory} value={category}>
          <option value="tarefas">Tarefas</option>
          <option value="notas">Notas</option>
        </Select>

        <button className="btn large full" type="submit">
          Criar nota
        </button>
      </form>
    </div>
  )
}