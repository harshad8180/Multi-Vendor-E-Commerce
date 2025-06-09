import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { teal } from '@mui/material/colors'
import React, { useState } from 'react'
import { colors } from '../../../data/Filter/colors'
import { useSearchParams } from 'react-router-dom'
import { discount } from '../../../data/Filter/discount'
import { price } from '../../../data/Filter/price'

const FilterSection = () => {
    const [expandColor, setExpandColor] = useState(false);

    const [expandBrand, setExpandBrand] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const handleColorToggle = () => {
        setExpandColor(!expandColor);
    }

    const handleExpandBrand = () => {
        setExpandBrand(!expandBrand);
    }

    const updateFilterParams = (e: any) => {
        const { name, value } = e.target;

        if (value) {
            searchParams.set(name, value);
        } else {
            searchParams.delete(name);
        }
        setSearchParams(searchParams);
    }

    const clearAllFilters = () => {
        searchParams.forEach((value: any, key: any) => {
            searchParams.delete(key);
        });
        setSearchParams(searchParams);
    }

    return (
        <div className='-z-50 space-y-5 bg-white'>
            <div className="flex item-center justify-between h-[40px] px-9 lg:border-r">
                <p className="text-lg font-semibold">
                    Filters
                </p>
                <Button onClick={clearAllFilters} size='small' className='text-teal-600 cursor-pointer font-semibold'>
                    clear all
                </Button>
            </div>

            <Divider />

            <div className='space-y-6 px-9'>

                {/* <section>

                    <FormControl>
                        <FormLabel
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: teal[600],
                                pb: '14px'
                            }} className='text-2xl font-semibold'
                            id='brand'>
                            Brand
                        </FormLabel>

                        <RadioGroup
                            onChange={updateFilterParams}
                            aria-labelledby='brand'
                            defaultValue=""
                            name='brand'>

                            {brands.map((item, index) => (
                                <FormControlLabel value={item.value} key={item.name} control={<Radio size='small' />} label={
                                    item.name}
                                />))}

                        </RadioGroup>

                    </FormControl>
                </section> */}

                <Divider />

                <section>
                    <FormControl>

                        <FormLabel
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: teal[600],
                                pb: '14px'
                            }} className='text-2xl font-semibold'
                            id='color'>
                            Color
                        </FormLabel>

                        <RadioGroup 
                        onChange={updateFilterParams}
                        aria-labelledby='color'
                            defaultValue=""
                            name='color'>
                            {colors.slice(0, expandColor ? colors.length : 5).map((item) => <FormControlLabel value={item.name} control={<Radio />} label={
                                <div className='flex items-center gap-3'>
                                    <p>{item.name}</p>
                                    <p style={{ backgroundColor: item.hex }} className={`h-5 w-5 rounded-full ${item.name === "White" ? "border" : ""}`}>

                                    </p>
                                </div>} />)}

                        </RadioGroup>
                    </FormControl>
                    <div>
                        <button onClick={handleColorToggle} className='text-primary-color cursor-pointer hover:text-teal-900 flex items-center'>
                            {expandColor ? "hide" : `+${colors.length - 5} more`}
                        </button>
                    </div>
                </section>

                <Divider />

                <section>
                    <FormControl>

                        <FormLabel
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: teal[600],
                                pb: '14px'
                            }} className='text-2xl font-semibold'
                            id='price'>
                            Price
                        </FormLabel>

                        <RadioGroup
                            onChange={updateFilterParams}
                            aria-labelledby='price'
                            defaultValue=""
                            name='price'>
                            {price.map((item, index) => <FormControlLabel
                                value={item.value}
                                key={item.name}
                                control={<Radio size='small' />}
                                label={item.name} />)}

                        </RadioGroup>
                    </FormControl>

                </section>

                <Divider />

                <section>
                    <FormControl>

                        <FormLabel
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: teal[600],
                                pb: '14px'
                            }} className='text-2xl font-semibold'
                            id='discount'>
                            Discount
                        </FormLabel>

                        <RadioGroup
                            onChange={updateFilterParams}
                            aria-labelledby='brand'
                            defaultValue=""
                            name='discount'>
                            {discount.map((item, index) => <FormControlLabel
                                value={item.value}
                                key={item.name} control={<Radio size='small' />} label={item.name} />)}

                        </RadioGroup>
                    </FormControl>

                </section>
            </div>
        </div>
    )
}

export default FilterSection
