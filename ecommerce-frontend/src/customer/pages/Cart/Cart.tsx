import React, { useState } from 'react'
import CartItem from './CartItem'
import { Close, LocalOffer } from '@mui/icons-material'
import { teal } from '@mui/material/colors'
import { Button, IconButton, TextField } from '@mui/material'
import PricingCard from './PricingCard'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [couponCode, setCouponCode] = useState("")
  const handleChange = (e: any) => {
    setCouponCode(e.target.value)
  }

  const navigate = useNavigate()

  return (
    <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className='cartItemSection lg:col-span-2 space-y-3'>
          {[1, 1, 1, 1, 1, 1, 1].map((item) =>
            <CartItem />)}
        </div>

        <div className='col-span-1 text-sm space-y-3'>
          <div className='border rounded-md px-5 py-3 space-y-5'>


            <div className='flex gap-3 text-sm items-center'>
              <div className='flex gap-3 text-sm items-center'>

                <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />

              </div>

              <span>Apply Coupons</span>
            </div>

            {
            false
            ?
            <div className='flex justify-between items-center'>
              <TextField onChange={handleChange} id='outlined-basic' variant='outlined' size='small' />

              <Button size='small'>Apply</Button>
            </div>
            :
            <div className='flext'>
              <div className='p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center'>
                <span className="">HB30 Applied</span>
                <IconButton size='small'>
                  <Close className='text-red-500'/>
                </IconButton>
              </div>
            </div>
            }
          </div>

          <div className='border rounded-md'>
            <PricingCard/>

            <div className='p-5'>
              <Button onClick={()=> navigate('/checkout')} fullWidth variant='contained' sx={{py: "11px"}}>Buy Now</Button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
