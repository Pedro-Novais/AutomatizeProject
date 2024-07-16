function AttachmentFile({ archive, styleBox, id }) {
    return (
        <div className={styleBox}>
            <label htmlFor={id}>
                Arquivo base:
                <input type="file" name={id} id={id} />
            </label>
        </div>
    )
}

export default AttachmentFile