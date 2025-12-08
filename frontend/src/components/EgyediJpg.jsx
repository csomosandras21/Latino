import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import jpgAdatok from '../../public/leirasok/jpg.js';

const EgyediJpg = (id) => {
  const params = useParams();
  console.log(params.id);
  let [jpgItem, setJpgItem] = useState([]);
  let [jpgLeir, setJpgLeir] = useState([]);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const jpgs = adatok.filter(elem => elem.marka === 'Jean Paul')
              console.log(jpgs);
              console.log(jpgAdatok);
  
              const itemD = jpgs.filter(elem => elem._id === params.id);
              console.log(itemD[0]);
              const leirJ = jpgAdatok.filter(elem => elem.nev.toUpperCase() === itemD[0].nev.toUpperCase() && elem.fajta.toUpperCase() === itemD[0].fajta.toUpperCase())
              console.log(leirJ);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setJpgItem(itemD[0]);
                   setJpgLeir(leirJ[0])
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
  
  return (
     <div className="oldal">

    <h1 className="cim">JPG</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={jpgItem.kep} alt={jpgItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{jpgItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{jpgItem.fajta}</p>
        </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{jpgItem.ar} FT</p>
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
        <tr><td>Fej</td><td>{jpgLeir.fej}</td></tr>
        <tr><td>Szív</td><td>{jpgLeir.sziv}</td></tr>
        <tr><td>Alap</td><td>{jpgLeir.alap}</td></tr>
        <tr><td>Fajtaja</td><td>{jpgLeir.fajtaja}</td></tr>
        </tbody>
        </table>
        <div className='leirasok'>
          <p>Leírás {jpgLeir.leiras}</p>
        </div>
  </div>
)
    
  
}

export default EgyediJpg