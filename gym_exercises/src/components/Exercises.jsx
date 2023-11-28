import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import {fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
console.log(exercises);


  const fetchexercisedata = async () => {
    let exerciseData = [];
    if (bodyPart === 'all') {
      exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises');
    } else {
      exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`);
    }
    setExercises(exerciseData);
  }

  useEffect(() => {
    fetchexercisedata();
  }, []);

  return (
    <Box id='exercises'
      sx={{
        mt: { lg: '110px' },
        mt: '50px',
        p: '20px'
      }}
    >
      <Typography variant='h3' mb='46px'>
        Showing results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
        {
          exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise ={exercise}/> 
          ))
        }
      </Stack>
    </Box>
  )
}

export default Exercises
