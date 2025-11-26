import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';

const EgyediArmani = (id) => {
  const params = useParams();
  console.log(params.id);
  let [armaniItem, setArmaniItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const armanis = adatok.filter(elem => elem.marka === 'Armani')
              console.log(armanis);
  
              const itemA = armanis.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemA[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setArmaniItem(itemA[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
     <div className="oldal">

    <h1 className="cim">ARMANI</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={armaniItem.kep} alt={armaniItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{armaniItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{armaniItem.fajta}</p>
        </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{armaniItem.ar} FT</p>
        </div>

      <div className='gombok'>
    <select className='darab'>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
        <button className="vasarlas-gomb">Kosárba</button>
      </div>
      </div>

    </div>
  </div>
)
    
  
}

export default EgyediArmani