import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../seller/pages/SellerDashboard/Dashboard'
import Products from '../seller/pages/Products/Products'
import Orders from '../seller/pages/Orders/Orders'
import { Inventory } from '@mui/icons-material'
import AddProducts from '../seller/pages/Products/AddProducts'
import Profile from '../seller/pages/Account/Profile'
import Payment from '../seller/pages/Payment/Payment'
import Transaction from '../seller/pages/Payment/Transaction'

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/add-product' element={<AddProducts/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/account' element={<Profile/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/transaction' element={<Transaction/>} />
      </Routes>
    </div>
  )
}

export default SellerRoutes
