import { useState, useEffect } from "react";
import Dior from "./Dior";


const Diors = () => {
    let [diorItems, setDiorsItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            const diors = adatok.filter(elem => elem.marka === 'Dior')
            console.log(diors);

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < diors.length; i++) {
                    tomb.push(<Dior key={i} dio={diors[i]} />);
                }
        
                setDiorsItems(tomb);
                
            } 
            else console.log(diors.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <div className="main-kontener">{diorItems}</div>;
        </div>
    );
}

export default Diors;