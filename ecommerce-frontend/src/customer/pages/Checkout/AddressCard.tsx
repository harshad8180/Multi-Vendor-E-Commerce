import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
    const handleChange = (event : any)=>{

    }
  return (
    <div className='p-5 border rounded-md flex'>
      <div>
        <Radio checked={true}
        onChange={handleChange}
        value={""}
        name='radio-buttton'
        />
      </div>

      <div className='space-y-3 pt-3'>
        <h1>Ecom</h1>
        <p className='w-[320px]'>
            Gandhi ward, Warthi, Maharashtra - 441905
        </p>

        <p>
            <strong>Mobile : </strong> 9112801380
        </p>

      </div>
    </div>
  )
}

export default AddressCard
