function InputText({ placeholder, change, idInput, label, type, styleBox, valuePattern }) {
    return (
        <div className={styleBox}>
            <label htmlFor={idInput}>{label}</label>
            <input type={type} id={idInput} placeholder={placeholder} onChange={change}/>
        </div>
    )
}

export default InputText