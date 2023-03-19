const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ca219d3c12msh6b4192730914a09p11cebcjsn49ce952dd1b5',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};



    const fetchData = async (type) => {
        const url = `https://youtube-v31.p.rapidapi.com${type}`
        const data = await fetch(url , options)
        const fetchedData = await data.json()
        // setData(fetchedData.items)
        return fetchedData.items
        // console.log(fetchedData.items)
    }
    export default fetchData