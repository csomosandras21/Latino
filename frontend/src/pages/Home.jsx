import lat1 from '../../public/images/Latino_01.png'
import lat2 from '../../public/images/Latino.png'
import lat3 from '../../public/images/Beige Simple Perfume Logo.png'
import './Home.css'
import './Parfumok.css'

import { useEffect, useState } from 'react'

const Home = () => {
    let [items, setItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3500/api/parfumes-frontend');
            const bejovoAdatok = await response.json();
            
            const adatok = bejovoAdatok.parfumes;
            // const diors = adatok.filter(elem => elem.marka === 'Dior')
            // console.log(diors);

            function shuffle(array) {
                array.sort(() => Math.random() - 0.5);
            }

            shuffle(adatok);

            if (response.ok)
            {
                console.log(adatok);
                // for (let i = 0; i < adatok.length; i++) {
                //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                // }
        
                setItems(adatok);
                
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <div className="main-kontener">
                {items.map(elem => {
                    return (
                        
                        <div className='tartalom-kontener' key={elem._id}>
                        <h1>{elem.nev}</h1>
                        <p>{elem.fajta}</p>
                        <p>{elem.ar}FT</p>
                        <img src={elem.kep} alt="" />
                        </div>
                        
                    );
                })}
            </div>;
        </div>
    );
}

export default Home;