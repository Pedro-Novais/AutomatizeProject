import SideBar from "./sideBar/SideBar"
import Content from "./content/Content"

import "./style.css"

function Section(){
    return (
        <div className="section">
            <SideBar />
            <Content>
            </Content>
        </div>
    )
}

export default Section