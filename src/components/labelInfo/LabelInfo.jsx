function LabelInfo({ label, info, addStyle }) {
    return (
        <div className={`boxTitleInfo ${addStyle}`}>
            <h4>{label}:</h4>
            <p>{info}</p>
        </div>
    )
}

export default LabelInfo