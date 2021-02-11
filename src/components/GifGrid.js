import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria}) => {
    /*
    useEffect( () => {
        getGifs(categoria)
            .then(imgs => setImages(imgs));
                         //then(setImages); esta linea es la misma que la de arriba,
                         //es otra forma de escribir mas resumida.
    }, [categoria] );
        // pongo CATEGORIA como DEPENDENCIA por si llegara a cambiar su valor.
        //En mi ejemplo no lo va a hacer, pero react me advierte de la posibilidad. 
    */
   
    const { data: images , loading } = useFetchGifs(categoria);

    return (  
        <>
        <h3 className="animate__animated animate__fadeIn">{ categoria } </h3>
        { loading && <p className="animate__animated animate__flash">Loading</p> }
        <div className="card-grid">
            
            {   images.map( img => (
                    <GifGridItem 
                        key={ img.id } 
                        {...img}
                    /> 
                ))
            }

        </div>
        </>
    )
}
