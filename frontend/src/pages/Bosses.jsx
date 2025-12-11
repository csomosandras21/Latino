import Boss from "./Boss";
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'



const Bosses = () => {
    let [bossItmes, setBossesItems] = useState([]);
    let tomb = [];

    const { filtering } = useContext(FilteringContext)

    const previousBossItems = useRef([]);

    useEffect(() => {
        console.log(filtering);

        previousBossItems.current = bossItmes;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();

            const adatok = bejovoAdatok.parfumes;
            const bosses = adatok.filter(elem => elem.marka === 'Boss')
            console.log(bosses);

            if (response.ok)
            {
               console.log(filtering);
                console.log(adatok);
                const atad = bosses.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < bosses.length; i++) {
                        tomb.push(<Boss key={i} boss={bosses[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Boss key={i} boss={atad[i]} />);
                    }

                }

                setBossesItems(tomb);

            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    },   [filtering]);;

    return (
       <div>
            <div className="main-kontener">{bossItmes}</div>;
        </div>
    );
}

export default Bosses;