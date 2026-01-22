import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import favorite from '../../public/images/kedvenckep.png'
import bossAdatok from '../../public/leirasok/boss.js';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom'

const EgyediBoss = (id) => {
  const params = useParams();
  console.log(params.id);
  let [bossItem, setBossItem] = useState([]);
  let [bossLeir, setBossLeir] = useState([]);

 const {kosar, setKosar, kosarSzamlalo, setKosarSzamlalo, darabszam, setDarabszam} = useContext(CartContext);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              
              const adatok = bejovoAdatok.parfumes;
              const bosses = adatok.filter(elem => elem.marka === 'Boss')
              console.log(bosses);
              console.log(bossAdatok);
  
              const itemD = bosses.filter(elem => elem._id === params.id);
              console.log(itemD[0]);
              const leirA = bossAdatok.filter(elem => elem.nev.toUpperCase() === itemD[0].nev.toUpperCase() && elem.fajta.toUpperCase() === itemD[0].fajta.toUpperCase())
              console.log(leirA);
  
              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setBossItem(itemD[0]);
                  setBossLeir(leirA[0])
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);

      

       const kosarbaTesz = () => {
        const darab = document.getElementsByClassName('darab');
        console.log(darab[0].value);
        
        
        let szam = kosarSzamlalo + Number(darab[0].value);
        let cartKosar = JSON.parse(localStorage.getItem('kosar'));
        let cartDarabszam = JSON.parse(localStorage.getItem('darabszam'));
        
        if (cartKosar) {
          if (!cartKosar.includes(bossItem._id)) {
            cartKosar.push(bossItem._id);
            setKosar(cartKosar);
            cartDarabszam.push(Number(darab[0].value));
            setDarabszam(cartDarabszam);
            localStorage.setItem('kosar', JSON.stringify(cartKosar));
            localStorage.setItem('darabszam', JSON.stringify(cartDarabszam));
            setKosarSzamlalo(szam);
            localStorage.setItem('kosarszamlalo', szam);
          } else {
            window.alert('Ez az illatszer már szerepel a kosárban!');
          }
        } else {
            let kosarka = [];
            let darabka = [];
          kosarka.push(bossItem._id);
          setKosar(kosarka);
          darabka.push(Number(darab[0].value));
          setDarabszam(darabka);
            localStorage.setItem('kosar', JSON.stringify(kosarka)); 
            localStorage.setItem('darabszam', JSON.stringify(darabka)); 
            setKosarSzamlalo(szam);
            localStorage.setItem('kosarszamlalo', szam);
          }
      }
  
  return (
     <div className="oldal">

    <h1 className="cim">BOSS</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={bossItem.kep} alt={bossItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{bossItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{bossItem.fajta}</p>

        </div>

        <div className='kedvenc'>
        <Link to="/kedvencek"> <img src={favorite} alt="" /></Link>
        </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{bossItem.ar} FT</p>
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
        <tr><td>Fej</td><td>{bossLeir.fej}</td></tr>
        <tr><td>Szív</td><td>{bossLeir.sziv}</td></tr>
        <tr><td>Alap</td><td>{bossLeir.alap}</td></tr>
        <tr><td>Fajtaja</td><td>{bossLeir.fajtaja}</td></tr>
        </tbody>
        </table>
        <div className='leirasok'>
          <p>Leírás {bossLeir.leiras}</p>
        </div>
  </div>
)
}

export default EgyediBoss