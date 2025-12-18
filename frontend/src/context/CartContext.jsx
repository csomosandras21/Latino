import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    // const [tartalom, setTartalom] = useState([]);
    const [kosar, setKosar] = useState([]);

    useEffect(() => {
        localStorage.setItem('kosar', JSON.stringify([]));
    }, [])

    return (
        <CartContext.Provider value={{ kosar, setKosar }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;