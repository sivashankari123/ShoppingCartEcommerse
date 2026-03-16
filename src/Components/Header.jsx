import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Header() {
  const {cart} = useCart()
  return (
    <header className='container mt-4 mb-5 flex justify-between'>
      <Link to="/">Logo</Link>

      <nav className='flex gap-4'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
        <NavLink to="/productadd">Cart</NavLink>
      </nav>

      <Link to="/Cart">Cart : {cart.length}</Link>

    </header>
  )
}

export default Header