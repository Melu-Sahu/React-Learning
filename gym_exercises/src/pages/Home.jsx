import React, { useState } from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearhExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  const [bodyPart, setBodyPart]= useState('all');
  const [exercise, setExercise] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearhExercises setExercise={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
      <Exercises setExercises={setExercise} bodyPart={bodyPart} exercises={exercise} />
    </Box>
  )
}

export default Home
