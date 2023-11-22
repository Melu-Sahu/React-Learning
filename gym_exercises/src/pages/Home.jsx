import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearhExercises from '../components/SearhExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearhExercises />
      <Exercises />      
    </Box>
  )
}

export default Home
