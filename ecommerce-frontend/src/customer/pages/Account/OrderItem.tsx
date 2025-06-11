import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white space-y-4 border rounded-md cursor-pointer'>

        <div className='flex items-center gap-5'>

            <div>
                <Avatar sizes='small' sx={{bgcolor:teal[500]}}>
                    <ElectricBolt/>
                </Avatar>
            </div>

            <div>
                <h1 className="font-bold text-primary-color">PENDING</h1>
                <p>Arriving By Thu, 12 Jun</p>
            </div>
        </div>

        <div className='p-5 bg-teal-50 flex gap-3'>
            <div>
                <img
                className='w-[70px]' src="https://m.media-amazon.com/images/I/41ZGr7L-byL._AC_FMavif_UC231,231_CACC,231,231_QL58_.jpg?aicid=community-reviews" alt="" />
            </div>

            <div className='w-full space-y-2'>
                <h1 className='font-bold'>C J Enterprise</h1>

                <p><strong>Type: </strong>Banarasi Silk Saree</p>

                <p>Festive Wear Saree | Occasional Wear Saree | Traditional Wear Saree | Wedding Wear Saree | Reception Wear Saree | Butta Sarees Latest Design</p>
            </div>
        </div>
      
    </div>
  )
}

export default OrderItem
