import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    //const categorias = [ 'One Punch', 'Samurai X', 'Dragon Ball' ];
    const [categorias, setCategorias] = useState(['Dragon Ball']);
    //const handleAdd = ()=>{
    //    setCategorias([...categorias,'nuevoValor'])
    //}2
    //
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}></AddCategory>
            <hr/> 
            
            <ol>
            {   categorias.map( categoria =>
                    //return <li key={ cate }> { cate } </li>
                    <GifGrid key={categoria} categoria={categoria}></GifGrid>
                )
            }
            </ol>
    
        </div>
    )
}
