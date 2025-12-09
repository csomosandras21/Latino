import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import osszesAdatok from '../../public/leirasok/osszes';

const Egyedi= (id) => {
  const params = useParams();
  console.log(params.id);
  let [item, setItem] = useState([]);
  let [osszesLeir, setOsszesLeir] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
               console.log(osszesAdatok);
  
              const itemD = adatok.filter(elem => elem._id === params.id);
               const leirO = osszesAdatok.filter(elem => elem.nev.toUpperCase() === itemD[0].nev.toUpperCase() && elem.fajta.toUpperCase() === itemD[0].fajta.toUpperCase())
              console.log(leirO);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setItem(itemD[0]);
                  setOsszesLeir(leirO[0])
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
  <div className="oldal">

    <h1 className="cim">{item.marka}</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={item.kep} alt={item.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{item.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{item.fajta}</p>
        </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{item.ar} FT</p>
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
        <tr><td>Fej</td><td>{osszesLeir.fej}</td></tr>
        <tr><td>Szív</td><td>{osszesLeir.sziv}</td></tr>
        <tr><td>Alap</td><td>{osszesLeir.alap}</td></tr>
        <tr><td>Fajtaja</td><td>{osszesLeir.fajtaja}</td></tr>
        </tbody>
        </table>
        <div className='leirasok'>
          <p>Leírás {osszesLeir.leiras}</p>
        </div>
  </div>
)


}

export default Egyedi