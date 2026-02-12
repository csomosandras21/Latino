// import lat1 from '../../public/images/Latino_01.png'
// import lat2 from '../../public/images/Latino.png'
// import lat3 from '../../public/images/Beige Simple Perfume Logo.png'
import './Home.css'
import './Parfums.css'


import { useEffect, useState, useContext } from 'react'
import { FilteringContext } from '../App'

const Home = () => {
    let [items, setItems] = useState([]);
    const { filtering } = useContext(FilteringContext)
    
        
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
                console.log(filtering);
                // console.log(adatok);
                // for (let i = 0; i < adatok.length; i++) {
                //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                // }
                const atad = adatok.filter(elem => elem.fajta.includes(filtering))
                console.log(atad);
                
                setItems(atad);
                
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, [filtering]);

    const atdob = (id) => {
        window.location.href = `/egyedi/${id}`;
    }

    return (
        <div>
            <div className="main-kontener">
                {items.map(elem => {
                    return (
                        <div className='tartalom-kontener' key={elem._id} onClick={() => atdob(elem._id)}>
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