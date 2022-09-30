import React, {useState, useEffect} from "react";
import { getSingleItem } from "../../services/mockAPI";
import {useParams} from "react-router-dom";

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
            <div className="main container">
                
                <h1>{data.title}</h1>
                <h1>{data.price}</h1>
                <h1>Stock:{data.stock}</h1>
                <h1>Categoria:{data.category}</h1>
                <img scr={data.img} alt= {data.title}/>
                
                
            </div>
        </div>    
       
        
    
    
    )
}


export default ItemDetailContainer