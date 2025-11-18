import { useState, useEffect } from "react";
import Dolce from "./Dg";


const Dolces = () => {
    let [dolceItems, setDolcesItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();


            const adatok = bejovoAdatok.parfumes;
             const dgs = adatok.filter(elem => elem.marka === 'Dolce & Gabbana')
            console.log(dgs);


            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < dgs.length; i++) {
                    tomb.push(<Dolce key={i} dol={dgs[i]} />);
                }
        
                setDolcesItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            
             <div className="main-kontener">{dolceItems}</div>; 
        </div>
    );
}

export default Dolces;