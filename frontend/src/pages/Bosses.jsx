import { useState, useEffect, useRef } from "react";
import Boss from "./Boss";


const Bosses = () => {
    let [bossItmes, setBossesItems] = useState([]);
    let tomb = [];
    const previousBossItems = useRef([]);

    useEffect(() => {
        previousBossItems.current = bossItmes;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();

            const adatok = bejovoAdatok.parfumes;
            const bosses = adatok.filter(elem => elem.marka === 'Boss')
            console.log(bosses);

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < bosses.length; i++) {
                    tomb.push(<Boss key={i} boss={bosses[i]} />);
                }

                setBossesItems(tomb);

            } 
            else console.log(bosses.msg);

        }

        szerverrolBetolt();
        
    }, [bossItmes]);;

    return (
       <div>
            <div className="main-kontener">{bossItmes}</div>;
        </div>
    );
}

export default Bosses;