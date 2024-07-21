import { useContext } from "react"

import { PopupGlobalContext } from "../../context/PopupGlobalContext"

import controllerPopup from "../../services/controllerPopup"
import getFetch from "../../hooks/getFetch"
import URL from "../../utils/enpoints"

import Popup from "../../components/popupGlobal/Popup"
import AnyRun from "./components/AnyRun"
import Running from "./components/Running"
import Loading from "../../components/loading/Loading"
import "./style.css"

function Run() {
    const { toogleActive, toogleMessage, toogleType } = useContext(PopupGlobalContext)
    toogleActive(false)

    const { data, loading, error } = getFetch(URL.running)

    const viewPopupGlobal = (msg, type) => {
        controllerPopup(msg, type, toogleActive, toogleMessage, toogleType)
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        viewPopupGlobal('Algum erro desconhcido ocorreu ao carregar sua automação!', 'error')
        return <><div>Algo de errado ocorreu</div> <Popup /></>
    }

    return (
        <>
            <h2 className="titleHigh">Acompanhamento</h2>

            <div className="containerRun">
                {data.running ? <Running emails={data} /> : <AnyRun />}
            </div>
            <Popup />
        </>
    )
}

export default Run