import styles from "./style.module.scss"

export const TextArea = ({ id, label, placeholder, value, setValue }) => {
    return (
        <div className={styles.textareaBox}>
            <label htmlFor={id}>{label}</label>
            <textarea
                name={id}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></textarea>
        </div>
    )
}