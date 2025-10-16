import { useState, useEffect } from "react";
import Ysl from "./Ysl"


const Ysls = () => {
    let [yslItmes, setYslsItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/ysls-frontend');
            const bejovoAdatok = await response.json();
            console.log(bejovoAdatok);

            const adatok = bejovoAdatok.ysls;

            if (response.ok)
            {
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Ysl key={i} ysl={adatok[i]} />);
                }
                console.log(tomb);
                setYslsItems(tomb);
                console.log(adatok);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
       <div>
            <div className="main-kontener">{yslItmes}</div>;
        </div>
    );
}

export default Ysls;