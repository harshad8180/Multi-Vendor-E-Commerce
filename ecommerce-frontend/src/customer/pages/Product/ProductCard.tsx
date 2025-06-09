import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';

const images = [
    "https://m.media-amazon.com/images/I/713n+TxyfCL._SX569_.jpg",
    "https://m.media-amazon.com/images/I/91pc-g7POZL._SX569_.jpg",
    "https://m.media-amazon.com/images/I/61X+Yx14SEL._SX569_.jpg",
    "https://m.media-amazon.com/images/I/81-IrK4ZyCL._SX569_.jpg"
]
const ProductCard = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() =>{
        let interval:any
        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImage(prevImage => (prevImage + 1) % images.length);
            }, 1500); // Change image every 1.5 seconds
        } else if(interval) {
            clearInterval(interval);
            interval = null;
        }
        return () => clearInterval(interval);
    }, [isHovered]);


  return (

    <div className='group px-4 relative'>
      <div className='card'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {
            images.map((item, index) => <img key={index} className='card-media object-top' src={item} alt="" 
            style={{transform: `translateX(${(index-currentImage)* 100}%)`}}/>)
        }

        {
            isHovered && <div className='indicator flex flex-col items-center space-y-2'>
                <div className="flex gap-3">
                    <Button variant='contained' color='secondary'>
                        <Favorite sx={{color:teal[500]}}/>
                    </Button>
                    
                    <Button variant='contained' color='secondary'>
                        <ModeComment sx={{color:teal[500]}}/>
                    </Button>
                </div>

                
            </div>

        }
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

export default ProductCard
