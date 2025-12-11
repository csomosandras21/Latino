import Dolce from "./Dg";
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'


const Dolces = () => {
    let [dolceItems, setDolcesItems] = useState([]);
    let tomb = [];

       const { filtering } = useContext(FilteringContext)

const previousDolceItems = useRef([]);

    useEffect(() => {
console.log(filtering);

        previousDolceItems.current = dolceItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();


            const adatok = bejovoAdatok.parfumes;
             const dgs = adatok.filter(elem => elem.marka === 'Dolce & Gabbana')
            console.log(dgs);


            if (response.ok)
            {
               console.log(filtering);
                console.log(adatok);
                const atad = dgs.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < dgs.length; i++) {
                        tomb.push(<Dolce key={i} dol={dgs[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Dolce key={i} dol={atad[i]} />);
                    }

                }
        
                setDolcesItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, [filtering]);

    return (
        <div>
            
             <div className="main-kontener">{dolceItems}</div>; 
        </div>
    );
}

export default Dolces;