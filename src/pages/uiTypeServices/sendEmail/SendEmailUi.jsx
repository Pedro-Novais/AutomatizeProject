import { useState } from "react"

import verifyInputs from "../../../services/verifyInputs"

import Ncards from "../../../components/cards/Ncards"
import AttachmentFile from "../../../components/AttachmentFile"
import InputText from "../../../components/InputText"
import InputChoose from "../../../components/inputRadio"
import Buttons from "../../../components/buttons/Buttons"

import { FaRegIdCard, FaPlay, FaReply } from "react-icons/fa6";
import "./style.css"

function SendEmailUi({ data }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const verifyInputData = () => {
        verifyInputs(email, password)
    }

    console.log(data)

    return (
        <>
            <h2 className="titleHigh">{data.name}</h2>
            <div className="containerProject">
                <Ncards styleCard="boxConfigOptions">

                    <p className="titleCard" style={{ fontSize: '1.2rem' }}>Credenciais</p>

                    <div className="boxInputsInfos">
                        <InputText
                            styleBox="boxInputs"
                            type="email"
                            placeholder="Digite seu email"
                            idInput="infoEmail"
                            label="Email:"
                            change={handleEmailChange}
                        />

                        <InputText
                            styleBox="boxInputs"
                            type="password"
                            placeholder="Digite sua senha"
                            idInput="infoPassword"
                            label="Senha:"
                            change={handlePasswordChange}
                        />
                    </div>

                    <Buttons styleButton="btnVerifyCredentials" eventBtn={verifyInputData}>
                        <FaRegIdCard />
                        Verificar credenciais
                    </Buttons>
                </Ncards>

                <Ncards styleCard="boxConfigOptions">
                    <p className="titleCard" style={{ fontSize: '1.2rem' }}>Detalhes do envio</p>

                    <div className="boxInputsInfos">
                        <AttachmentFile styleBox="attachment" id="fileUploaded"/>
                        {/* <InputChoose label="Deseja acompanhar o envio:" type="radio" styleBox="radios" name="detailOne"/>
                        <InputChoose label="Em caso de erro, deseja que a automação pare?:" type="radio" styleBox="radios" name="detailOne"/> */}

                        <div className="infoBase">
                        <p>
                            Ao realizar o start da sua automação, será possível acompanha-la na aba <strong>Acompanhamento</strong>,
                            com os processos sendo atualizados em tempo real, caso haja alguma dúvida, realize contato com o nosso suporte!

                        </p>
                        </div>
                    </div>

                    <Buttons styleButton="btnVerifyCredentials" eventBtn={verifyInputData}>
                        <FaPlay />
                        Enviar
                    </Buttons>
                </Ncards>
            </div>
        </>
    )
}

export default SendEmailUi