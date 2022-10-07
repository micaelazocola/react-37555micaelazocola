import React from "react";
import {Link} from "react-router-dom";
import CartWidgett from "./CartWidgett";


function Navbar () {
    return (
        <div className="header-nav">
            <div className="logo-nav">
               eCommerce 
            </div>
            <nav className="menu-navegador">
                <ul className="menu-items">
                    <li className="ul-item">
                       <Link to="/">
                        <h3>Home</h3>
                    </Link> 
                    </li>
                    
                    <li className="ul-item">
                        <Link to="/category/tops">
                            <h3>Tops</h3>
                        </Link>
                    </li>
                    <li className="ul-item">
                        <Link to="/category/bottoms">
                            <h3>Bottoms</h3>
                        </Link>
                    </li>
                    <li className="ul-item">
                        <Link to="/prendas">
                            <h3>Prendas</h3>
                        </Link>
                    </li>
                </ul>
            </nav>

            <CartWidgett/>
        </div>
    );
}

/* function CartWidget () {
    return (

        <div>
            <img className="img-bag"  src="https://assets.webiconspng.com/uploads/2016/11/bag_buy_mall_shop_shopping_icon_339933.png" alt= " "></img>
        </div>


    )
} */


export default Navbar