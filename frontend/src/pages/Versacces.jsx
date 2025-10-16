import { useState, useEffect } from "react";
import Versacce from "./Versacce";


const Versacces = () => {
    let [versacceItems, setVersaccesItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/versacces-frontend');
            const bejovoAdatok = await response.json();
            console.log(bejovoAdatok);
            
            const adatok = bejovoAdatok.versacces;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Versacce key={i} vers={adatok[i]} />);
                }
        
                setVersaccesItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <div className="main-kontener">{versacceItems}</div>;
        </div>
    );
}

export default Versacces;