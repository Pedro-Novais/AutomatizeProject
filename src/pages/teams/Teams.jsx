import { useState } from "react";

import getFetch from "../../hooks/getFetch";
import Loading from "../../components/loading/Loading";

import Ntable from "./components/Ntable";
import Popup from "./components/Popup";

import { IoAddOutline } from "react-icons/io5";

import "./style.css"

function Teams() {
    const [popup, setPopup] = useState(false)
    const [dataPopup, setDataPopup] = useState([])

    const { data, loading, error } = getFetch("http://localhost:5000/team")


    if (loading) {
        return <Loading />
    }

    if (error) {
        return <div>some error ocorreu</div>
    }

    const viewClose = () => {
        setPopup(false)
        setDataPopup([])
    }


    return (
        <>
            <h2 className="titleHigh">Equipe</h2>
            <div className="containerTeam" style={{ opacity: popup && '.5', pointerEvents: popup && 'none' }}>
                <Ntable infoTeam={data} setPopup={setPopup} setDataPopup={setDataPopup} />
            </div>
            <div className="containerPopupTeams" style={{ display: popup ? 'flex' : 'none' }}>
                <Popup popup={popup} viewClose={viewClose} dataPopup={dataPopup} />
            </div>
        </>
    )
}

export default Teams