import { NoteNumber } from "./NoteNumber"
import { TodoCard } from "./TodoCard"


export const TodoList = ({ listNotes, removeNote }) => {

    return (
        <div>
            <h2 className="title one">Lista de notas</h2>
            <NoteNumber listNotes={listNotes} />

            {listNotes.length > 0 ? (
              <ul>
              {listNotes.map((note) => {
                  const { title, message, id, category } = note
                  return (
                      <TodoCard
                          key={id}
                          id={id}
                          title={title}
                          message={message}
                          category={category}
                          removeNote={removeNote}
                      />
                  )

              })}
          </ul>
            ) : (
                <p className="paragraph">Crie sua primeira nota</p>
            )}
           
        </div>
    )
}