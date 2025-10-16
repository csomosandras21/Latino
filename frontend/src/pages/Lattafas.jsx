import { useState, useEffect } from "react";
import Lattafa from "./Lattafa";


const Lattafas = () => {
    let [LattafaItems, setLattafasItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/lattafas-frontend');
            const bejovoAdatok = await response.json();
            console.log(bejovoAdatok);
            
            const adatok = bejovoAdatok.lattafas;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Lattafa key={i} lat={adatok[i]} />);
                }
        
                setLattafasItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <h1>Lattafas</h1>
             <div className="main-kontener">{LattafaItems}</div>;
        </div>
    );
}

export default Lattafas;