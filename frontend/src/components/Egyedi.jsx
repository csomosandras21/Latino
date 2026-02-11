import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Egyedi.css';
import favorite from '../../public/images/kedvenckep.png'
import teljessziv from '../../public/images/teljessziv.png'
import osszesAdatok from '../../public/leirasok/osszes';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'

const Egyedi= (id) => {
  const params = useParams();
  console.log(params.id);
  let [item, setItem] = useState({});
  let [user, setUser] = useState({});//
  let [osszesLeir, setOsszesLeir] = useState([]);
  let [kedvenc, setKedvenc] = useState(0);

   const {kosar, setKosar, kosarSzamlalo, setKosarSzamlalo, darabszam, setKedvencSzamlalo, setDarabszam} = useContext(CartContext);

  useEffect(() => {
          const userL = JSON.parse(localStorage.getItem('user'))//
          console.log(userL);//
          
          setUser(userL);//
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
                  
                  setItem(itemD[0]);
                  setOsszesLeir(leirO[0])
                  let kedvencekListaja = JSON.parse(localStorage.getItem('kedvencek'));
                  if (kedvencekListaja) {
                    if (kedvencekListaja.includes(itemD[0]._id)) setKedvenc(1);
                  }
                  
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, []);
       
    const kedvencbeTesz = async () => {//
      let kedvencekListaja = JSON.parse(localStorage.getItem('kedvencek'));
      let backendbe = []; // Csaba

    if (kedvencekListaja) {
      if (!kedvencekListaja.includes(item._id)) {
        kedvencekListaja.push(item._id);
        backendbe = kedvencekListaja; // Csaba
        setKedvencSzamlalo(kedvencekListaja.length);
        localStorage.setItem('kedvencek', JSON.stringify(kedvencekListaja));
        setKedvenc(1)
      } else {
        window.alert('Ez már a kedvencek között van.');
        setKedvenc(1)
      }
    } else {
      let ujKedvencLista = [];
      ujKedvencLista.push(item._id);
      backendbe = ujKedvencLista; // Csaba
      setKedvencSzamlalo(ujKedvencLista.length);
      localStorage.setItem('kedvencek', JSON.stringify(ujKedvencLista));
      setKedvenc(1)
    }

   const response = await fetch(`http://localhost:3500/api/users-frontend/${user._id}`, {
      method: 'PATCH',
      headers: {
        'content-Type': 'application/json'
      },
     body: JSON.stringify({ kedvencek: backendbe }) // Csaba
    }); //
  };
  
    const kedvencbolKivesz = async() => {
          let kedvencekListaja = JSON.parse(localStorage.getItem('kedvencek'));

          let tomb = kedvencekListaja.filter(elem => elem !== item._id);
          
          localStorage.setItem('kedvencek', JSON.stringify(tomb));
          setKedvenc(0);
          setKedvencSzamlalo(tomb.length)

          console.log(item._id);
          console.log(tomb);

          const response = await fetch(`http://localhost:3500/api/users-frontend/${user._id}`, {
      method: 'PATCH',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({kedvencek: tomb}) // Csaba
    }); //
          
    }
    


    const kosarbaTesz = () => {
        const darab = document.getElementsByClassName('darab');
        console.log(darab[0].value);
        
        
        let szam = kosarSzamlalo + Number(darab[0].value);
        let cartKosar = JSON.parse(localStorage.getItem('kosar'));
        let cartDarabszam = JSON.parse(localStorage.getItem('darabszam'));
        
        if (cartKosar) {

          if (!cartKosar.includes(jpgItem._id)) {
            cartKosar.push(jpgItem._id);

          if (!cartKosar.includes(item._id)) {
            cartKosar.push(item._id);
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

          kosarka.push(jpgItem._id);
          kosarka.push(item._id);
          setKosar(kosarka);
          darabka.push(Number(darab[0].value));
          setDarabszam(darabka);
            localStorage.setItem('kosar', JSON.stringify(kosarka)); 
            localStorage.setItem('darabszam', JSON.stringify(darabka)); 
            setKosarSzamlalo(szam);
            localStorage.setItem('kosarszamlalo', szam);
          }
      }
    }

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
        <p className="termek-ar">{item.ar} FT</p>
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

export default Egyedi;