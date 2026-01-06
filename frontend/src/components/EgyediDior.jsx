import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import diorAdatok from '../../public/leirasok/dior.js';
import { CartContext } from '../context/CartContext.jsx';


const EgyediDior = (id) => {
  const params = useParams();
  console.log(params.id);
  let [diorItem, setDiorItem] = useState([]);
  let [diorLeir, setDiorLeir] = useState([]);

  const {kosar, kosarSzamlalo,  setKosar, setKosarSzamlalo} = useContext(CartContext);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const diorse = adatok.filter(elem => elem.marka === 'Dior')
              console.log(diorse);
              console.log(diorAdatok);
  
                const itemD = diorse.filter(elem => elem._id === params.id);
              console.log(itemD[0]);
              const leirD = diorAdatok.filter(elem => elem.nev.toUpperCase() === itemD[0].nev.toUpperCase() && elem.fajta.toUpperCase() === itemD[0].fajta.toUpperCase())
              console.log(leirD);

  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setDiorItem(itemD[0]);
                  setDiorLeir(leirD[0])
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
        let cartKosar = JSON.parse(localStorage.getItem('kosar'));
        console.log(typeof cartKosar);
        
        if (cartKosar) {
          if (!cartKosar.includes(diorItem._id)) cartKosar.push(diorItem._id);
          localStorage.setItem('kosar', JSON.stringify(cartKosar)); 
        } else {
          let kosarka = [];
          kosarka.push(diorItem._id);
          localStorage.setItem('kosar', JSON.stringify(kosarka)); 
        }

        setKosarSzamlalo(szam);
      }
  
  return (
  <div className="oldal">

    <h1 className="cim">DIOR</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={diorItem.kep} alt={diorItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{diorItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{diorItem.fajta}</p>
        </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{diorItem.ar} FT</p>
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
        <tr><td>Fej</td><td>{diorLeir.fej}</td></tr>
        <tr><td>Szív</td><td>{diorLeir.sziv}</td></tr>
        <tr><td>Alap</td><td>{diorLeir.alap}</td></tr>
        <tr><td>Fajtaja</td><td>{diorLeir.fajtaja}</td></tr>
        </tbody>
        </table>
        <div className='leirasok'>
          <p>Leírás {diorLeir.leiras}</p>
        </div>
  </div>
)


}



export default EgyediDior