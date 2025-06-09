import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { teal } from '@mui/material/colors'
import React, { useState } from 'react'
import { colors } from '../../../data/Filter/colors'

const FilterSection = () => {
    const [expandColor, setExpandColor] = useState(false);

    

    const handleColorToggle = () => {
        setExpandColor(!expandColor);
    }
    return (
        <div>
            <div className="flex item-center justify-between h-[40px] px-9 lg:border-r">
                <p className="text-lg font-semibold">
                    Filters
                </p>
                <Button size='small' className='text-teal-600 cursor-pointer font-semibold'>
                    clear all
                </Button>
            </div>

            <Divider />

            <div className='space-y-6 px-9'>
                <section>
                <FormControl>
                    <FormLabel
                        sx={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: teal[500],
                            pb: '14px'
                        }} className='text-2xl font-semibold'
                        id='color'>
                        Color
                    </FormLabel>

                    <RadioGroup aria-labelledby='color'
                        defaultValue=""
                        name='color'>
                        {colors.slice(0, expandColor?colors.length:5).map((item)=> <FormControlLabel value="female" control={<Radio />} label={
                            <div className='flex items-center gap-3'>
                            <p>{item.name}</p>
                            <p style={{backgroundColor: item.hex}} className={`h-5 w-5 rounded-full ${item.name === "White"?"border":""}`}>

                            </p>
                        </div>} />)}
                       
                    </RadioGroup>
                </FormControl>
                <div>
                    <button onClick={handleColorToggle}  className='text-primary-color cursor-pointer hover:text-teal-900 flex items-center'>
                        {expandColor ? "hide" : `+${colors.length - 5} more`}
                    </button>
                </div>
            </section> 
            </div>
        </div>
    )
}

export default FilterSection
