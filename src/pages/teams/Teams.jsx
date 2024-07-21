import { useState, useEffect, useContext } from "react";

import { PopupGlobalContext } from "../../context/PopupGlobalContext";

import getFetch from "../../services/get";
import postFetch from "../../services/post";
import deleteFetch from "../../services/delete";
import URL from "../../utils/enpoints";
import controllerPopup from "../../services/controllerPopup";

import Popup from "../../components/popupGlobal/Popup";
import Loading from "../../components/loading/Loading";
import Ntable from "./components/Ntable";
import PopupAdd from "./components/PopupAdd";
import PopupDel from "./components/PopupDel";
import PopupInfo from "../../components/PopupInfo";

import "./style.css"

function Teams() {
    const { toogleActive, toogleMessage, toogleType } = useContext(PopupGlobalContext)
    toogleActive(false)

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState(false)

    const [typePopup, setTypePopup] = useState(false)
    const [userPopup, setUserPopup] = useState([])

    const actionPopup = () => {
        setTypePopup(false)
        setUserPopup([])
    }

    const viewPopupGlobal = (msg, type) => {
        controllerPopup(msg, type, toogleActive, toogleMessage, toogleType)
    }

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await getFetch(URL.teams, setLoading)
                setUsers(response);

            } catch (error) {
                console.error(error)
            }
        }
        getInfo()
    }, [])

    const addUser = async (data) => {
        try {
            const response = await postFetch(URL.teams, data, setLoading)

            setUsers(prevUsers => [...prevUsers, response]);
            setTypePopup(false)

            viewPopupGlobal(`Email de confirmação enviado para ${data.email}`, 'info')

        } catch (error) {
            console.error(error)
        }
    }

    const deleteUser = async (userId, userName) => {
        try {
            const request = await deleteFetch(`${URL.teams}/${userId}`, setLoading)

            setUsers(users.filter(user => user.id !== userId));
            setTypePopup(false)

            viewPopupGlobal(`Usuário ${userName}, deletado com sucesso!`, 'info')

        } catch (error) {
            console.error(error)
        }
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <h2 className="titleHigh">Equipe</h2>
            <div className="containerTeam"
                style={
                    { opacity: typePopup && '.5', pointerEvents: typePopup && 'none' }
                }
            >
                <Ntable
                    setPopup={setTypePopup}
                    setDataPopup={setUserPopup}
                    infoTeam={users}
                />
            </div>
            <div className="containerPopupTeams" style={{ display: typePopup ? 'flex' : 'none' }}>
                <PopupInfo styleItem="containerPopupTeams">
                    {
                        typePopup == 'add' &&
                        <PopupAdd
                            actions={actionPopup}
                            addUser={addUser}
                            infoUser={users}
                            infoToUser={viewPopupGlobal}
                        />
                    }

                    {
                        typePopup == 'del' &&
                        <PopupDel
                            actions={actionPopup}
                            cleanUser={deleteUser}
                            infoUser={userPopup}
                        />
                    }
                </PopupInfo>
            </div>
            <Popup />
        </>
    )
}

export default Teams