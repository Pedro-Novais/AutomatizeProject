import { useState, useEffect } from "react";

import getFetch from "../../services/get";
import postFetch from "../../services/post";
import deleteFetch from "../../services/delete";
import URL from "../../utils/enpoints";

import Loading from "../../components/loading/Loading";
import Ntable from "./components/Ntable";
import PopupAdd from "./components/PopupAdd";
import PopupDel from "./components/PopupDel";
import PopupInfo from "../../components/PopupInfo";

import "./style.css"

function Teams() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState(false)

    const [typePopup, setTypePopup] = useState(false)
    const [userPopup, setUserPopup] = useState([])

    const actionPopup = () => {
        setTypePopup(false)
        setUserPopup([])
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

        } catch (error) {
            console.error(error)
        }
    }

    const deleteUser = async (userId) => {
        try {

            const request = await deleteFetch(`${URL.teams}/${userId}`, setLoading)

            setUsers(users.filter(user => user.id !== userId));
            setTypePopup(false)
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
                    infoTeam={users}
                    setPopup={setTypePopup}
                    setDataPopup={setUserPopup}
                />
            </div>
            <div className="containerPopupTeams" style={{ display: typePopup ? 'flex' : 'none' }}>
                <PopupInfo styleItem="containerPopupTeams">
                    {
                        typePopup == 'add' &&
                        <PopupAdd
                            actions={actionPopup}
                            infoUser={users}
                            addUser={addUser}
                        />
                    }

                    {
                        typePopup == 'del' &&
                        <PopupDel
                            actions={actionPopup}
                            infoUser={userPopup}
                            cleanUser={deleteUser}
                        />
                    }
                </PopupInfo>
            </div>
        </>
    )
}

export default Teams