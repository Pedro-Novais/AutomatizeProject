import { IoMdInformationCircle } from "react-icons/io";

function AnyRun() {
    return (
        <div className="boxAnyAutomation">
            <div className="miniBoxAnyAutomation">
                <IoMdInformationCircle />
                <p>Você não possui nenhuma automação sendo executada</p>
            </div>
        </div>
    )
}

export default AnyRun