import { useState, useEffect } from "react";
import Boss from "./Boss";


const Bosses = () => {
    let [bossItmes, setBossesItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/bosses-frontend');
            const bejovoAdatok = await response.json();
            console.log(bejovoAdatok);

            const adatok = bejovoAdatok.bosses;

            if (response.ok)
            {
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Boss key={i} boss={adatok[i]} />);
                }
                console.log(tomb);
                setBossesItems(tomb);
                console.log(adatok);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
       <div>
            <div className="main-kontener">{bossItmes}</div>;
        </div>
    );
}

export default Bosses;