import { useState, useContext } from "react"

import { PopupGlobalContext } from "../../context/PopupGlobalContext";

import getFetch from "../../hooks/getFetch"
import controllerPopup from "../../services/controllerPopup";
import URL from "../../utils/enpoints";

import Popup from "../../components/popupGlobal/Popup";
import Cards from "../../components/cards/Cards"
import Loading from "../../components/loading/Loading"
import { FaX } from "react-icons/fa6";
import "./style.css"
import { BiBorderBottom } from "react-icons/bi";

function Automations() {
    const { toogleActive, toogleMessage, toogleType } = useContext(PopupGlobalContext)

    const [descrEnable, setDescrEnable] = useState(false)

    const { data, error, loading } = getFetch(URL.automation)

    const openDescr = (info) => {
        setDescrEnable(info)
    }
    const closeDescr = () => {
        setDescrEnable(false)
    }

    const viewPopupGlobal = (msg, type) => {
        controllerPopup(msg, type, toogleActive, toogleMessage, toogleType)
    }

    if (loading) {
        return <Loading />
    }
    if (error) {

        viewPopupGlobal('Algum erro desconhcido ocorreu ao carregar suas automações!', 'error')
        return <> <div>erro</div> <Popup /></>
    }

    return (
        <>
            <h2 className="titleHigh">Automações</h2>
            <div className="containerCards"
                style={{ opacity: descrEnable && '.5', pointerEvents: descrEnable && 'none', borderBottom: data.length < 3 && 'solid 10px' }}
            >
                <div className="boxCards"
                    style={{ justifyContent: data.length > 3 && 'flex-start' }}
                >
                    {
                        data.map((element, index) => (
                            <Cards
                                key={index}
                                data={element}
                                enableDescri={openDescr}
                                moreSize={data.length < 3 && true}
                            />
                        ))
                    }
                </div>
            </div>

            {
                descrEnable &&
                <div className="containerInfoCard">
                    <FaX onClick={closeDescr} />
                    <h3>{descrEnable.name}</h3>
                    <div className="contentInfoCard">
                        <div className="boxAboutCard">
                            <p className="titleBoxinfoCard">Serviço</p>
                            <div className="infosDetails">
                                <div className="boxTitleInfo">
                                    <h4>Status:</h4>
                                    <p>{descrEnable.status}</p>
                                </div>
                                <div className="boxTitleInfo">
                                    <h4>Tipo:</h4>
                                    <p>{descrEnable.type}</p>
                                </div>
                                <div className="boxTitleInfo">
                                    <h4>Arquivo de anexo:</h4>
                                    <p>{descrEnable.archiveBase === null ? "-" : descrEnable.archiveBase}</p>
                                </div>
                                <div className="boxTitleInfo">
                                    <h4>Início de operação:</h4>
                                    <p>{descrEnable.dateCreated}</p>
                                </div>
                                <div className="boxTitleInfo">
                                    <h4>Renovação de operação:</h4>
                                    <p>{descrEnable.dateValidated}</p>
                                </div>
                            </div>
                        </div>
                        <div className="boxAboutCard">
                            <p className="titleBoxinfoCard">Detalhes</p>
                            <div className="infosDetails">
                                <div className="boxTitleInfo">
                                    <h4>Quantidade total de uso:</h4>
                                    <p>{descrEnable.qtyAllRun}</p>
                                </div>
                                <div className="boxTitleInfo">
                                    <h4>Uso médio diário:</h4>
                                    <p>{descrEnable.mediaSucess}</p>
                                </div>
                                <div className="boxTitleInfo">
                                    <h4>Último uso:</h4>
                                    <p>{descrEnable.lastRun}</p>
                                </div>
                                <div className="boxTitleInfo">
                                    <h4>Média de sucesso:</h4>
                                    <p>{descrEnable.mediaSucess}</p>
                                </div>
                                <div className="boxTitleInfo">
                                    <h4>Erros:</h4>
                                    <p>{descrEnable.qtyErrors}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default Automations