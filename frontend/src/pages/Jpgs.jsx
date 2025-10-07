import { useState, useEffect } from "react";
import JeanPaul from "./Jpg";


const JeanPauls = () => {
    let [jeanItems, setJpgsItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/jpgs');
            const bejovoAdatok = await response.json();
            const adatok = bejovoAdatok.adatok;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Jeans key={i} jean={adatok[i]} />);
                }
        
                setJpgsItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <h1>Jean Pauls</h1>
            {/* <div className="main-kontener">{diorItems}</div>; */}
        </div>
    );
}

export default JeanPauls;