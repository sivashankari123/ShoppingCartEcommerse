import React from 'react'
import CardCart from '../Components/CardCart'
import {useCart} from '../context/CartContext';

export const Cart = () => {
//     const Products = [
//   {
//     "id": 1,
//     "name": "Sony WH-CH510 Bluetooth Wireless",
//     "price": 149,
//     "image": "/assets/images/1001.jpg"
//   },
//   {
//     "id": 2,
//     "name": "Boat Rockerz 450",
//     "price": 49,
//     "image": "/assets/images/1002.jpg"
//   },
//   {
//     "id": 3,
//     "name": "JBL Tune 760NC",
//     "price": 179,
//     "image": "/assets/images/1001.jpg"
//   },
//   {
//     "id": 4,
//     "name": "Logitech H111 Wired",
//     "price": 39,
//     "image": "/assets/images/1004.jpg"
//   },
//   {
//     "id": 5,
//     "name": "Apple AirPods Max Bluetooth",
//     "price": 199,
//     "image": "/assets/images/1004.jpg"
//   },
//   {
//     "id": 6,
//     "name": "Zebronics Zeb-Thunder Wired",
//     "price": 29,
//     "image": "/assets/images/1001.jpg"
//   }
// ]

const {total, cart} = useCart();
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
