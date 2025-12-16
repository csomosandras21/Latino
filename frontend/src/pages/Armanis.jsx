import Armani from "./Armani";
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'

const Armanis = () => {
    let [armanisItmes, setArmanisItems] = useState([]);
    let tomb = [];

    const { filtering } = useContext(FilteringContext)
    

    const previousArmaniItems = useRef([]);

    useEffect(() => {
        console.log(filtering);
        
        previousArmaniItems.current = armanisItmes;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();

            const adatok = bejovoAdatok.parfumes;
            const armanis = adatok.filter(elem => elem.marka === 'Armani')
            console.log(armanis);
            



            if (response.ok)
            {
                console.log(filtering);
                console.log(adatok);
                const atad = armanis.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < armanis.length; i++) {
                        tomb.push(<Armani key={i} armani={armanis[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Armani key={i} armani={atad[i]} />);
                    }

                }
                setArmanisItems(tomb);
                // console.log(atad);
                
                // setArmanisItems(atad);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    },  [filtering]);

    return (
       <div>
            <div className="main-kontener">{armanisItmes}</div>;
        </div>
    );
}

export default Armanis;