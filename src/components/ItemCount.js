import React, {useState} from "react";



function ItemCount ({stock, onAddToCart}) {
    const [count, setCount] = useState (1);
    

    function handleAdd (){
        if (count < stock) {setCount(count + 1);}
        //setCount(count+1)
    }
    function handleSubstract (){
        if (count > 1) {setCount(count - 1);}
        //setCount(count-1)
    }
/*     function onAddToCart(){
        alert ("agregaste al carro")
    } */
    return (
    <div className="itemcount-container">
        <button className="buttonAdd" onClick={handleSubstract}> - </button>
        <span className="spanCount"> {count}</span>
        <button className="buttonSub" onClick={handleAdd}> + </button>
        <button className="buttonCart" onClick={() => onAddToCart(count)}> AGREGAR AL CARRITO</button>
    </div>


)
}

export default ItemCount;