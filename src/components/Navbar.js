import React from "react";



function Navbar () {
    return (
        <div className="header-nav">
            <div className="logo-nav">
               eCommerce 
            </div>
            <nav className="menu-navegador">
                <ul className="menu-items">
                    <li className="ul-item">Home</li>
                    <li className="ul-item">About Us</li>
                    <li className="ul-item">Shop</li>
                    <li className="ul-item">Contact</li>
                </ul>
            </nav>

            <CartWidget/>
        </div>
    );
}

function CartWidget () {
    return (

        <div>
            <img className="img-bag"  src="https://assets.webiconspng.com/uploads/2016/11/bag_buy_mall_shop_shopping_icon_339933.png" alt= " "></img>
        </div>


    )
}


export default Navbar