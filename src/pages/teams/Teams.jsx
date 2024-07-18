import { useState } from "react";

import getFetch from "../../hooks/getFetch";
import deleteFetch from "../../hooks/deleteFetch";
import Loading from "../../components/loading/Loading";

import Table from "./components/Table";
import Popup from "./components/Popup";
import Buttons from "../../components/buttons/Buttons";

import { IoMdInformationCircle } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

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
                <Table data={data} setPopup={setPopup} setDataPopup={setDataPopup} />
                <div className="containerButtons">
                    <Buttons styleButton="btnTeams" eventBtn={() => { setPopup('add') }}>
                        <IoAddOutline />
                        Adicionar
                    </Buttons>
                </div>
            </div>

            <div className="containerPopupTeams" style={{ display: popup ? 'flex' : 'none' }}>
                <Popup popup={popup} viewClose={viewClose} dataPopup={dataPopup} />
            </div>
        </>
    )
}

export default Teams