import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import favorite from '../../public/images/kedvenckep.png'
import teljessziv from '../../public/images/teljessziv.png'
import dolceAdatok from '../../public/leirasok/dg.js'
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom'


const EgyediDg = (id) => {
  const params = useParams();
  console.log(params.id);
  let [dgItem, setDgItem] = useState([]);
  let [dolceLeir, setDgLeir] = useState([]);
  let [kedvenc, setKedvenc] = useState(0);

   const {kosar, setKosar, kosarSzamlalo, setKosarSzamlalo, darabszam, setKedvencSzamlalo, setDarabszam} = useContext(CartContext);

  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              const dgs = adatok.filter(elem => elem.marka === 'Dolce & Gabbana')
              console.log(dgs);
              console.log(dolceAdatok);
  
              const itemD = dgs.filter(elem => elem._id === params.id);
              console.log(itemD[0]);
              const leirD = dolceAdatok.filter(elem => elem.nev.toUpperCase() === itemD[0].nev.toUpperCase() && elem.fajta.toUpperCase() === itemD[0].fajta.toUpperCase())
              console.log(leirD);


              if (response.ok)
              {
                  console.log(itemD[0]);
                  // for (let i = 0; i < adatok.length; i++) {
                  //     tomb.push(<Dior key={i} dio={adatok[i]} />);
                  // }
          
                  setDgItem(itemD[0]);
                  setDgLeir(leirD[0]);

                   let kedvencekListaja = JSON.parse(localStorage.getItem('kedvencek'));

                  if (kedvencekListaja) {
                    if (kedvencekListaja.includes(itemD[0]._id)) setKedvenc(1);
                  }
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);

          const kedvencbeTesz = () => {
    let kedvencekListaja = JSON.parse(localStorage.getItem('kedvencek'));

    if (kedvencekListaja) {
      if (!kedvencekListaja.includes(dgItem._id)) {
        kedvencekListaja.push(dgItem._id);
        setKedvencSzamlalo(kedvencekListaja.length);
        localStorage.setItem('kedvencek', JSON.stringify(kedvencekListaja));
        setKedvenc(1)
      } else {
        window.alert('Ez már a kedvencek között van.');
        setKedvenc(1)
      }
    } else {
      let ujKedvencLista = [];
      ujKedvencLista.push(dgItem._id);
      setKedvencSzamlalo(ujKedvencLista.length);
      localStorage.setItem('kedvencek', JSON.stringify(ujKedvencLista));
      setKedvenc(1)
    }

  };
  const kedvencbolKivesz = () => {
          let kedvencekListaja = JSON.parse(localStorage.getItem('kedvencek'));

          let tomb = kedvencekListaja.filter(elem => elem !== dgItem._id);
          
          localStorage.setItem('kedvencek', JSON.stringify(tomb));
          setKedvenc(0);
          setKedvencSzamlalo(tomb.length)

          console.log(dgItem._id);
          console.log(tomb);
          
    }



      const kosarbaTesz = () => {
        const darab = document.getElementsByClassName('darab');
        console.log(darab[0].value);
        
        
        let szam = kosarSzamlalo + Number(darab[0].value);
        let cartKosar = JSON.parse(localStorage.getItem('kosar'));
        let cartDarabszam = JSON.parse(localStorage.getItem('darabszam'));
        
        if (cartKosar) {
          if (!cartKosar.includes(dgItem._id)) {
            cartKosar.push(dgItem._id);
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
          kosarka.push(dgItem._id);
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

    <h1 className="cim">DOLCE & GABBANA</h1>

    <div className="termek-kontener">

      {/* BAL - KÉP */}
      <div className="termek-kep">
        <img src={dgItem.kep} alt={dgItem.nev} />
      </div>

      {/* JOBB - SZÖVEG + GOMB */}
      <div className="termek-adatok">
        <div className='nev'>
        <h2 className="termek-nev">{dgItem.nev}</h2>

        </div>

        <div className='fajta'>
          <p className="termek-fajta">{dgItem.fajta}</p>
        </div>
        
<div className='kedvenc'>
          {
            kedvenc ? 
            <Link> <img src={teljessziv} onClick={kedvencbolKivesz}/></Link>
            :
            <Link> <img src={favorite} onClick={kedvencbeTesz}/></Link>
          }
          </div>
        
        <div className='ar'>
        <p>100ml</p>
        <p className="termek-ar">{dgItem.ar} FT</p>
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
        <tr><td>Fej</td><td>{dolceLeir.fej}</td></tr>
        <tr><td>Szív</td><td>{dolceLeir.sziv}</td></tr>
        <tr><td>Alap</td><td>{dolceLeir.alap}</td></tr>
        <tr><td>Fajtaja</td><td>{dolceLeir.fajtaja}</td></tr>
        </tbody>
        </table>
        <div className='leirasok'>
          <p>Leírás {dolceLeir.leiras}</p>
        </div>
  </div>
)


}



export default EgyediDg