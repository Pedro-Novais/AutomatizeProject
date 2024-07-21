import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { PopupGlobalContext } from "../../context/PopupGlobalContext"

import controllerPopup from "../../services/controllerPopup"
import getFetch from "../../hooks/getFetch"
import URL from "../../utils/enpoints"

import Popup from "../../components/popupGlobal/Popup"
import SendEmailUi from "../uiTypeServices/sendEmail/SendEmailUi"
import Loading from "../../components/loading/Loading"

import "./style.css"

function Project() {
    const { toogleActive, toogleMessage, toogleType } = useContext(PopupGlobalContext)

    const { id } = useParams()
    const navigate = useNavigate()

    const { data, loading, error } = getFetch(`${URL.project}/${id}`)

    const viewPopupGlobal = (msg, type) => {
        controllerPopup(msg, type, toogleActive, toogleMessage, toogleType)
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        viewPopupGlobal('Algum erro desconhcido ocorreu ao carregar sua automação!', 'error')
        return <><div>Erro:</div> <Popup /></>
    }

    if (data.length === 0) {
        navigate('/')
    }

    return (
        <>
            {
                data.type == 1 && <SendEmailUi data={data} />
            }
        </>
    )
}

export default Project