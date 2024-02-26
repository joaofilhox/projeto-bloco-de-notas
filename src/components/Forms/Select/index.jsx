import style from "./style.module.scss"

export const Select = ({ children, label, id, value, setValue }) => {
    return (
        <div className={style.selectBox}>
            <label className="paragraph" htmlFor={id}>
                {label}
            </label>
            <select
                name={id}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {children}
            </select>
        </div>
    )
}