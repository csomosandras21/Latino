import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    // const [tartalom, setTartalom] = useState([]);
    const [kosar, setKosar] = useState([]);
    const [darabszam, setDarabszam] = useState([]);
    const [kosarSzamlalo, setKosarSzamlalo] = useState(0);

    useEffect(() => {
        let kosar1 = JSON.parse(localStorage.getItem('kosar'));
        if (kosar1) setKosar(kosar1);
        let darabszam1 = JSON.parse(localStorage.getItem('darabszam'));
        if (darabszam1) setDarabszam(darabszam1);
        let kosarSzamlalo1 = +localStorage.getItem('kosarszamlalo');
        if (kosarSzamlalo1) setKosarSzamlalo(kosarSzamlalo1);
    }, [])

    return (
        <CartContext.Provider value={{ kosar, setKosar, kosarSzamlalo, setKosarSzamlalo, darabszam, setDarabszam }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;