import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import "./card.css";


function Card (props) {
    let {price, title, img, detail, stock, id} = props;
    const urlDetalle =  `/Prendas/${id} - ${title}`

    return (
        <div className="card">
            <div className="card-img">
                <img className="card-image" src = {img} alt ="card img"></img>
            </div>
            <div className="card-detail">
                <h3 className="h3-card">{title}</h3>
                <h4 className="h4-card">$ {price}</h4>
                <Link to={urlDetalle}>
                     <button className="button-card"> Ver más</button>
                </Link>
               {/*  <ItemCount  initial = {1} stock= {stock}/> */}
            </div>
            
        </div>
    )
}

export default Card;