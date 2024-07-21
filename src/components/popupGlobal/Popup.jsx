import { useContext } from "react"
import { PopupGlobalContext } from "../../context/PopupGlobalContext"

import "./style.css"

function Popup() {
    const { active, type, message } = useContext(PopupGlobalContext)
    
    return (
        <>
            {
                active &&
                <div className="popupGlobal" style={{ backgroundColor: type === 'error' ? '#c01717d3' : '#25c017d3' }}>
                    <p>{message}</p>
                </div>
            }
        </>
    )
}

export default Popup