import Creed from "./Creed";
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'


const Creeds = () => {
    let [creedItems, setCreedsItems] = useState([]);
    let tomb = [];

    const { filtering } = useContext(FilteringContext)

    const previousCreedItems = useRef([]);

    useEffect(() => {
        console.log(filtering);

        previousCreedItems.current = creedItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();

            const adatok = bejovoAdatok.parfumes;
            const creeds = adatok.filter(elem => elem.marka === 'Creed')
            console.log(creeds);



            if (response.ok)
            {
               console.log(filtering);
                console.log(adatok);
                const atad = creeds.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < creeds.length; i++) {
                        tomb.push(<Creed key={i} creed={creeds[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Creed key={i} creed={atad[i]} />);
                    }

                }
        
                setCreedsItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, [filtering]);

    return (
        <div>
            <div className="main-kontener">{creedItems}</div>;
        </div>
    );
}

export default Creeds;