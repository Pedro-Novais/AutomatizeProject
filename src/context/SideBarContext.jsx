import React, { createContext, useState } from "react";

export const SideBarContext = createContext()

export const SideBarProvider = ({ children }) => {

    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')

    const toogleOpen = () => {
        setOpen(!open)
    }

    const toogleName = (name) => {
        setName(name)
    }

    return (
        <SideBarContext.Provider value={{ open, toogleOpen, name, toogleName }}>
            {children}
        </SideBarContext.Provider>
    )
}