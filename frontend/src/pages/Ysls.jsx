import Ysl from "./Ysl"
import { useEffect, useState, useContext, useRef } from 'react'
import { FilteringContext } from '../App'


const Ysls = () => {
    let [yslItmes, setYslsItems] = useState([]);
    let tomb = [];
    const { filtering } = useContext(FilteringContext)
    const previousYslItems = useRef([]);

    useEffect(() => {
        console.log(filtering);
        previousYslItems.current = yslItmes;
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            const ysls = adatok.filter(elem => elem.marka === 'YSL Saint Laurent')
            console.log(ysls);

            if (response.ok)
            {
                console.log(filtering);
                console.log(adatok);
                const atad = ysls.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                if (atad.length === 0) {
                    for (let i = 0; i < ysls.length; i++) {
                        tomb.push(<Ysl key={i} ysl={ysls[i]} />);
                    }
                } else {
                    for (let i = 0; i < atad.length; i++) {
                        tomb.push(<Ysl key={i} ysl={atad[i]} />);
                    }

                }
                setYslsItems(tomb);
              
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, [filtering]);

    return (
       <div>
            <div className="main-kontener">{yslItmes}</div>;
        </div>
    );
}

export default Ysls;