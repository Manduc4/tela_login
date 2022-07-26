import "./Button.styles.css"

function Button({text,onClick,name}) {
    return (
            <button className={name} id={name} onClick={onClick}>{text}</button>
    )
}

export default Button