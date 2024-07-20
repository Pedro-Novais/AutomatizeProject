import React from "react"
import { SideBarProvider } from "../context/SideBarContext"
import Header from "./layout/header/Header"
import Section from "./layout/section/Section"

import verifyToken from "../utils/verifyToken"

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
