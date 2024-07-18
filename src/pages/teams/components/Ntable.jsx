import Buttons from "../../../components/buttons/Buttons"
import { FaPlus } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


function Ntable({ infoTeam, setPopup, setDataPopup }) {
    console.log(infoTeam)
    return (
        <>
            <div className="containerTable">
                <table className="nTableTeam">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Nível</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            infoTeam.map((element, index) => (
                                <tr key={index}>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.level}</td>
                                    <td>
                                        <div className="boxButtonsActions">
                                            <FaInfoCircle style={{ opacity: '.4', pointerEvents: 'none' }} />
                                            <FaTrashAlt onClick={() => {
                                                setPopup('del')
                                                setDataPopup(element)
                                            }
                                            } />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Buttons styleButton="containerBtnAddUser" eventBtn={() => { setPopup('add') }}>
                <FaPlus />
            </ Buttons>
        </>
    )
}

export default Ntable