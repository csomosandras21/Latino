import Gucci from "./Gucci";
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'


const Guccis = () => {
    let [gucciItems, setGuccisItems] = useState([]);
    let tomb = [];

     const { filtering } = useContext(FilteringContext)

    const previousGucciItems = useRef([]);

    useEffect(() => {
         console.log(filtering);

        previousGucciItems.current = gucciItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();

            const adatok = bejovoAdatok.parfumes;
            const guccies = adatok.filter(elem => elem.marka === 'Gucci')
            console.log(guccies);

            if (response.ok)
            {
                console.log(filtering);
                console.log(adatok);
                const atad = guccies.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < guccies.length; i++) {
                        tomb.push(<Gucci key={i} gu={guccies[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Gucci key={i} gu={atad[i]} />);
                    }

                }
                setGuccisItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, [filtering]);

    return (
        <div>
           
            <div className="main-kontener">{gucciItems}</div>;
        </div>
    );
}

export default Guccis;