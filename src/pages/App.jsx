import React from "react"
import getFetch from "../hooks/getFetch"
import { SideBarProvider } from "../context/SideBarContext"
import Header from "./layout/header/Header"
import Section from "./layout/section/Section"

import verifyToken from "../services/verifyToken"

function App() {
  verifyToken()
  return (

    <SideBarProvider>
      <Header name={'Pedro Henrique'} />
      <Section />
    </SideBarProvider>

  )
}

export default App
