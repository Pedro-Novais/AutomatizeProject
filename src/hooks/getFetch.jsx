import { useEffect, useState } from "react"

function getFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

                if (!response.ok) {
                    setError(true)
                }

                const response_json = await response.json()

                setData(response_json)

            } catch (error) {
                setError(error)
            } finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { data, loading, error }
}

export default getFetch