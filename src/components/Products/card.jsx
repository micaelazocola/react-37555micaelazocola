import React from "react";
import "./card.css";

function Card (props) {
    let {price, title, img, detail} = props;

    return (
        <div className="card">
            <div className="card-img">
                <img className="card-image" src = {img} alt ="card img"></img>
            </div>
            <div className="card-detail">
                <h3 className="h3-card">{title}</h3>
                <h4 className="h4-card">$ {price}</h4>
                <button className="button-card"> Ver más</button>
            </div>
            
        </div>
    )
}

export default Card;