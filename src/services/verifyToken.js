import { useNavigate } from "react-router-dom"

async function verifyToken() {
    
    const navigate = useNavigate()

    const request = await fetch("http://localhost:5000/stateToken")

    const responseJson = await request.json()

    if (!responseJson.token) {
        navigate("/login")
        return false
    }

    return true
}

export default verifyToken