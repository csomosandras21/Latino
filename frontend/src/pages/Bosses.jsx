import { useState, useEffect } from "react";
import Boss from "./Boss";


const Bosses = () => {
    let [bossItems, setBossesItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/bosses');
            const bejovoAdatok = await response.json();
            const adatok = bejovoAdatok.adatok;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Boss key={i} boss={adatok[i]} />);
                }
        
                setBossesItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <h1>Bosses</h1>
            {/* <div className="main-kontener">{diorItems}</div>; */}
        </div>
    );
}

export default Bosses;