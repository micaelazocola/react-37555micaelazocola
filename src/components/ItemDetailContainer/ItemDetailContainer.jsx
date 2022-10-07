import React, {useState, useEffect} from "react";
import { getSingleItem } from "../../services/mockAPI";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer () {
    let [data, setData] = useState ({}); //ALERTA 
    const {id} = useParams();

useEffect (
    ()=> {
        
        getSingleItem(id).then((respuestaDatos) => {
        setData (respuestaDatos);
        });
    },
    []
)


    return (
        <div>
            
            <ItemDetail item={data}/>


                {/* <h1>{data.title}</h1>
                <h1>{data.price}</h1>
                <h1>Stock:{data.stock}</h1>
                <h1>Categoria:{data.category}</h1>
                <img scr={data.img} alt= {data.title}/>
                <button> Agregar al carrito</button>
                 */}
                
            
        </div>    
       
        
    
    
    )
}


export default ItemDetailContainer