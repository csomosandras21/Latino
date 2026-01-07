import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import "./Cart.css"

const Cart = () => {
  const [items, setItems] = useState([]);
  const { kosar, darabszam } = useContext(CartContext);
  
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
                    const atad = adatok.filter(elem => elem._id === kosar[i])
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
    
   let tomb = items.filter(item => item.parfum._id !== elem.parfum._id)
  //  localStorage.setItem('kosar', JSON.stringify(tomb));
   console.log(tomb);
   
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
