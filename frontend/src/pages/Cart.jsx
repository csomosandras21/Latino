import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const {kosar, setKosar} = useContext(CartContext);
  console.log(kosar);
  
  return (
    <div>
        {kosar.map(item => {
          return(
            <h1>{item.darabszam}</h1>
          )
        })}    
    </div>
  )
}

export default Cart
