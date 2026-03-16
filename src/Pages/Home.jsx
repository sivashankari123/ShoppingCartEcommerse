import React, {useState, useEffect} from 'react'
import Product from '../Components/Product'

export const Home = () => {
  const [Products, SetstoreProducts] = useState([]);
   useEffect(()=>{
      const storedData = JSON.parse(localStorage.getItem("Products")) || []
      SetstoreProducts(storedData)
      },[])
      
  return (
    <div className='container'>
      <div className='row'>
        {Products.map((product) => (
          <div key={product.id} className='col-4 mb-4'>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
