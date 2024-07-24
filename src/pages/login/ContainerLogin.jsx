import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { PopupGlobalContext } from "../../context/PopupGlobalContext"

import postFetch from "../../services/post";
import URL from "../../utils/enpoints";
import controllerPopup from "../../services/controllerPopup";

import Loading from "../../components/loading/Loading";
import validateEmail from "../../utils/regexEmail";
import Popup from "../../components/popupGlobal/Popup"
import InputText from "../../components/InputText"
import Buttons from "../../components/buttons/Buttons"
import "./style.css"

function ContainerLogin() {
    const { toogleActive, toogleMessage, toogleType } = useContext(PopupGlobalContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const viewPopupGlobal = (msg, type) => {
        controllerPopup(msg, type, toogleActive, toogleMessage, toogleType)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const verifyCredential = () => {

        if (!validateEmail(email)) {
            viewPopupGlobal('Email digitado, invalído!', 'error')
            return false
        }

        const data = {
            email: email,
            password: password
        }

        makeLogin(data)
    }

    const makeLogin = async (data) => {
        const response = await postFetch(URL.login, data, setLoading)

        if (!response.ok) {
            if (response.status == 404) {
                viewPopupGlobal('Credenciais Inválidas!', 'error')
                return false
            }
            else if (response.status == 500) {
                viewPopupGlobal('Algum erro desconhecido ocorreu!', 'error')
                return false
            }
        }

        localStorage.setItem('token', response.token)
        viewPopupGlobal('Login realizado com sucesso!', 'info')
        setTimeout(() => navigate('/automations'), 1000)
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <header>
                <h2 style={{ margin: 'auto' }}>Automatize</h2>
            </header>
            <div className="containerLogin">
                <div className="boxLogin">
                    <h2>Entrar</h2>
                    <div className="boxInputsLogin">
                        <InputText
                            styleBox='boxInputs'
                            idInput='emailLogin'
                            label='Email:'
                            type='email'
                            placeholder='Digite seu email'
                            change={handleEmailChange}
                        />

                        <InputText
                            styleBox='boxInputs'
                            idInput='emailLogin'
                            label='Senha:'
                            type='password'
                            placeholder='Digite sua senha'
                            change={handlePasswordChange}
                        />
                    </div>

                    <Buttons
                        styleButton={email !== "" && password !== "" ? "btnTeamsAddMember" : "btnTeamsAddMember btnTeamsDisabled"}
                        eventBtn={verifyCredential}
                    >
                        Entrar
                    </Buttons>
                </div>
                <Popup />
            </div>
        </>
    )
}

export default ContainerLogin