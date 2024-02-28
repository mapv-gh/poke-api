export async function getImages(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    return await response.json()
}
