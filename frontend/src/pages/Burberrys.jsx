import { useState, useEffect } from "react";
import Burberry from "./Burberry";


const Burberrys = () => {
    let [burberryItems, setBurberrysItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            const burberries = adatok.filter(elem => elem.marka === 'Burberry')
            console.log(burberries);
            
            if (response.ok)
                {
                console.log(adatok);
                for (let i = 0; i < burberries.length; i++) {
                    tomb.push(<Burberry key={i} bur={burberries[i]} />);
                }
        
                setBurberrysItems(tomb);
            } 
            else console.log(burberries.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <div className="main-kontener">{burberryItems}</div>;
        </div>
    );
}

export default Burberrys;