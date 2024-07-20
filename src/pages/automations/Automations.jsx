import { useState } from "react"

import getFetch from "../../hooks/getFetch"
import URL from "../../utils/enpoints";

import Popup from "../../components/popupGlobal/Popup";
import Cards from "../../components/cards/Cards"
import Loading from "../../components/loading/Loading"
import { FaX } from "react-icons/fa6";
import "./style.css"

function Automations() {

    const [descrEnable, setDescrEnable] = useState(false)

    const openDescr = (info) => {
        setDescrEnable(info)
    }
    const closeDescr = () => {
        setDescrEnable(false)
    }

    const { data, error, loading } = getFetch(URL.automation)

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <div>erro {error}</div>
    }

    return (
        <>
            <h2 className="titleHigh">Automações</h2>
            <div className="containerCards"
                style={{ opacity: descrEnable && '.5', pointerEvents: descrEnable && 'none' }}
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