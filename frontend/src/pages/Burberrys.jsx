import Burberry from "./Burberry";
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'


const Burberrys = () => {
    let [burberryItems, setBurberrysItems] = useState([]);
    let tomb = [];

     const { filtering } = useContext(FilteringContext)

    const previousBurberryItems = useRef([]);

    useEffect(() => {
    console.log(filtering);

       previousBurberryItems.current = burberryItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            const burberries = adatok.filter(elem => elem.marka === 'Burberry')
            console.log(burberries);


            
            if (response.ok)
                {
                   console.log(filtering);
                console.log(adatok);
                const atad = burberries.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < burberries.length; i++) {
                        tomb.push(<Burberry key={i} bur={burberries[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Burberry key={i} bur={atad[i]} />);
                    }

                }
        
                setBurberrysItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, [filtering]);

    return (
        <div>
            <div className="main-kontener">{burberryItems}</div>;
        </div>
    );
}

export default Burberrys;