import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
function Product({product}) {
  const {addTocart, cart, removeFromCart} = useCart();
  const {id, name, price, image} = product
  const [isInCart, setIsIncart] = useState(false)
  useEffect (()=> {
    const productListInCart = cart.find(cart => cart.id == id)
    if (productListInCart){
      setIsIncart(true)
    }
    else{
      setIsIncart(false)
    }
  }, [cart, id])
  return (
    <div className='card p-3'>
      <div><img src={image} alt={name} className='img-fluid w-full'/></div>
      <h6 className='mt-3'>{name}</h6>
      <div className='flex justify-between'>
        <span>${price}</span>
        {isInCart ? (<button className='btn btn-danger' onClick={() => removeFromCart(product)}>Remove</button>) :
        (<button className='btn btn-primary' onClick={() => addTocart(product)}>Add</button>)
        }
      </div>
    </div>
  )
}

export default Product