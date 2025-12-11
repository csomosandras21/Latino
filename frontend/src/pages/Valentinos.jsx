import Valentino from "./Valentino";
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'


const Valentinos = () => {
    let [valentinoItems, setVAlentinosItems] = useState([]);
    let tomb = [];

    const { filtering } = useContext(FilteringContext)

    const previousValentinoItems = useRef([]);

    useEffect(() => {
        console.log(filtering);

        previousValentinoItems.current = valentinoItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            console.log(bejovoAdatok);
            const valentinos = adatok.filter(elem => elem.marka === 'Valentino')

            if (response.ok)
            {
                console.log(filtering);
                console.log(adatok);
                const atad = valentinos.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < valentinos.length; i++) {
                        tomb.push(<Valentino key={i} val={valentinos[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Valentino key={i} val={atad[i]} />);
                    }

                }
                setVAlentinosItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    },  [filtering]);

    return (
        <div>
            <div className="main-kontener">{valentinoItems}</div>;
        </div>
    );
}

export default Valentinos;