import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'

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

  return (
    <div>
        {items.map((item, index) => {
          return(
            <h1 key={ index }>{ item.parfum.nev } és {item.darab} darab</h1>
          )
        })}    
    </div>
  )
}

export default Cart
