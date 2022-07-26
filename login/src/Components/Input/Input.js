import "./Input.styles.css"

function Input({type, text, placeholder, value, name, onChange}) {

    return (
        <input 
            onChange={onChange}
            className="input"
            type={type} 
            text={text}
            placeholder={placeholder}
            value={value}
            name={name}
            id={name}
        />
    )
}

export default Input