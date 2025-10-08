import { useState, useEffect } from "react";
import Dior from "./Dior";


const Diors = () => {
    let [diorItems, setDiorsItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/diors-frontend');
            const bejovoAdatok = await response.json();
            console.log(bejovoAdatok);
            
            const adatok = bejovoAdatok.diors;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Dior key={i} dio={adatok[i]} />);
                }
        
                setDiorsItems(tomb);
            } 
            else console.log(adatok.msg);

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