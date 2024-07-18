import getFetch from "../../hooks/getFetch"

import AnyRun from "./components/AnyRun"
import Running from "./components/Running"
import Loading from "../../components/loading/Loading"
import "./style.css"

function Run() {

    const { data, loading, error } = getFetch("http://localhost:5000/runningNow")

    if (loading) {
        return <Loading />
    }

    if (error) {
        console.log(error)
        return <div>Algo de errado ocorreu</div>
    }

    return (
        <>
            <h2 className="titleHigh">Acompanhamento</h2>

            <div className="containerRun">
                {data.running ? <Running emails={data}/> : <AnyRun />}
            </div>
        </>
    )
}

export default Run