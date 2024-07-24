import { SideBarProvider } from "../context/SideBarContext"
import { PopupGlobalProvider } from "../context/PopupGlobalContext"
import Header from "./layout/header/Header"
import Section from "./layout/section/Section"

import verifyToken from "../utils/verifyToken"

function App() {
  // verifyToken()
  return (
    <PopupGlobalProvider>
      <SideBarProvider>
        <Header name={'Pedro Henrique'} />
        <Section />
      </SideBarProvider>
    </PopupGlobalProvider>
  )
}

export default App
