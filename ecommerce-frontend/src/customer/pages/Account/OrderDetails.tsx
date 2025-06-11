import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderDetails = () => {
    const navigate = useNavigate()
  return (
    <div>
      <Box className="space-y-4"/>

      <section className='flex flex-col gap-5 justify-center items-center'>

        <img className='w-[100px]' src="https://m.media-amazon.com/images/I/41ZGr7L-byL._AC_FMavif_UC231,231_CACC,231,231_QL58_.jpg?aicid=community-reviews" alt="" />

        <div className='text-sm space-y-1 text-center'>

            <h1 className='font-bold'>C J Enterprise</h1>

            <p><strong>Type: </strong>Banarasi Silk Saree</p>

            <p>Festive Wear Saree | Occasional Wear Saree | Traditional Wear Saree | Wedding Wear Saree | Reception Wear Saree | Butta Sarees Latest Design</p>
            {/* <p><strong>Size: </strong>M</p> */}

        </div>

        <div>
            <Button onClick={()=> navigate(`/reviews/${5}/create`)}>
                Write Review
            </Button>
        </div>

      </section>
    </div>
  )
}

export default OrderDetails
