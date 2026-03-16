import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Cart, ProductAdd, ProductView } from '../Pages'
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/ProductAdd" element={<ProductAdd />} />
      <Route path="/ProductView/:id" element={<ProductView />} />

      
    </Routes>
  )
}

export default AllRoutes