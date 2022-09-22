import React from "react";
import Card from "./card";

function ItemList (props) {
    return (
        <div>
            {props.data.map ( (item) => {
                    return(<Card 
                        key={item.id}
                        price= {item.price}
                        title= {item.title}
                        stock={item.stock}
                        img= {item.img}/>
                        );
            
                    })}
        </div>
    )
}

export default ItemList