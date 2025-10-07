import { useState, useEffect } from "react";
import Ysl from "./Ysl";


const Ysls = () => {
    let [YslItmes, setYslsItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/ysl');
            const bejovoAdatok = await response.json();
            const adatok = bejovoAdatok.adatok;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Valentino key={i} ysl={adatok[i]} />);
                }
        
                setYslsItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <h1>YSL</h1>
            {/* <div className="main-kontener">{diorItems}</div>; */}
        </div>
    );
}

export default Ysls;