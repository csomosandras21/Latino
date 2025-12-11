import Lattafa from "./Lattafa";
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'


const Lattafas = () => {
    let [LattafaItems, setLattafasItems] = useState([]);
    let tomb = [];
    const { filtering } = useContext(FilteringContext)
    const previousLattafaItems = useRef([]);

    useEffect(() => {
         console.log(filtering);
        previousLattafaItems.current = LattafaItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            const lattafas = adatok.filter(elem => elem.marka === 'Lattafa')
            console.log(lattafas);

            if (response.ok)
            {
              console.log(filtering);
                console.log(adatok);
                const atad = lattafas.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < lattafas.length; i++) {
                        tomb.push(<Lattafa key={i} lat={lattafas[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Lattafa key={i} lat={atad[i]} />);
                    }

                }
        
                setLattafasItems(tomb);
            } 
            else console.log(lattafas.msg);

        }

        szerverrolBetolt();
        
    }, [filtering]);

    return (
        <div>
           
             <div className="main-kontener">{LattafaItems}</div>;
        </div>
    );
}

export default Lattafas;