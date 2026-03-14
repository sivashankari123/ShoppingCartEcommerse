import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Cart } from '../Pages'
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  )
}

export default AllRoutes