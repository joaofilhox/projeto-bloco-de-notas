import { Header } from "../../components/Header"
import { TodoForm } from "../../components/TodoForm"
import { TodoList } from "../../components/TodoList"
import styles from "./style.module.scss"

export const HomePage = ({listNotes, addNote, removeNote}) => {
    return (
        <>
         <Header />
        <main className={styles.container}>
            <TodoForm addNote={addNote}/>
            <TodoList removeNote={removeNote} listNotes={listNotes} />
        </main>
        </>
       
    )
}