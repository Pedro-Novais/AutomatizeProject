async function postFetch(url, data, setLoading){
    try {
        setLoading(true)
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(!request.ok){
            console.log(request)
            console.error('Algum erro ocorreu')
        }

        const response = await request.json()

        return response

    } catch (error) {
        console.error(error)
    }finally{
        setLoading(false)
    }
}

export default postFetch