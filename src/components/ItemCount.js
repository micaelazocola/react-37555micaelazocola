import React, {useState} from "react";

function ItemCount (props) {
    const [count, setCount] = useState (props.initial);
    console.log ("stock:", props.stock)

    function handleAdd (){
        if (count < props.stock) {setCount(count + 1);}
        //setCount(count+1)
    }
    function handleSubstract (){
        if (count > 0) {setCount(count - 1);}
        //setCount(count-1)
    }

    function onAddToCart() {
        console.log ("agregado al carrito")
    }
    return (
    <div>
        <h3>
        Camisa
        </h3>
        <button className="buttonAdd" onClick={handleSubstract}> - </button>
        <span className="spanCount"> {count}</span>
        <button className="buttonSub" onClick={handleAdd}> + </button>
        <button className="buttonCart"> AGREGAR AL CARRITO</button>
    </div>


)
}

export default ItemCount;