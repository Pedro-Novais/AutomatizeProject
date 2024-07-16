import { useNavigate } from "react-router-dom";

import { FaPlay } from "react-icons/fa6";
import { FaRegClipboard } from "react-icons/fa6";

import Buttons from "../buttons/Buttons";
import "./style.css"

function Cards({ data, enableDescri}) {

    const navigate = useNavigate()

    const btn = () => {
        navigate(`/automations/${data.id}`)
    }

    const description = () => {
        enableDescri(data)
    }

    return (
        <div className="card">
            <p className="titleCard">{data.name}</p>
            <div className="contentCardintern">
                <p className="lineCard">Status: Ativo</p>
                <p className="lineCard">Último uso: 22/02/2022</p>
                <p className="lineCard">Criação: 21/01/2011</p>
                <p className="lineCard">Validade: 05/08/2015</p>
            </div>
            <div className="containerButtonsCard">
                <Buttons styleButton="buttonsCard" eventBtn={btn}>
                    <FaPlay /> <p>Play</p>
                </Buttons>
                <Buttons styleButton="buttonsCard" eventBtn={description}>
                    <FaRegClipboard /> <p>Descrição</p>
                </Buttons>
            </div>
        </div>
    )
}

export default Cards