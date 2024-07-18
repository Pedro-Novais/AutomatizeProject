import useDeleteFetch from "../../../hooks/deleteFetch";

import Buttons from "../../../components/buttons/Buttons";
import PopupInfo from "../../../components/PopupInfo";
import Ncards from "../../../components/cards/Ncards";
import InputText from "../../../components/InputText";
import InputChoose from "../../../components/inputRadio";

import { IoAddOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Popup({ popup, viewClose, dataPopup }) {

    const { data, loading, error, deleteUserFetch } = useDeleteFetch()

    const deleteUser = (url) => {
        deleteUserFetch(url)
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
                        />
                        <InputText
                            styleBox="boxInputsPopupIntern"
                            label="Email:"
                            type="email"
                            placeholder='Insira o email'

                        />

                        <InputChoose styleBox='boxInternRadio' type='radio' name='radiosAddMember' label='Nível:' />

                    </div>

                    <Buttons styleButton="btnTeamsAddMember" eventBtn={() => { console.log('adicionado') }}>
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

                    <Buttons styleButton="btnTeamsAddMember" eventBtn={() => { deleteUser(url) }}>
                        <FaTrash />
                    </Buttons>
                </Ncards>
            }
        </PopupInfo>
    )
}

export default Popup