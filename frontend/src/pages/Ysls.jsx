import { useState, useEffect } from "react";
import Ysl from "./Ysl"


const Ysls = () => {
    let [YslItmes, setYslsItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/ysls-frontend');
            const bejovoAdatok = await response.json();
            console.log(bejovoAdatok);

            const adatok = bejovoAdatok.ysl;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Ysl key={i} ysl={adatok[i]} />);
                }
        
                setYslsItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
       <div>
            <div className="main-kontener">{YslItmes}</div>;
        </div>
    );
}

export default Ysls;