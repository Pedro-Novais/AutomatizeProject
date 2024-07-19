import { Outlet } from "react-router-dom"
import "./style.css"

function Content() {
    return (
        <main className="content">
            <div className="contentIntern">
                <Outlet />
            </div>
        </main>
    )
}

export default Content