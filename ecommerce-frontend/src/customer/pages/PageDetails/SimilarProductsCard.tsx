import React from 'react'

const SimilarProductsCard = () => {
  return (
    <div className='group px-4 relative'>
      <div className='card'>

        
            <img  className='card-media object-top' src={"https://m.media-amazon.com/images/I/61L44S3oDHL._AC_UF480,600_SR480,600_.jpg"} alt="" 
            />
        

        
      </div>

        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
                    <div className="name">
                        <h1>Niky</h1>
                        <p>Blue T-Shirt</p>
                    </div>

                    <div className="price flex items-center gap3">
                        <span className="font-sans text-gray-800">
                            ₹ 400
                        </span>

                        <span className="thin-line-through text-gray-400">
                            ₹ 999
                        </span>

                        <span className="text-primary-color font-semibold">
                            60% off
                        </span>
                    </div>
                </div>

    </div>
  )
}

export default SimilarProductsCard
