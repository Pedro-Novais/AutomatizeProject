async function deleteFetch(url, setLoading) {
    try {
        setLoading(true)
        const request = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })

        if (!request.ok) {
            console.error('Algum erro ocorreu')
        }

        const response = request.json()
        
        return response

    } catch (error) {
        console.error(error)
    } finally {
        setLoading(false)
    }
}

export default deleteFetch