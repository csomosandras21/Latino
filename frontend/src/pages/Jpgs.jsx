import { useState, useEffect } from "react";
import JeanPaul from "./Jpg"


const JeanPauls = () => {
    let [jeanItems, setJeanItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();

            
            const adatok = bejovoAdatok.parfumes;
             const jpgs = adatok.filter(elem => elem.marka === 'Jean Paul')
            console.log(jpgs);
            
            
            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < jpgs.length; i++) {
                    tomb.push(<JeanPaul key={i} jean={jpgs[i]} />);
                }
        
                setJeanItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            {/* <h1>Jean Pauls</h1> */}
             <div className="main-kontener">{jeanItems}</div>; 
        </div>
    );
}

export default JeanPauls;