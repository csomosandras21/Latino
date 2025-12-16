import Dior from "./Dior";
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'



const Diors = () => {
     let [diorItems, setDiorsItems] = useState([]);
    let tomb = [];

    const { filtering } = useContext(FilteringContext)


    const previousDiorItems = useRef([]);


    useEffect(() => {
        console.log(filtering);

        previousDiorItems.current = diorItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            const diors = adatok.filter(elem => elem.marka === 'Dior')
            console.log(diors);

            if (response.ok)
            {
                console.log(filtering);
                console.log(adatok);
                const atad = diors.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < diors.length; i++) {
                        tomb.push(<Dior key={i} dio={diors[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Dior key={i} dio={atad[i]} />);
                    }

                }
                setDiorsItems(tomb);
            
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, [filtering]);

    return (
        <div>
            <div className="main-kontener">{diorItems}</div>;
        </div>
    );
}

export default Diors;