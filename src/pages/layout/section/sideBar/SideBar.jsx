import { Link } from "react-router-dom"
import { useState, useContext, useRef } from "react"

import { SideBarContext } from "../../../../context/SideBarContext"

import { GoGraph } from "react-icons/go";
import { GrConfigure } from "react-icons/gr";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";

import "./style.css"

function SideBar() {
    const { open } = useContext(SideBarContext)

    const elementRef = useRef(null)

    const closeBar = () => {
        if (!open) {
            // elementRef.current.style.display = 'none'
            elementRef.current.style.width = '10%'
        }
    }

    return (
        <div ref={elementRef}
            onAnimationEnd={closeBar}
            className="sideBar"
            style={{ animation: !open ? 'closeBar .2s ease' : 'openBar .2s ease', width: !open && '10%' }}>
            <div className="containerSideBar">
                <div className="boxLink">
                    <ul>
                        <Link to="/">
                            <li>
                                {
                                    !open ? <GoGraph /> : 'Acompanhamento'
                                }
                            </li>
                        </Link>
                        <Link to="/automations">
                            <li>
                                {
                                    !open ? <MdOutlineAutoFixHigh /> : 'Automações'
                                }
                            </li>
                        </Link>
                        <Link to="/teams">
                            <li>
                                {
                                    !open ? <IoPeopleSharp /> : 'Equipe'
                                }
                            </li>
                        </Link>
                        <Link to="/support">
                            <li>
                                {
                                    !open ? <GrConfigure /> : 'Suporte'
                                }
                            </li>
                        </Link>
                    </ul>
                </div>
                {open && <p> &copy; New Station 2024</p>}
            </div>
        </div>
    )
}

export default SideBar