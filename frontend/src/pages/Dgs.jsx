import { useState, useEffect } from "react";
import Dolce from "./Dg";


const Dolces = () => {
    let [dolceItems, setDolcesItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/dolces');
            const bejovoAdatok = await response.json();
            const adatok = bejovoAdatok.adatok;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Dolce key={i} dol={adatok[i]} />);
                }
        
                setDolcesItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <h1>Dolces</h1>
            {/* <div className="main-kontener">{diorItems}</div>; */}
        </div>
    );
}

export default Dolces;