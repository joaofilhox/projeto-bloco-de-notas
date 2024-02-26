import styles from "./style.module.scss"

export const TodoCard = ({ title, message, category, removeNote, id }) => {
  return (
    <div className={`
        ${styles.todoCard}
        ${category === "tarefas" ? styles.blue : styles.orange}
        `}>
      <h3 className="title two">{title}</h3>
      <p className="paragraph ">{message}</p>
      <p>{category}</p>
      <button onClick={() => removeNote(id)} className="btn small">Excluir</button>
    </div>
  )
}