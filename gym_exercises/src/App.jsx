import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import { FetchData } from './utils/fetchData';

import { useBodyPart } from './context_data/BodyPart';


const App = () => {


  const { bodyPart, setBodyPart } = useBodyPart();

  function loadBodyPart() {

    let response = FetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList");

    console.log('requested data', response);
    // setBodyPart(response);


  }


  useEffect(() => {
    loadBodyPart();
  }, []);

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
