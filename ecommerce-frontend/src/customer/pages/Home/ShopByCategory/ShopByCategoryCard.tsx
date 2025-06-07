import React from 'react'
import './ShopByCategory.css'

const ShopByCategoryCard = () => {
    return (
        <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
            <div className='custome-border lg:w-[249px] lg:h-[249px] w-[150px] h-[150px] rounded-full'>
                <img className='rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full' src="https://img.freepik.com/free-photo/chair-table-with-modern-decoratives-living-room_181624-46734.jpg?ga=GA1.1.886708427.1749300259&semt=ais_items_boosted&w=740" alt="" />
                <h1>Chair & Table</h1>
            </div>
        </div>
    )
}

export default ShopByCategoryCard
