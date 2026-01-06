import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    // const [tartalom, setTartalom] = useState([]);
    const [kosar, setKosar] = useState([]);
    const [kosarSzamlalo, setKosarSzamlalo] = useState(0);

    useEffect(() => {
        let kosar1 = JSON.parse(localStorage.getItem('kosar'));
        if (kosar1) setKosar(kosar1);
        let kosarSzamlalo1 = +localStorage.getItem('kosarszamlalo');
        if (kosarSzamlalo1) setKosarSzamlalo(kosarSzamlalo1);
    }, [])

    return (
        <CartContext.Provider value={{ kosar, kosarSzamlalo, setKosar, setKosarSzamlalo }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;