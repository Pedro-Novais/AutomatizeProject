import { PopupGlobalProvider } from "../context/PopupGlobalContext"
import ContainerLogin from "./login/ContainerLogin"

function Login() {
    return (
        <PopupGlobalProvider>
            <ContainerLogin />
        </PopupGlobalProvider>
    )
}

export default Login