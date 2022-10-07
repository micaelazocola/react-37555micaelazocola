import React, {useState, createContext} from "react";
//1. importar e inicializar nuestro createContext
const cartCtx = createContext();

//2. Definir el provider
export default function CartContextProvider({children}) {
    const [cart, setCart] = useState ([]);

    function addItem (item, count) {
        
        if (isInCart(item.id)) {

            let newCart = cart.map ((itemMapeo) => {
                if (itemMapeo.id === item.id) {
                    /* let newItem = itemMapeo; */
                    itemMapeo.count += count
                    return itemMapeo
                }
                else 
                return itemMapeo
        })
        setCart(newCart)
    }else {
        let newCart = cart.map ((item) => item);
        newCart.push ({...item, count: count})
        setCart(newCart);
        }
    }
    function getTotalItemsInCart () {
        let total = 0
        cart.forEach (item => 0)
        return total;
    }
    function isInCart (id){
        let found = cart.some (item => item.id === id)
        return found;
    }
    return(
        //3.pasamos el objeto value a los children
        //4. En app importamos y renderizamos nuestro provider
       <cartCtx.Provider value={{cart, addItem, getTotalItemsInCart, isInCart}}>
            {children}
       </cartCtx.Provider>
        
    )
}

export {cartCtx}