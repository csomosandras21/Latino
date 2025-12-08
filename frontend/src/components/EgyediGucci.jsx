import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import gucciAdatok from '../../public/leirasok/gucci.js'

const EgyediGucci = (id) => {
  const params = useParams();
  console.log(params.id);
  let [gucciItem, setGucciItem] = useState([]);
  let [gucciLeir, setGucciLeir] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const guccis = adatok.filter(elem => elem.marka === 'Gucci')
              console.log(guccis);
              console.log(gucciAdatok);
  
              const itemG = guccis.filter(elem => elem._id === params.id);
              console.log(itemG[0]);
              const leirG = Adatok.filter(elem => elem.nev.toUpperCase() === itemG[0].nev.toUpperCase() && elem.fajta.toUpperCase() === itemG[0].fajta.toUpperCase())
              console.log(leirG);
  
              if (response.ok)
              {
                  console.log(itemG[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setGucciItem(itemG[0]);
                  setGucciLeir(leirG[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
     <div className="oldal">

    <h1 className="cim">GUCCI</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={gucciItem.kep} alt={gucciItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{gucciItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{gucciItem.fajta}</p>
        </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{gucciItem.ar} FT</p>
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
    <p className='szag'>Illat leírás:</p>
      <table>
        <tbody>
        <tr><td>Fej</td><td>{gucciLeir.fej}</td></tr>
        <tr><td>Szív</td><td>{gucciLeir.sziv}</td></tr>
        <tr><td>Alap</td><td>{gucciLeir.alap}</td></tr>
        <tr><td>Fajtaja</td><td>{gucciLeir.fajtaja}</td></tr>
        </tbody>
        </table>
        <div className='leirasok'>
          <p>Leírás {gucciLeir.leiras}</p>
    </div>
  </div>
)
}

export default EgyediGucci