import { useState, useEffect, useRef } from "react";
import Lattafa from "./Lattafa";


const Lattafas = () => {
    let [LattafaItems, setLattafasItems] = useState([]);
    let tomb = [];
    const previousLattafaItems = useRef([]);

    useEffect(() => {
        previousLattafaItems.current = LattafaItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            const lattafas = adatok.filter(elem => elem.marka === 'Lattafa')
            console.log(lattafas);

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < lattafas.length; i++) {
                    tomb.push(<Lattafa key={i} lat={lattafas[i]} />);
                }
        
                setLattafasItems(tomb);
            } 
            else console.log(lattafas.msg);

        }

        szerverrolBetolt();
        
    }, [LattafaItems]);

    return (
        <div>
           
             <div className="main-kontener">{LattafaItems}</div>;
        </div>
    );
}

export default Lattafas;