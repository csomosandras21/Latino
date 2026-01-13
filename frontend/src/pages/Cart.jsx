import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import "./Cart.css"

const Cart = () => {
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
    console.log(tomb);
    
  //  let tomb = items.filter(item => item.parfum._id !== elem.parfum._id)
  //  let idTomb = []
  //  tomb.forEach(elem => {
  //       idTomb.push(elem.parfum._id);
  //  });
  //  console.log(idTomb);
   //fasz
   
   localStorage.setItem('kosar', JSON.stringify(parfumTomb));
   localStorage.setItem('darabszam', JSON.stringify(darabTomb));
   localStorage.setItem('kosarszamlalo', osszeg);
    setKosarSzamlalo(osszeg);
    setItems(tomb); 
  }

  return (
    <div>
        {items.map((item, index) => {
          return(
              <div key={index} className='kosar-kontener'>
                <h1 key={ index }>   </h1>
                <button onClick={() => kivenni(item)}>kivenni</button>
                <p>{ item.parfum.nev }</p>
                <p> {item.parfum.ar}FT</p>
                <p>{item.darab} db</p>
                <img src={item.parfum.kep} />

              </div>
          )
        })}    
    </div>
  )
}

export default Cart
