import { useState, useEffect, useRef } from "react";
import Armani from "./Armani";


const Armanis = () => {
    let [armaniItmes, setArmanisItems] = useState([]);
    let tomb = [];
    const previousArmaniItems = useRef([]);

    useEffect(() => {
        previousArmaniItems.current = armaniItmes;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();

            const adatok = bejovoAdatok.parfumes;
            const armanis = adatok.filter(elem => elem.marka === 'Armani')
            console.log(armanis);
            



            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < armanis.length; i++) {
                    tomb.push(<Armani key={i} armani={armanis[i]} />);
                }
                setArmanisItems(tomb);
            } 
            else console.log(armanis.msg);

        }

        szerverrolBetolt();
        
    }, [armaniItmes]);

    return (
       <div>
            <div className="main-kontener">{armaniItmes}</div>;
        </div>
    );
}

export default Armanis;