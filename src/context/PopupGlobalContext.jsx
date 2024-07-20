import { useState, createContext } from "react";

export const PopupGlobalContext = createContext()

export const PopupGlobalProvider = ({ children }) => {

    const [active, setActive] = useState(false)
    const [type, setType] = useState()
    const [message, setMessage] = useState('')

    const toogleActive = (status) => {
        setActive(status)
    }

    const toogleMessage = (msg) => {
        setMessage(msg)
    }

    const toogleType = (typeInfo) => {
        setType(typeInfo)
    }

    return (
        <PopupGlobalContext.Provider value={{ active, message, type, toogleActive, toogleMessage, toogleType }}>
            {children}
        </PopupGlobalContext.Provider>
    )
}