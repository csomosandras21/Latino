import { useState, useEffect } from "react";
import Versacce from "./Versacce";


const Versacces = () => {
    let [versacceItems, setVersaccesItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/versacces');
            const bejovoAdatok = await response.json();
            const adatok = bejovoAdatok.adatok;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Versacce key={i} ver={adatok[i]} />);
                }
        
                setVersaccesItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <h1>Versacces</h1>
            {/* <div className="main-kontener">{diorItems}</div>; */}
        </div>
    );
}

export default Versacces;