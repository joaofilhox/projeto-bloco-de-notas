import styles from "./style.module.scss"

export const NoteNumber = ({ listNotes }) => {

    const TotalChar = listNotes.reduce((prevValue, note) => {
        return prevValue + note.message.length + note.title.length
    }, 0)

    return (
        <div className={styles.numberBox}>
            <p className="paragraph">
                Notas: <span className="paragraph bold">{listNotes.length}</span> 
                Caracteres: <span className="paragraph bold">{TotalChar}</span>
            </p>
        </div>
    )
}