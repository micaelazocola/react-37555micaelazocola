import React, {useState, useEffect} from "react";
import { getSingleItem } from "../../services/mockAPI";

function ItemDetailContainer () {
    let [data, setData] = useState ({}); //ALERTA 


useEffect (
    ()=> {
        console.log("use effect")
        getSingleItem().then( (respuestaDatos) => {
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
                
                
            </div>
        </div>    
       
        
    
    
    )
}


export default ItemDetailContainer