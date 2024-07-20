import { useState } from "react";

import validateEmail from "../../../utils/regexEmail";

import Buttons from "../../../components/buttons/Buttons";
import Ncards from "../../../components/cards/Ncards";
import InputText from "../../../components/InputText";

import { FaX } from "react-icons/fa6";

function PopupAdd({ actions, addUser, infoToUser }) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const btnVerifyCredentials = () => {

        if (!validateEmail(email)) {
            infoToUser('Email digitado não é valído!', 'error')
            return false
        }

        const data = {
            name: name,
            email: email,
            level: "Low",
            self: false
        }

        addUser(data)
    }

    return (
        <Ncards styleCard="cardPopup">
            <FaX className="iconBackTeams" onClick={actions} />
            <p className="titleHigh">Adicionar membro</p>

            <div className="boxInputsPopupTeams">
                <InputText
                    styleBox="boxInputsPopupIntern"
                    label="Nome:"
                    type="text"
                    placeholder='Insira o nome'
                    change={handleNameChange}
                />
                <InputText
                    styleBox="boxInputsPopupIntern"
                    label="Email:"
                    type="email"
                    placeholder='Insira o email'
                    change={handleEmailChange}
                />

            </div>

            <Buttons
                styleButton={email !== "" && name !== "" ? "btnTeamsAddMember" : "btnTeamsAddMember btnTeamsDisabled"}
                eventBtn={btnVerifyCredentials}>
                Adicionar
            </Buttons>
        </Ncards>
    )
}

export default PopupAdd