async function postFetch(url, data, setLoading) {
    try {
        setLoading(true)
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const response = await request.json()

        // if (!request.ok) {
        //     if (request.status == 404 || response.status == 400) {
        //         return { response, msg: 'Credenciais inválidas!', status: response.status, ok: false }
        //     }
        //     console.error('Algum erro ocorreu')
        //     return { response, msg: 'Algum erro desconhecido ocorreu!', status: 500, ok: false }
        // }

        return { response, status: request.status, ok: request.ok }

    } catch (error) {
        console.error(error)
    } finally {
        setLoading(false)
    }
}

export default postFetch