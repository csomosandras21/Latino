import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import favorite from '../../public/images/kedvenckep.png'
import yslAdatok from '../../public/leirasok/ysl';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom'

const EgyediYsl = (id) => {
  const params = useParams();
  console.log(params.id);
  let [yslItem, setYslItem] = useState([]);
  let [yslLeir, setYslLeir] = useState([]);

   const {kosar, setKosar, kosarSzamlalo, setKosarSzamlalo, darabszam, setKedvencSzamlalo, setDarabszam} = useContext(CartContext);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const ysls = adatok.filter(elem => elem.marka === 'YSL Saint Laurent')
              console.log(ysls);
              console.log(yslAdatok);
  
              const itemY = ysls.filter(elem => elem._id === params.id);
              console.log(itemY[0]);
              const leirY = yslAdatok.filter(elem => elem.nev.toUpperCase() === itemY[0].nev.toUpperCase() && elem.fajta.toUpperCase() === itemY[0].fajta.toUpperCase())
              console.log(leirY);
  
              if (response.ok)
              {
                  console.log(itemY[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setYslItem(itemY[0]);
                  setYslLeir(leirY[0]);
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);

          const kedvencbeTesz = () => {
    let kedvencekListaja = JSON.parse(localStorage.getItem('kedvencek'));

    if (kedvencekListaja) {
      if (!kedvencekListaja.includes(yslItem._id)) {
        kedvencekListaja.push(yslItem._id);
        setKedvencSzamlalo(kedvencekListaja.length);
        localStorage.setItem('kedvencek', JSON.stringify(kedvencekListaja));
      } else {
        window.alert('Ez már a kedvencek között van.');
      }
    } else {
      let ujKedvencLista = [];
      ujKedvencLista.push(yslItem._id);
      setKedvencSzamlalo(ujKedvencLista.length);
      localStorage.setItem('kedvencek', JSON.stringify(ujKedvencLista));
    }

  };

      const kosarbaTesz = () => {
        const darab = document.getElementsByClassName('darab');
        console.log(darab[0].value);
        
        
        let szam = kosarSzamlalo + Number(darab[0].value);
        let cartKosar = JSON.parse(localStorage.getItem('kosar'));
        let cartDarabszam = JSON.parse(localStorage.getItem('darabszam'));
        
        if (cartKosar) {
          if (!cartKosar.includes(yslItem._id)) {
            cartKosar.push(yslItem._id);
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
          kosarka.push(yslItem._id);
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

    <h1 className="cim">Yves Saint Laurent</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={yslItem.kep} alt={yslItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{yslItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{yslItem.fajta}</p>
        </div>
        
         <div className='kedvenc'>
            <Link> <img src={favorite} onClick={kedvencbeTesz}/></Link>
          </div>

        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{yslItem.ar} FT</p>
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
        <tr><td>Fej</td><td>{yslLeir.fej}</td></tr>
        <tr><td>Szív</td><td>{yslLeir.sziv}</td></tr>
        <tr><td>Alap</td><td>{yslLeir.alap}</td></tr>
        <tr><td>Fajtaja</td><td>{yslLeir.fajtaja}</td></tr>
        </tbody>
        </table>
        <div className='leirasok'>
          <p>Leírás {yslLeir.leiras}</p>
    </div>
  </div>
)
}

export default EgyediYsl