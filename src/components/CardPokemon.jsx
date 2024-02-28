import { useEffect, useState } from 'react'
import '../sass/CardPokemon.scss'
import { getPokemonById, getPokemonEspecies } from '../services/pokemon.service'

const CardPokemon = ({card}) => {
    const [itemPokemon, setItemPokemon] = useState([])
    const [especiePokemon, setEspeciePokemon] = useState([])
    useEffect(()=>{
        const dataPokemon = async()=>{
            const dataPokemon = await getPokemonById(card.name);
            setItemPokemon(dataPokemon);
        }
        dataPokemon()
        
    },[card])
    
    useEffect(() => {
    const especiePokemon = async()=>{
        const URL = card.url.split("/");
        const especiePokemon = await getPokemonEspecies(URL[6]);
        setEspeciePokemon(especiePokemon);
    }
        especiePokemon()
    },[card])
    let pokeId = especiePokemon?.id?.toString();
    if(pokeId?.length === 1){
        pokeId = "00"+pokeId;
    }else if(pokeId?.length === 2){
        pokeId = "0"+pokeId
    }
  return (
    <div className='card_pokemon'>
        <img className="card_pokemon_img" src={itemPokemon?.sprites?.other['official-artwork']?.front_default} alt='pokemon'/>
        <div className={`bg-${especiePokemon?.color?.name} card_pokemon_subcard`}>
            <strong className='card_pokemon_id color_id'>#{pokeId}</strong>
            <strong className='card_pokemon_name'>{card.name}</strong>
            <h4 className='card_pokemon_altura'>Altura: {itemPokemon.height} cm</h4>
            <h4 className='card_pokemon_peso'>Peso: {itemPokemon.weight} kg</h4>
            <h4 className='card_pokemon_habitat'>Habitat: {especiePokemon?.habitat?.name}</h4>
            <div className='div_stats'>
            {itemPokemon?.stats?.map((sta,index) =>{
                return <h6 key={index} className='item_stats'>
                    <span className='name'> {sta.stat.name}</span>  
                    <progress value={sta.base_stat} max={110}>
                    </progress>
                    <span className='numero'> {sta.base_stat}</span>  
                </h6>
                   
                })}
            </div>
            <div className='div_type_color'>
                {itemPokemon?.types?.map((ti, index) =>{
                    return <h6 key={index} className={`color-${ti.type.name} color_type`}>
                       {" "}
                       { ti.type.name.toUpperCase()}
                       {" "}
                    </h6>
                })}
            </div>
        </div>
        
    </div>
  )
}

export default CardPokemon
