import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoria ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( categoria )
        .then(imgs => {
                setState({
                    data:imgs,
                    loading:false
                });
       
        });
    }, [categoria]);
    

    return state; //OJO: STATE en este caso es lo que tiene entre parentesis
                    // useState(), osea el objeto data y loadind
}