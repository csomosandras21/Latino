import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import versAdatok from '../../public/leirasok/versace.js'

const EgyediVersacce = (id) => {
  const params = useParams();
  console.log(params.id);
  let [versItem, setVersItem] = useState([]);
  let [versLeir, setVersLeir] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const versacces = adatok.filter(elem => elem.marka === 'Versace')
              console.log(versacces);
              console.log(versAdatok);
  
              const itemV = versacces.filter(elem => elem._id === params.id);
              console.log(itemV[0]);
              const leirV = versAdatok.filter(elem => elem.nev.toUpperCase() === itemV[0].nev.toUpperCase() && elem.fajta.toUpperCase() === itemV[0].fajta.toUpperCase())
              console.log(leirV);
  
              if (response.ok)
              {
                  console.log(itemV[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setVersItem(itemV[0]);
                   setVersLeir(leirV[0])
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
     <div className="oldal">

    <h1 className="cim">VERSACE</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={versItem.kep} alt={versItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{versItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{versItem.fajta}</p>
        </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{versItem.ar} FT</p>
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
      <p className='szag'>Illat leírás:</p>
      <table>
        <tbody>
        <tr><td>Fej</td><td>{versLeir.fej}</td></tr>
        <tr><td>Szív</td><td>{versLeir.sziv}</td></tr>
        <tr><td>Alap</td><td>{versLeir.alap}</td></tr>
        <tr><td>Fajtaja</td><td>{versLeir.fajtaja}</td></tr>
        </tbody>
        </table>
        <div className='leirasok'>
          <p>Leírás {versLeir.leiras}</p>
        </div>

    </div>
  </div>
)
}

export default EgyediVersacce