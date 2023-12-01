import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { useExercises } from '../context_data/ExerciseData';
import { FetchData } from '../utils/fetchData';

const Exercises = () => {
    const {exercises, setExercises} = useExercises();
    const [bodyPart, setBodyPart]= useState('all');


    const fetchExercisesData = async () => {
        let exercisesData;

       if (bodyPart === 'all') {
        exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises?limit=500');
      } else {
        exercisesData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`);
      }
      setExercises(exercisesData);
    };

  useEffect(() => {
    

    // fetchExercisesData();
  }, [bodyPart]);

  

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard />    
        ))}
      </Stack>
      
    </Box>
  );
};

export default Exercises;