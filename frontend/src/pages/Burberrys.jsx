import { useState, useEffect } from "react";
import Burberry from "./Burberry";


const Burberrys = () => {
    let [burberryItems, setBurberrysItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/burberrys-frontend');
            const bejovoAdatok = await response.json();
            console.log(bejovoAdatok);

            const adatok = bejovoAdatok.buberrys;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Burberry key={i} bur={adatok[i]} />);
                }
        
                setBurberrysItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <h1>Burberrys</h1>
            <div className="main-kontener">{burberryItems}</div>;
        </div>
    );
}

export default Burberrys;