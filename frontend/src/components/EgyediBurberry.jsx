import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import burAdatok from '../../public/leirasok/bur.js';
import { CartContext } from '../context/CartContext.jsx';

const EgyediBurberry = (id) => {
  const params = useParams();
  console.log(params.id);
  let [burberryItem, setBurberryItem] = useState([]);
  let [burberryLeir, setBurberryLeir] = useState([]);

  const {kosar, kosarSzamlalo,  setKosar, setKosarSzamlalo} = useContext(CartContext);
  
  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const burberrys = adatok.filter(elem => elem.marka === 'Burberry')
              console.log(burberrys);
                 console.log(burAdatok);
  
                const itemB = burberrys.filter(elem => elem._id === params.id);
              console.log(itemB[0]);
              const leirB = burAdatok.filter(elem => elem.nev.toUpperCase() === itemB[0].nev.toUpperCase() && elem.fajta.toUpperCase() === itemB[0].fajta.toUpperCase())
              console.log(leirB);

  
              if (response.ok)
              {
                  console.log(itemB[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setBurberryItem(itemB[0]);
                  setBurberryLeir(leirB[0])
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);

      const kosarbaTesz = () => {
        const darab = document.getElementsByClassName('darab');
        console.log(darab[0].value);
        
        let szam = kosarSzamlalo + Number(darab[0].value);
        localStorage.setItem('kosarszamlalo', szam); 
        setKosarSzamlalo(szam);
      }
  
  return (
     <div className="oldal">

    <h1 className="cim">BURBERRY</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={burberryItem.kep} alt={burberryItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{burberryItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{burberryItem.fajta}</p>
        </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{burberryItem.ar} FT</p>
        </div>

      <div className='gombok'>
    <select className='darab'>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
        <button className="vasarlas-gomb" onClick={kosarbaTesz}>Kosárba</button>
      </div>
      </div>

      </div>
    <p className='szag'>Illat leírás:</p>
      <table>
        <tbody>
        <tr><td>Fej</td><td>{burberryLeir.fej}</td></tr>
        <tr><td>Szív</td><td>{burberryLeir.sziv}</td></tr>
        <tr><td>Alap</td><td>{burberryLeir.alap}</td></tr>
        <tr><td>Fajtaja</td><td>{burberryLeir.fajtaja}</td></tr>
        </tbody>
        </table>
        <div className='leirasok'>
          <p>Leírás {burberryLeir.leiras}</p>

    </div>
  </div>
)
}

export default EgyediBurberry