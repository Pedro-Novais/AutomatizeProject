function controllerPopup(message, type, setActive, setMessage, setType) {
    setActive(true)
    setType(type)
    setMessage(message)

    setTimeout(() => {
        setActive(false)
    }, 10000)
}

export default controllerPopup