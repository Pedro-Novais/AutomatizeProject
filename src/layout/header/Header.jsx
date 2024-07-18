import { useState, useRef } from "react";
import { useContext } from "react";
import { SideBarContext } from "../../context/SideBarContext";
import { FaBars } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import "./style.css"

function Header({ name }) {

    const { toogleOpen } = useContext(SideBarContext)

    name = name || "Nome Padrão"
    const [out, setOut] = useState(false)

    const contentToOut = () => {
        setOut(!out)
    }

    const signOut = () => { 
        console.log('saindo')
    }

    return (
        <header>
            <div className="boxRowInfoheader bars"> 
                <FaBars className="iconBar" onClick={toogleOpen}/>
                <h2>Automatize</h2>
            </div>
            <nav className={out ? 'navColor' : undefined} style={{top: out && '10px'}}>
                <div className="boxRowInfoheader user" onClick={contentToOut}>
                    <FaRegUser />
                    <p>{name}</p>
                </div>
                <div className="boxRowInfoheader user signOut" onClick={signOut} style={{ display: out && 'flex' }}>
                    <FaSignOutAlt />
                    <p>Sair</p>
                </div>
            </nav>
        </header>
    )
}

export default Header