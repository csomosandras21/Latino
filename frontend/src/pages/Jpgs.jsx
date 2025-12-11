import JeanPaul from "./Jpg"
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'


const JeanPauls = () => {
    let [jeanItems, setJeanItems] = useState([]);
    let tomb = [];
     const { filtering } = useContext(FilteringContext)
    const previousJeanItems = useRef([]);

    useEffect(() => {
          console.log(filtering);
        previousJeanItems.current = jeanItems;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();

            
            const adatok = bejovoAdatok.parfumes;
             const jpgs = adatok.filter(elem => elem.marka === 'Jean Paul')
            console.log(jpgs);
            
            
            if (response.ok)
            {
                 console.log(filtering);
                console.log(adatok);
                const atad = jpgs.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < jpgs.length; i++) {
                        tomb.push(<JeanPaul key={i} jean={jpgs[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<JeanPaul key={i} jean={atad[i]} />);
                    }

                }
        
                setJeanItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, [filtering]);

    return (
        <div>
            {/* <h1>Jean Pauls</h1> */}
             <div className="main-kontener">{jeanItems}</div>; 
        </div>
    );
}

export default JeanPauls;