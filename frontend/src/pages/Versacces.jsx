import { useState, useEffect, useRef } from "react";
import Versacce from "./Versacce";


const Versacces = () => {
    let [versacceItems, setVersaccesItems] = useState([]);
    let tomb = [];
    const previousVersacceItems = useRef([]);

    useEffect(() => {
        previousVersacceItems.current = versacceItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            console.log(adatok);
            
            const versacces = adatok.filter(elem => elem.marka === 'Versace')
            console.log(versacces);

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < versacces.length; i++) {
                    tomb.push(<Versacce key={i} vers={versacces[i]} />);
                }
        
                setVersaccesItems(tomb);
            } 
            else console.log(versacces.msg);

        }

        szerverrolBetolt();
        
    }, [versacceItems]);

    return (
        <div>
            <div className="main-kontener">{versacceItems}</div>;
        </div>
    );
}

export default Versacces;