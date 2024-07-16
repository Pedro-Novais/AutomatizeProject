import { IoMdInformationCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

function Table({ data, setPopup, setDataPopup }) {
    return (
        <div className="tableTeams">
            <div className="headTableTeams">
                <div className="rowTable">
                    Nome
                </div>
                <div className="rowTable"
                    style={
                        { borderRight: 'solid 1px', borderLeft: 'solid 1px' }
                    }>
                    Email
                </div>
                <div className="rowTable"
                    style={
                        { borderRight: 'solid 1px' }
                    }>
                    Nível
                </div>
                <div className="rowTable">
                    Ações
                </div>
            </div>

            <div className="contentTableTeams">
                {data.map((element, index) => (
                    <div key={index} className="bodyTableTeams">
                        <div className="rowTable">
                            {element.name}
                        </div>
                        <div className="rowTable" style={
                            { borderRight: 'solid 1px', borderLeft: 'solid 1px' }
                        }>
                            {element.email}
                        </div>
                        <div className="rowTable" style={
                            { borderRight: 'solid 1px' }
                        }>
                            {element.level}
                        </div>
                        <div className="rowTable">
                            <div className="containerActionButton" >

                                <IoMdInformationCircle
                                    className="actionInfo"
                                    style={{ height: '26px', width: '26px', pointerEvents: 'none', opacity: '.3' }}
                                    onClick={() => {
                                        console.log('visualizar informações')
                                    }} />

                                <FaTrash
                                    style={{ pointerEvents: element.self && 'none', opacity: element.self && '.3' }}
                                    onClick={() => {
                                        setDataPopup(element)
                                        setPopup('del')
                                    }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Table