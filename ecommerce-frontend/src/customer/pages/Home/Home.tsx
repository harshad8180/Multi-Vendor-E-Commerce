import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import { Button } from '@mui/material'
import { Storefront } from '@mui/icons-material'

const Home = () => {
    return (
        <>
            <div className='space-y-5 lg:space-y-10 relative pb-20'>
                <ElectricCategory />
                <CategoryGrid />


                <div className='pt-10'>
                    <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center'>
                        TODAY'S DEAL</h1>
                    <Deal />
                </div>

                <section className='py-20'>
                    <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center'>
                        SHOP BY CATEGORY</h1>
                    <ShopByCategory />
                </section>

                <section className=' lg:px-20 relative h-[200px] lg:h-[500px] object-cover'>
                    <img className='w-full h-full' src="https://img.freepik.com/premium-photo/online-shopping-omnichannel-marketing-seamless-customer-experience-faas_31965-418270.jpg?ga=GA1.1.886708427.1749300259&semt=ais_items_boosted&w=740" alt="" />

                    <div className='absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3 text-white'>
                        <h1>
                            Sell Your Product
                        </h1>
                        <p className='text-lg md:text-2xl'>With <span className='logo'>Ecommerce Bazaar</span></p>

                        <div className='pt-6 flex justify-center'>
                            <Button startIcon={<Storefront />} variant='contained' size='large' className='bg-primary-color text-white hover:bg-secondary-color'>
                                Become Seller
                            </Button>
                        </div>

                    </div>
                </section>

            </div>
        </>
    )
}

export default Home
