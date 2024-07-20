async function postFetch(url, data){
    try {
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
    }
}

export default postFetch