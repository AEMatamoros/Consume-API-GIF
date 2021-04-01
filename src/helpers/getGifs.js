const getGifs = async (category) =>{
    const API_URL  = `api.giphy.com/v1/gifs/search`
    const api_key  = 'yPjOb6dQt00AfmeD73bIhKkGwDMkGoJw'
    const query = encodeURI(category);
    const limit=10
    const end_point = `https://${API_URL}?api_key=${api_key}&q=${query}&limit=${limit}`
    
    const resp = await fetch(end_point)
    const {data} = await resp.json();

    const gifs = data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            img:img.images.downsized_medium
        }
    })

    return gifs;
}

export default getGifs;