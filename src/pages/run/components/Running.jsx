import LabelInfo from "../../../components/labelInfo/LabelInfo"

function Running({ emails }) {
    const email = emails.emailSended
    const infos = emails.infos
    return (
        <div className="boxAnyAutomation">
            <div className="containerInfoAutomatioRun">
                <h3>Informações</h3>
                <div className="contentBoxInfoAutomation emailSend">
                    <LabelInfo label={'Automação'} info={infos.execution} addStyle={"emailSendedText"} />
                    <LabelInfo label={'Nome'} info={infos.name} addStyle={"emailSendedText"} />
                    <LabelInfo label={'Status'} info={infos.status} addStyle={"emailSendedText"} />
                    <LabelInfo label={'Tipo'} info={infos.type} addStyle={"emailSendedText"} />
                    <LabelInfo label={'Arquivo'} info={infos.archiveBase} addStyle={"emailSendedText"} />
                    <LabelInfo label={'Data de criação'} info={infos.dateCreated} addStyle={"emailSendedText"} />
                    <LabelInfo label={'Último uso'} info={infos.lastRun} addStyle={"emailSendedText"} />
                    <LabelInfo label={'Uso Médio'} info={infos.mediaRun} addStyle={"emailSendedText"} />
                    <LabelInfo label={'Uso total'} info={infos.qtyAllRun} addStyle={"emailSendedText"} />

                </div>
            </div>
            <div className="containerInfoAutomatioRun">
                <div className="infoUpdatedRelatial">{emails.qtySended}/{emails.qtyTotal}</div>
                <h3>Emails enviado</h3>
                <div className="contentBoxInfoAutomation emailSend">
                    {
                        email.map((element, index) => (
                            <LabelInfo key={index} label={'Enviado'} info={element} addStyle={"emailSendedText"} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Running