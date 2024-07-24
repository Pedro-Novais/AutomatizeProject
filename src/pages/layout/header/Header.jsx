import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SideBarContext } from "../../../context/SideBarContext";

import { FaBars } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

import "./style.css"

function Header({ name }) {

    const { toogleOpen } = useContext(SideBarContext)

    name = name || "Nome Padrão"
    const [out, setOut] = useState(false)

    const navigate = useNavigate()
    
    const contentToOut = () => {
        setOut(!out)
    }

    const switchPassword = () => {
        console.log('trocar senha')
    }

    const signOut = () => {
        localStorage.clear('token')
        navigate('/login')
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
                <div className="boxRowInfoheader user signOut" onClick={switchPassword} style={{ display: out && 'flex' }}>
                    <GrUpdate />
                    <p>Trocar senha</p>
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