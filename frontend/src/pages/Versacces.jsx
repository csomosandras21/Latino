import Versacce from "./Versacce";
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'


const Versacces = () => {
    let [versacceItems, setVersaccesItems] = useState([]);
    let tomb = [];
        const { filtering } = useContext(FilteringContext)
    const previousVersacceItems = useRef([]);

    useEffect(() => {
         console.log(filtering);
        previousVersacceItems.current = versacceItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            console.log(adatok);
            
            const versacces = adatok.filter(elem => elem.marka === 'Versace')
            console.log(versacces);

            if (response.ok)
            { console.log(filtering);
                console.log(adatok);
                const atad = versacces.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < versacces.length; i++) {
                        tomb.push(<Versacce key={i} vers={versacces[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Versacce key={i} vers={atad[i]} />);
                    }

                }
                setVersaccesItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, [filtering]);

    return (
        <div>
            <div className="main-kontener">{versacceItems}</div>;
        </div>
    );
}

export default Versacces;