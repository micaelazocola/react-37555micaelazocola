import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper"; 
import ItemCount from "../ItemCount";

function ItemDetail ({course}) {

    let estadoCart = false 
    function handleAddToCart (){
    alert("agregaste al carrito")
}
    return (
        <FlexWrapper rows= {true}>
            <div className="main container">
                <h1>{course.title}</h1>
                <img src="{course.img}" alt="{course.title}" />
                <h3>$ {course.price}</h3>
            </div>
          
           {estadoCart === false?<ItemCount stock= {5} onAddToCart={handleAddToCart}/> : <button> Finalizar Compra</button>} 
        </FlexWrapper>
    )

}

export default ItemDetail