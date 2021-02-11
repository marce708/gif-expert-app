

export const getGifs = async(categoria) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ggc7ABEpSLkhblL4OrO2d2fQjLgkH9k4&q=${encodeURI(categoria)}&limit=15`;
    const resp = await fetch(url);
    const { data } = await resp.json(); //data es desestructuracion del resp de Giphy
    
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}