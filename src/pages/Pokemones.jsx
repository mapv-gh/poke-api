import React, { useEffect, useState } from 'react'
import { getAllPokemon } from '../services/pokemon.service';
import CardPokemon from '../components/CardPokemon';
import '../sass/AppPokemones.scss'
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";
const Pokemones = () => {
    const [arrayPokemon, setArrayPokemon] = useState([])
    const [globalPokemon, setGlobalPokemon] = useState([])
    const [xPage, setXPage] = useState(1)
    const [search, setSearch] = useState('')
    async function getPokemons(){
        const limit = 15
        const xp = (xPage-1) * limit
        const data = await  getAllPokemon(xp,limit);
        setArrayPokemon(data.results)
    }
    useEffect(()=>{
        getPokemons();
        getGlobalPokemons();
        
    },[xPage])
    const getGlobalPokemons= async ()=>{
        const response = await getAllPokemon(0,1000);
        const promises = response.results.map((pokemon) =>{
            return pokemon;
        });
        const results = await Promise.all(promises)
        setGlobalPokemon(results)
    }
    const filterPokemons= search?.length > 0 
    ? globalPokemon?.filter((pokemon)=>pokemon?.name?.includes(search))
    : arrayPokemon;

    const obtenerSearch = (e)=>{
        const texto= e.toLowerCase();
        setSearch(texto)
        setXPage(1)
    }
    
    return (
        <>
            <div className='pokemon-container'>
                <section className='div_search'>
                    <div className='text_search'>Buscar</div>
                    <input className='search' onChange={(e)=>obtenerSearch(e.target.value)}/>
                </section>
                <section className='section_pagination'>
                    <div className='div_pagination'>
                        <span className='left_item' 
                        onClick={()=>{
                            if(xPage=== 1){
                                return console.log("primero ")
                            }else{
                                setXPage((prevState)=> prevState-1);
                            }
                        }}>
                             <HiChevronLeft />
                             {" "}
                        </span>
                        <span className='item'>{xPage}</span>
                        <span className='item'> DE </span>
                        <span className='item'>
                            {Math.round(globalPokemon?.length / 15)}
                        </span>
                        <span className='right_item'
                        onClick={()=>{
                            if(xPage=== 67){
                                return console.log("ultimo ")
                            }else{
                                setXPage((prevState)=> prevState+1);
                            }
                        }}> 
                            {" "}
                            <HiChevronRight />
                        </span>
                    </div>
                </section>
                <div className='pokemon-card'>
                    {filterPokemons.map((card, index) => {
                        return <CardPokemon key={index} card={card} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Pokemones
