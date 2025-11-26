import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';

const EgyediDg = (id) => {
  const params = useParams();
  console.log(params.id);
  let [dgItem, setDgItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const dgs = adatok.filter(elem => elem.marka === 'Dolce & Gabbana')
              console.log(dgs);
  
              const itemD = dgs.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setDgItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
     <div className="oldal">

    <h1 className="cim">DOLCE & GABBANA</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={dgItem.kep} alt={dgItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{dgItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{dgItem.fajta}</p>
        </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{dgItem.ar} FT</p>
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

export default EgyediDg