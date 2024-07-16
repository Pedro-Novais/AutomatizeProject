import { useState, useCallback } from 'react'

function useDeleteFetch() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const deleteUserFetch = useCallback(async (url) => {
        try {
            setLoading(true)

            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                setError(true)
            }
            console.log(response)
            const response_json = await response.json()

            setData(response_json)

        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])

    return { data, loading, error, deleteUserFetch }

}

export default useDeleteFetch