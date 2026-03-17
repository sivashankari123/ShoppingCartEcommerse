import React from 'react'
import CardCart from '../Components/CardCart'
import {useCart} from '../context/CartContext';

export const Cart = () => {
const {id, total, cart} = useCart();
  return (
    <div className='container'>
      <h2 className='text-center'>Total Items {cart.length}: ${total} Price</h2><br></br>
      {cart.map((product) => (
          <div key={product.id} className='col-12 mb-4'>
            <CardCart product={product}/>
          </div>
        ))}
    </div>
  )
}
