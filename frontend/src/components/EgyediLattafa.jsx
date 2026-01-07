import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import lattafaAdatok from '../../public/leirasok/lattafa.js'
import { CartContext } from '../context/CartContext.jsx';

const EgyediLattafa = (id) => {
  const params = useParams();
  console.log(params.id);
  let [lattafaItem, setLattafaItem] = useState([]);
  let [lattafaLeir, setLattafaLeir] = useState([]);

  const {kosar, setKosar, kosarSzamlalo, setKosarSzamlalo, darabszam, setDarabszam} = useContext(CartContext);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const lattafas = adatok.filter(elem => elem.marka === 'Lattafa')
              console.log(lattafas);
              console.log(lattafaAdatok);
  
              const itemL = lattafas.filter(elem => elem._id === params.id);
              console.log(itemL[0]);
              const leirL = lattafaAdatok.filter(elem => elem.nev.toUpperCase() === itemL[0].nev.toUpperCase() && elem.fajta.toUpperCase() === itemL[0].fajta.toUpperCase())
              console.log(leirL);

  
              if (response.ok)
              {
                  console.log(itemL[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setLattafaItem(itemL[0]);
                  setLattafaLeir(leirL[0])
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();

      const kosarbaTesz = () => {
        const darab = document.getElementsByClassName('darab');
        console.log(darab[0].value);
        
        let szam = kosarSzamlalo + Number(darab[0].value);
        localStorage.setItem('kosarszamlalo', szam); 
        setKosarSzamlalo(szam);
      }
          
      }, []);
      const kosarbaTesz = () => {
        const darab = document.getElementsByClassName('darab');
        console.log(darab[0].value);
        
        
        let szam = kosarSzamlalo + Number(darab[0].value);
        let cartKosar = JSON.parse(localStorage.getItem('kosar'));
        let cartDarabszam = JSON.parse(localStorage.getItem('darabszam'));
        
        if (cartKosar) {
          if (!cartKosar.includes(lattafaItem._id)) {
            cartKosar.push(lattafaItem._id);
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
          kosarka.push(lattafaItem._id);
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
        <button className="vasarlas-gomb" onClick={kosarbaTesz}>Kosárba</button>
      </div>
      </div>
</div>
    <p className='szag'>Illat leírás:</p>
      <table>
        <tbody>
        <tr><td>Fej</td><td>{lattafaLeir.fej}</td></tr>
        <tr><td>Szív</td><td>{lattafaLeir.sziv}</td></tr>
        <tr><td>Alap</td><td>{lattafaLeir.alap}</td></tr>
        <tr><td>Fajtaja</td><td>{lattafaLeir.fajtaja}</td></tr>
        </tbody>
        </table>
        <div className='leirasok'>
          <p>Leírás {lattafaLeir.leiras}</p>
    </div>
  </div>
)
}

export default EgyediLattafa