import Buttons from "../../../components/buttons/Buttons";
import Ncards from "../../../components/cards/Ncards";

import { FaTrash } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function PopupDel({ actions, infoUser, cleanUser }) {
    const deleteUser = (id) => {
        cleanUser(id)
    }
    return (
        <Ncards styleCard="cardPopup popupDelete">
            <FaX className="iconBackTeams"
                onClick={actions}
            />
            <p className="titleHigh">Deletar membro</p>
            <div className="boxPopupDelete">
                <p>{infoUser.name}</p>
            </div>

            <Buttons styleButton="btnTeamsAddMember btnDeleteUser"
                eventBtn={() => {
                    deleteUser(`http://localhost:5000/team/${infoUser.id}`, infoUser.id)
                }}
            >
                <FaTrash />
            </Buttons>
        </Ncards>
    )
}

export default PopupDel