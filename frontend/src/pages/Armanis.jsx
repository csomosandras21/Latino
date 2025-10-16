import { useState, useEffect } from "react";
import Armani from "./Armani";


const Armanis = () => {
    let [armaniItmes, setArmanisItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/armanis-frontend');
            const bejovoAdatok = await response.json();
            console.log(bejovoAdatok);

            const adatok = bejovoAdatok.armanis;

            if (response.ok)
            {
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Armani key={i} armani={adatok[i]} />);
                }
                console.log(tomb);
                setArmanisItems(tomb);
                console.log(adatok);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
       <div>
            <div className="main-kontener">{armaniItmes}</div>;
        </div>
    );
}

export default Armanis;