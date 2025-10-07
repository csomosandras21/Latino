import { useState, useEffect } from "react";
import Lattafa from "./Lattafa";


const Lattafas = () => {
    let [LattafaItems, setLattafasItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/lattafas');
            const bejovoAdatok = await response.json();
            const adatok = bejovoAdatok.adatok;

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
            {/* <div className="main-kontener">{diorItems}</div>; */}
        </div>
    );
}

export default Lattafas;