import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { useBodyPart } from '../context_data/BodyPart';


const Home = () => {

 

  return (
    <Box>
      <HeroBanner />
      <SearchExercises  />
      {/* <Exercises  /> */}
    </Box>
  );
};

export default Home;