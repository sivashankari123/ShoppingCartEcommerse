import React from 'react'
import { useCart } from '../context/CartContext'
function CardCart({product}) {
  const {id, productname, price, image} = product
  const {removeFromCart} = useCart()
  return (
    <div>
      <div className='card p-3'>
        <div className=' flex items-start justify-between'>
          <div className='col-2'><img src={image} alt={productname} className='img-fluid w-full'/></div>
          <div className='col-8'><h3 className='ml-3'>{productname}</h3></div>
          <div className='col-4'>
            <div className='col-12'><h5>${price}</h5></div>
            <button className='btn btn-danger' onClick = {() => removeFromCart(product)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCart