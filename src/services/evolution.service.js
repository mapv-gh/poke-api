export async function getPokemonEvolutions(id){
    const response= await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
        return await response.json()
}