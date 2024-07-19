import { useState } from "react";

import useDeleteFetch from "../../../hooks/deleteFetch";
import validateEmail from "../../../services/regexEmail";

import Buttons from "../../../components/buttons/Buttons";
import PopupInfo from "../../../components/PopupInfo";
import Ncards from "../../../components/cards/Ncards";
import InputText from "../../../components/InputText";
import InputChoose from "../../../components/inputRadio";

import { IoAddOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Popup({ popup, viewClose, dataPopup }) {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const { data, loading, error, deleteUserFetch } = useDeleteFetch()

    const deleteUser = (url) => {
        deleteUserFetch(url)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const btnVerifyCredentials = () => {

        if (!validateEmail(email)) {
            console.log('email incorreto')
            return false
        }

        console.log('Requisição relalizada com sucesso')
        return true
    }

    return (
        <PopupInfo styleItem="containerPopupTeams">

            {
                popup === 'add' &&
                <Ncards styleCard="cardPopup">
                    <FaX className="iconBackTeams" onClick={viewClose} />
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

                        {/* <InputChoose styleBox='boxInternRadio' type='radio' name='radiosAddMember' label='Nível:' /> */}

                    </div>

                    <Buttons
                        styleButton={email !== "" && name !== "" ? "btnTeamsAddMember" : "btnTeamsAddMember btnTeamsDisabled"}
                        eventBtn={btnVerifyCredentials}>
                        <IoAddOutline />
                        Adicionar
                    </Buttons>
                </Ncards>
            }

            {
                popup === 'del' &&
                <Ncards styleCard="cardPopup popupDelete">
                    <FaX className="iconBackTeams" onClick={viewClose} />
                    <p className="titleHigh">Deletar membro</p>
                    <div className="boxPopupDelete">
                        <p>{dataPopup.name}</p>
                    </div>

                    <Buttons styleButton="btnTeamsAddMember btnDeleteUser" eventBtn={() => { deleteUser(url) }}>
                        <FaTrash />
                    </Buttons>
                </Ncards>
            }
        </PopupInfo>
    )
}

export default Popup