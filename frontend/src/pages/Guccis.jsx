import { useState, useEffect, useRef } from "react";
import Gucci from "./Gucci";


const Guccis = () => {
    let [gucciItems, setGuccisItems] = useState([]);
    let tomb = [];
    const previousGucciItems = useRef([]);

    useEffect(() => {
        previousGucciItems.current = gucciItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();

            const adatok = bejovoAdatok.parfumes;
            const guccies = adatok.filter(elem => elem.marka === 'Gucci')
            console.log(guccies);

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < guccies.length; i++) {
                    tomb.push(<Gucci key={i} gu={guccies[i]} />);
                }
        
                setGuccisItems(tomb);
            } 
            else console.log(guccies.msg);

        }

        szerverrolBetolt();
        
    }, [gucciItems]);

    return (
        <div>
           
            <div className="main-kontener">{gucciItems}</div>;
        </div>
    );
}

export default Guccis;