import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';

const EgyediLattafa = (id) => {
  const params = useParams();
  console.log(params.id);
  let [lattafaItem, setLattafaItem] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const lattafas = adatok.filter(elem => elem.marka === 'Lattafa')
              console.log(lattafas);
  
              const itemD = lattafas.filter(elem => elem._id === params.id);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setLattafaItem(itemD[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
     <div className="oldal">

    <h1 className="cim">LATTAFA</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={lattafaItem.kep} alt={lattafaItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{lattafaItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{lattafaItem.fajta}</p>
        </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{lattafaItem.ar} FT</p>
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

export default EgyediLattafa