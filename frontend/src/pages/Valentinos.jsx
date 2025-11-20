import { useState, useEffect, useRef } from "react";
import Valentino from "./Valentino";


const Valentinos = () => {
    let [valentinoItems, setVAlentinosItems] = useState([]);
    let tomb = [];
    const previousValentinoItems = useRef([]);

    useEffect(() => {
        previousValentinoItems.current = valentinoItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            console.log(bejovoAdatok);
            const valentinos = adatok.filter(elem => elem.marka === 'Valentino')

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < valentinos.length; i++) {
                    tomb.push(<Valentino key={i} val={valentinos[i]} />);
                }
        
                setVAlentinosItems(tomb);
            } 
            else console.log(diors.msg);

        }

        szerverrolBetolt();
        
    }, [valentinoItems]);

    return (
        <div>
            <div className="main-kontener">{valentinoItems}</div>;
        </div>
    );
}

export default Valentinos;