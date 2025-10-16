import { useState, useEffect } from "react";
import Valentino from "./Valentino";


const Valentinos = () => {
    let [valentinoItems, setVAlentinosItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/valentinos-frontend');
            const bejovoAdatok = await response.json();
            console.log(bejovoAdatok);
            
            const adatok = bejovoAdatok.valentinos;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Valentino key={i} val={adatok[i]} />);
                }
        
                setVAlentinosItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <div className="main-kontener">{valentinoItems}</div>;
        </div>
    );
}

export default Valentinos;