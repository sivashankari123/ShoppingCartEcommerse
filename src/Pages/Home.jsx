import React from 'react'
import Product from '../Components/Product'

export const Home = () => {
  const Products = [
  {
    "id": 1,
    "name": "Sony WH-CH510 Bluetooth Wireless",
    "price": 149,
    "image": "/assets/images/1001.jpg"
  },
  {
    "id": 2,
    "name": "Boat Rockerz 450",
    "price": 49,
    "image": "/assets/images/1002.jpg"
  },
  {
    "id": 3,
    "name": "JBL Tune 760NC",
    "price": 179,
    "image": "/assets/images/1001.jpg"
  },
  {
    "id": 4,
    "name": "Logitech H111 Wired",
    "price": 39,
    "image": "/assets/images/1004.jpg"
  },
  {
    "id": 5,
    "name": "Apple AirPods Max Bluetooth",
    "price": 199,
    "image": "/assets/images/1004.jpg"
  },
  {
    "id": 6,
    "name": "Zebronics Zeb-Thunder Wired",
    "price": 29,
    "image": "/assets/images/1001.jpg"
  }
]
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
