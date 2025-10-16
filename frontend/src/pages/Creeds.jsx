import { useState, useEffect } from "react";
import Creed from "./Creed";


const Creeds = () => {
    let [creedItems, setCreedsItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/creeds-frontend');
            const bejovoAdatok = await response.json();
            console.log(bejovoAdatok);
            
            const adatok = bejovoAdatok.creeds;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Creed key={i} creed={adatok[i]} />);
                }
        
                setCreedsItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <div className="main-kontener">{creedItems}</div>;
        </div>
    );
}

export default Creeds;