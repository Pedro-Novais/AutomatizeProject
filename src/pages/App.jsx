import React from "react"
import { SideBarProvider } from "../context/SideBarContext"
import Header from "../layout/header/Header"
import Section from "../layout/section/Section"

function App() {

  return (
    
    <SideBarProvider>
      <Header name={'Pedro Henrique'} />
      <Section />
    </SideBarProvider>
    
  )
}

export default App
