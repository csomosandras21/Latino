import React, { useEffect, useState } from 'react';
import './Kedvencek.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Kedvencek = () => {
  const [kedvencTermekek, setKedvencTermekek] = useState([]);
  const { setKedvencSzamlalo } = useContext(CartContext);
  
  useEffect(() => {
    const betoltes = async () => {
      // 1. Megszerezzük az ID-kat a localStorage-ból
      const mentettIdk = JSON.parse(localStorage.getItem('kedvencek')) || [];
      console.log(mentettIdk);
      
      if (mentettIdk.length > 0) {
        // 2. Lekérjük az összes terméket a szerverről (mint az Egyedi oldalon)
        const response = await fetch('http://localhost:3500/api/parfumes-frontend');
        const adatok = await response.json();
        const mindenParfum = adatok.parfumes;

        // 3. Csak azokat tartjuk meg, amiknek az ID-ja benne van a kedvencekben
        const szurtKedvencek = mindenParfum.filter(p => mentettIdk.includes(p._id));
        
        // setKedvencTermekek(mentettIdk);
        setKedvencTermekek(szurtKedvencek);
      }
    };

    betoltes();
  }, []);

  const eltavolit = (id) => {
    const ujLista = kedvencTermekek.filter(p => p._id !== id);
    setKedvencTermekek(ujLista);
    const ujIdLista = ujLista.map(p => p._id);
    setKedvencSzamlalo(ujIdLista.length);
    localStorage.setItem('kedvencek', JSON.stringify(ujIdLista));
  };

  return (
    <div className="kedvencek-oldal">
      <h1>Kedvenc illataim</h1>
      {kedvencTermekek.length === 0 ? (
        <p>Még nincsenek kedvenceid.</p>
      ) : (
        <div className="kedvencek-lista">
          {kedvencTermekek.map(termek => (
            <div key={termek._id} className="kedvenc-kartya">
              <img src={termek.kep} alt={termek.nev} />
              <h3>{termek.marka} - {termek.nev}</h3>
              <p>{termek.ar} FT</p>
              <button onClick={() => eltavolit(termek._id)}>Eltávolítás</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Kedvencek;