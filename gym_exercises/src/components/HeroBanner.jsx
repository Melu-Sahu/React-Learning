import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
        display: 'flex'
      }}
      position='relative' p='20px'>
      <Box>
        <Typography color='#FF2625'
          fontWeight='600'
          fontSize='26px' >
          Fitness Club
        </Typography>
        <Typography
          fontWeight='700'
          sx={{
            fontSize: { lg: '44px', xs: '40px' }
          }}>
          Sweat, Smile <br /> & Repeat
        </Typography>
        <Typography
          fontSize='22px'
          lineHeight='35px'
          mb={3}>
          Checkout the most effective exercises...
        </Typography>

        <Button
          variant='contained'
          color='error'
          href='#exercises'
        >
          Explore Exercises
        </Button>

      </Box>
      <img src={HeroBannerImage}
        alt='banner'
        className='hero-baner-img'
      />

    </Box>
  )
}

export default HeroBanner