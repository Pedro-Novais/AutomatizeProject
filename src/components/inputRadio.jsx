function InputChoose({ type, name, value, label, styleBox, qty }) {
    return (
        <div className={styleBox}>
            <label>
                {label}
            </label>
                <input type={type} name={name} value={value} /> Baixo
                <input type={type} name={name} value={value} checked/> Médio
                <input type={type} name={name} value={value} checked/> Alto

            
        </div>
    )
}

export default InputChoose