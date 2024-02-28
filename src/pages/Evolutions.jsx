import React from 'react'
import {TiArrowLeftOutline, TiArrowRightOutline} from "react-icons/ti";
import Card from "../components/Card"
import Button from "../components/Button"
import '../sass/App.scss'
import { useState, useEffect } from "react";
import { getImages } from "../services/images.service";
import { getPokemonEvolutions } from "../services/evolution.service";

const Evolutions = () => {
   
    const [pokemonId,setPokemonId] = useState(1);
    const [pokemonEvolutions, setPokemonEvolutions]= useState([])

    async function getPokemon(chain,pokemonArray){
        if(chain.evolves_to.length === 0){
            const data = await getPokemonCard(chain.species.name)
            
            return [...pokemonArray,data]
        }
        return await getPokemon(chain.evolves_to[0],[...pokemonArray, await getPokemonCard(chain.species.name)])
    }

    async function getEvolutions(){
        const data = await getPokemonEvolutions(pokemonId)
        const array =await getPokemon(data.chain,[])
        setPokemonEvolutions(array)

    }   
    async function getPokemonCard(name){
        const pokemonEvoImg= await getPokemonImgs(name)
        return {name: name.toUpperCase(), image: pokemonEvoImg}

    }
    async function getPokemonImgs(name){
        const data = await getImages(name)
        return data.sprites.other['official-artwork'].front_default
    }

    useEffect(()=>{
        getEvolutions();
    },[pokemonId])

  function prevClick(){
    if(pokemonId>1){
        setPokemonId((prevState)=>prevState-1)
    }
  }
  function nextClick(){
      setPokemonId((prevState)=> prevState+1)
  }

  return (
    <>
      <div className="app-evolutions">
            <div className={`card-container card${pokemonEvolutions.length}`}>
                {pokemonEvolutions.map((pokemon) => <Card key={pokemon.name} name = {pokemon.name} img= {pokemon.image}/>)}
            </div>
            <div className="buttons-container">
                <Button 
                    icon= {<TiArrowLeftOutline />} 
                    handleClick= {prevClick}
                />
                <Button
                    icon={<TiArrowRightOutline />}
                    handleClick= {nextClick}
                />
            </div>
        </div>
    </>
  )
}

export default Evolutions
