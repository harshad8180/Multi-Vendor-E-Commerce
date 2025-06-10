import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star'
import { teal } from '@mui/material/colors'
import { Button, Divider } from '@mui/material'
import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material'

const ProductDetails = () => {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className='px-5 lg:px-20 pt-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <section className='flex flex-col lg:flex-row gap-5'>
          <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>

            {[1, 1, 1, 1].map((item) =>
              <img className='lg:w-full w-[50px] cursor-pointer rounded-md' src='https://m.media-amazon.com/images/I/41brQD5iTwL._SX38_SY50_CR,0,0,38,50_.jpg' alt='' />)}

          </div>
          <div className='w-full lg:w-[85%]'>
            <img className='w-full rounded-md' src="https://m.media-amazon.com/images/I/71ftvs1yo1L._SY741_.jpg" alt="" />
          </div>
        </section>

        <section>
          <h1 className='font-bold text-lg text-primary-color'>Ram Clothing</h1>

          <p className='text-gray-500 font-semibold'>women saree</p>

          <div className='flex justify-between items-center py-2 border w-[180px] px-3 mt-5'>

            <div className='flex gap-1 items-center'>

              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />

            </div>
            <Divider orientation='vertical' flexItem />
            <span>234 Ratings</span>
          </div>

          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">
                ₹ 400
              </span>

              <span className="line-through text-gray-400">
                ₹ 999
              </span>

              <span className="text-primary-color font-semibold">
                60% off
              </span>
            </div>
            <p className='text-sm'>Inclusive of all taxes, Free Shipping above 1500.</p>
          </div>

          <div className='mt-7 space-y-3'>
            <div className='flex items-center gap-4'>
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>

            <div className='flex items-center gap-4'>
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarentee</p>
            </div>

            <div className='flex items-center gap-4'>
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Fress Shipping & Returns</p>
            </div>

            <div className='flex items-center gap-4'>
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on delivery might be available </p>
            </div>


          </div>

          <div className='mt-7 space-y-2'>
            <h1>
              QUANTITY
            </h1>
            <div className='flex items-center gap-2 w-[140px] justify-between'>

              <Button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
                <Remove />
              </Button>

              <span>
                {quantity}
              </span>

              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>

            </div>
          </div>

          <div className='mt-12 flex items-center gap-5'>

            <Button
              fullWidth
              variant='contained'
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}>
              Add To Bag
            </Button>

            <Button
              fullWidth
              variant='outlined'
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}>
              Whishlist
            </Button>

          </div>

          <div className='mt-5'>
            <p>
              Care instructions: Hand Wash Only
              The saree is in purple color and net fabric
              Saree Length - 5.5 Meter
              Blouse Length - 0.8 Meter
              In Box: Saree with unstitched blouse
            </p>
          </div>


        </section>
      </div>

    </div>
  )
}

export default ProductDetails
