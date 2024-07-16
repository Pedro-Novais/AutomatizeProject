import { useParams, useNavigate } from "react-router-dom"
import getFetch from "../../hooks/getFetch"

import SendEmailUi from "../uiTypeServices/sendEmail/SendEmailUi"
import Loading from "../../components/loading/Loading"
import "./style.css"

function Project() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data, loading, error } = getFetch(`http://localhost:5000/${id}`)

    if (loading) {
        return <Loading />
    }

    if (error) {
        console.log(error)
        return <div>Erro:</div>
    }

    if (data.length === 0) {
        navigate('/')
    }

    return (
        <>
            {
                data.type == 1 && <SendEmailUi data={data}/>
            }
        </>
    )
}

export default Project