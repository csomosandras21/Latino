import { useState, useEffect, useRef } from "react";
import Ysl from "./Ysl"


const Ysls = () => {
    let [yslItmes, setYslsItems] = useState([]);
    let tomb = [];
    const previousYslItems = useRef([]);

    useEffect(() => {
        previousYslItems.current = yslItmes;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            const ysls = adatok.filter(elem => elem.marka === 'YSL Saint Laurent')
            console.log(ysls);

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < ysls.length; i++) {
                    tomb.push(<Ysl key={i} ysl={ysls[i]} />);
                }
                setYslsItems(tomb);
              
            } 
            else console.log(ysls.msg);

        }

        szerverrolBetolt();
        
    }, [yslItmes]);

    return (
       <div>
            <div className="main-kontener">{yslItmes}</div>;
        </div>
    );
}

export default Ysls;