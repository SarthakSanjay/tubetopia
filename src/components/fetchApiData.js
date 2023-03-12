const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ca219d3c12msh6b4192730914a09p11cebcjsn49ce952dd1b5',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};



    const fetchData = async () => {
        const url = "https://youtube-v31.p.rapidapi.com/search?q=trending&part=snippet%2Cid&regionCode=US&maxResults=50&order=date"
        const data = await fetch(url , options)
        const fetchedData = await data.json()
        setData(fetchedData.items)
        // console.log(fetchedData.items)
    }