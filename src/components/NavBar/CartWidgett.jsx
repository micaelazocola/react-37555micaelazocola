import React, {useContext} from "react";
import { cartCtx } from "../../context/cartContext";


function CartWidgett () {
    const {getTotalItemsInCart} = useContext(cartCtx);
    return (
        <div>
            <span>x</span>
            <span> {getTotalItemsInCart()}</span>
        </div>
    )
}

export default CartWidgett;