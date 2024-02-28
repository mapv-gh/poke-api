export async function getAllPokemon(xp,limit){
    const response= await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${xp}&limit=${limit}`)
        return await response.json()
}
export async function getPokemonById(name){
    const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        return await response.json()
}
export async function getPokemonEspecies(id){
    const response= await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        return await response.json()
}
