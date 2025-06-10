import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
    const handleUpdateQuantity = () =>{

    }
  return (
    <div className='border rounded-md relative'>
        <div className="p-5 flex gap-">
            <div>
                <img className='rounded-md w-[90px]' src="https://m.media-amazon.com/images/I/71ftvs1yo1L._AC_AA300_.jpg" alt="" />
            </div>

            <div className="space-y-2">
                <h1 className='font-semibold text-lg'>Soch Clothing</h1>

                <p className='text-gray-600 font-medium text-sm'><strong> Care instructions:</strong> Hand Wash Only,
The saree is in purple color and net fabric.</p>
<p>Saree Length - <strong>5.5 Meter</strong></p>
<p>Blouse Length - <strong>0.8 Meter</strong></p>


<p className='text-gray-400 text-xs'>In Box: Saree with unstitched blouse</p>
<p className='text-sm'> <strong>Sold by : </strong> SOCH APPARELS PVT LTD</p>              
<p className='text-sm text-gray-500'><strong>quantity : </strong> 5 </p>
            </div>
        </div>      
            <Divider/>

            <div className='flex justify-between items-center'>
            <div className='px-5 py-2 flex justify-between items-center'>

                <div className='flex items-center gap-2 w-[140px] justify-between'>

                    <Button onClick={handleUpdateQuantity} disabled={true}>
                        <Remove/>
                    </Button>

                    <span>{5}</span>

                    <Button onClick={handleUpdateQuantity}>
                        <Add/>
                    </Button>

                </div>

            </div>

            <div className='pr-5'>
                <p className='text-gray-700 font-medium'>₹799</p>
            </div>

            </div>

            <div className="absolute top-1 right-1 ">
                <IconButton color='primary'>
                    <Close/>
                </IconButton>
            </div>

    </div>
  )
}

export default CartItem
