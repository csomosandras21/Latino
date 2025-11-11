import { useState, useEffect } from "react";
import Creed from "./Creed";


const Creeds = () => {
    let [creedItems, setCreedsItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();

            const adatok = bejovoAdatok.parfumes;
            const creeds = adatok.filter(elem => elem.marka === 'Creed')
            console.log(creeds);



            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < creeds.length; i++) {
                    tomb.push(<Creed key={i} creed={creeds[i]} />);
                }
        
                setCreedsItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <div className="main-kontener">{creedItems}</div>;
        </div>
    );
}

export default Creeds;