import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
    return (
        <div className='flex justify-between'>
            <Grid container spacing={9}>
                <Grid size={{ xs: 1 }} >
                    <Box>
                        <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}>
                            E
                        </Avatar>
                    </Box>
                </Grid>

                <Grid size={{ xs: 9 }}>
                    <div className="space-y-2">
                        <div>
                            <p className='font-semibold text-lg'>Ecommerce</p>

                            <p>2025-06-10T19:50:09.47833</p>
                        </div>
                    </div>

                    <Rating
                        readOnly value={4.5} precision={.5}
                    />

                    <p>value for money product, great product</p>

                    <div>
                        <img className='w-24 h-24 object-cover' src="https://m.media-amazon.com/images/I/61YQVwFbQiL._SY88.jpg" alt="" />
                    </div>

                </Grid>

            </Grid>
            <div>
                <IconButton>
                    <Delete sx={{ color: red[700] }} />
                </IconButton>
            </div>
        </div>
    )
}

export default ReviewCard
