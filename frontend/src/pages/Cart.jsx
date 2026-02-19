import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import "./Cart.css"
import { Link } from 'react-router-dom';

const Cart =() => {
  const [items, setItems] = useState([]);
  const { kosar, setKosarSzamlalo, darabszam } = useContext(CartContext);
  
  useEffect(() => {
          const szerverrolBetolt = async () => {
              const response = await fetch('http://localhost:3500/api/parfumes-frontend');
              const bejovoAdatok = await response.json();
              
              const adatok = bejovoAdatok.parfumes;
              console.log(adatok);
              console.log(kosar);
              
              if (response.ok)
              {
                let tomb = [];
                  for (let i = 0; i < kosar.length; i++) {
                    console.log(kosar[i]);
                    const atad = adatok.filter(elem => elem._id === kosar[i])
                    console.log(atad);
                    
                    tomb.push({ parfum: atad[0], darab: darabszam[i]});
                  }
                  console.log(tomb);

                  setItems(tomb);
              } 
              else console.log(adatok.msg);
  
          }
  
          szerverrolBetolt();
          
      }, [kosar, darabszam]);


      const handleCheckout = async () => {
        if (items.length === 0) { 
          alert("Üres a kosarad!");
          return;
        }

        try {
          const res = await fetch("http://localhost:3500/api/stripe/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: items }) 
          });

          const data = await res.json();
          console.log(data);
          

          if (data.url) {
            window.location.href = data.url;
          } else {
            console.error("Hiba: Nem érkezett URL a szervertől.");
          }
        } catch (error) {
          console.error("Hálózati hiba:", error);
        }
      };

  const kivenni = (elem) => {
    console.log(elem);
    console.log(items);
    
    let tomb = [];
    let parfumTomb = [];
    let darabTomb = [];
    let osszeg = 0;
    for (let i = 0; i < items.length; i++) {
      if (!(items[i].parfum._id === elem.parfum._id)) {
        parfumTomb.push(elem.parfum._id);
        darabTomb.push(darabszam[i]);

        osszeg += Number(darabszam[i]);
        tomb.push({parfum: items[i].parfum, darab: darabszam[i]});
      }
    }
    
   localStorage.setItem('kosar', JSON.stringify(parfumTomb));
   localStorage.setItem('darabszam', JSON.stringify(darabTomb));
   localStorage.setItem('kosarszamlalo', osszeg);
    setKosarSzamlalo(osszeg);
    setItems(tomb); 
  }

  // SZÁMÍTÁSI LOGIKA: Itt számoljuk össze az árakat a darabszám alapján
  const vegosszeg = items.reduce((total, item) => {
    return total + (Number(item.parfum.ar) * Number(item.darab));
  }, 0);

  return (
    <div>
        {items.length === 0 ?
            <div className='szoveg'>
              <p>Nincs még semmi a kosárban!</p>
            </div>
           : 
            items.map((item, index) => {
        return(
            <div key={index} className='kosar-kontener'>
              {/* <h1 key={ index }>   </h1> */}
              <img src={item.parfum.kep} alt={item.parfum.nev} />
              <p>{ item.parfum.nev }</p>
              <p> {item.parfum.ar}FT</p>
              <p>{item.darab} db</p>
              <button onClick={() => kivenni(item)}>kivenni</button>
            </div>
          )})
        }
        
        <div className='teljesOsszeg'>
        </div>
        <div className='gombok'>
          <button> <Link to='/'>Vissza a főoldara</Link> </button>
          <p><strong>Fizetendő végösszeg: {vegosszeg} Ft</strong></p>
          <button onClick={handleCheckout}> <Link>Tovább a fizetéshez</Link> </button>
          </div>    
    </div>
  )
}

export default Cart;