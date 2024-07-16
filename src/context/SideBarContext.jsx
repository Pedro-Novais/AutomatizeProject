import React, { createContext, useState } from "react";

export const SideBarContext = createContext()

export const SideBarProvider = ({ children }) => {

    const [open, setOpen] = useState(false)

    const toogleOpen = () => {
        setOpen(!open)
    }

    return (
        <SideBarContext.Provider value={{ open, toogleOpen }}>
            {children}
        </SideBarContext.Provider>
    )
}