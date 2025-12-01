import React from 'react'
import { CartProducts } from '../CartProducts'
import { Peymnet } from '../Peymnet'

export const Cart = () => {
  return (
    <div className="cart-container">
      <CartProducts />
      <Peymnet />
    </div>
  )
}
