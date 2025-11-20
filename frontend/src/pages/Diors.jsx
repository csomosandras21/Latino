import { useState, useEffect, useRef } from "react";
import Dior from "./Dior";
import './Parfumok.css';

const Diors = () => {
    let [diorItems, setDiorsItems] = useState([]);
    let tomb = [];
    const previousDiorItems = useRef([]);

    useEffect(() => {
        previousDiorItems.current = diorItems;
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
                    tomb.push(<Dior key={diors[i]._id} dio={diors[i]} />);
                }
        
                setDiorsItems(tomb);
                
            } 
            else console.log(diors.msg);

        }

        szerverrolBetolt();
        
    }, [diorItems]);

    return (
        <div>
            <div className="main-kontener">{diorItems}</div>;
        </div>
    );
}

export default Diors;