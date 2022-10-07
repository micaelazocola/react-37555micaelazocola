import React, {useContext} from "react";
import ItemCount from "../ItemCount";
import { cartCtx } from "../../context/cartContext"

function ItemDetail ({item}) {
    const {addItem} = useContext(cartCtx)
     let estadoCart = false; 

function handleAddToCart (count){
   /*  alert (`agregaste: ${count}`) */
    addItem (item, count)
}
    return (
        <div>
            <div className="main container">
                <h1>{item.title}</h1>
                <img src={item.img} alt={item.title} />
                <h3>Cantidades en stock: {item.stock}</h3>
                <h3>$ {item.price}</h3>
            </div>
          
            {estadoCart === false? ( 
           <ItemCount stock= {item.stock} onAddToCart={handleAddToCart}/>
           ) : (
           <button> Finalizar Compra</button> )}  
            
        </div>
    )
}



export default ItemDetail