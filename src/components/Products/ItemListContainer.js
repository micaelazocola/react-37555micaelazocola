import React, {useState, useEffect} from "react";
import getItems from "../../services/mockAPI";
import Card from "./card";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";




function ItemListContainer () {
let [data, setData] = useState ([]); //ALERTA 
const {cat} = useParams()

useEffect (
    ()=> {
        console.log("use effect")
        getItems().then( (respuestaDatos) => {
        setData (respuestaDatos);
        });
    },
    []
)
    return (
        <div>
            <div className="main container">
                {data.map((item) => {

                    return (

                        <Card
                        key= {item.id}
                        id= {item.id}
                        price= {item.price}
                        title= {item.title}
                        img={item.img}
                        detail= {item.detail}
                        stock= {item.stock}
                        />

                    )
                })}
                {/* <ItemList data={data}/> */}
            </div>
        </div>    
       
        
    
    
    )
}



export default ItemListContainer;