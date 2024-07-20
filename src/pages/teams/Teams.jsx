import { useState, useEffect } from "react";

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

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const response = await fetch("http://localhost:5000/team");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error(error)
            setErro(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchUsers()
    }, []);

    const deleteUser = async (userId) => {
        const response = await fetch(`http://localhost:5000/team/${userId}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            console.error('Algum erro ocorreu')
        }
        setUsers(users.filter(user => user.id !== userId));
        setTypePopup(false)
    }

    const actionPopup = () => {
        setTypePopup(false)
        setUserPopup([])
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
                                infoUser={userPopup}
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