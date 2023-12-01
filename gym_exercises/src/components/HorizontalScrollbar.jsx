import React, { useContext, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import { useBodyPart } from '../context_data/BodyPartContext';


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = () => {
  const {bodyParts, setBodyParts} = useBodyPart();

  
  const fetchExercisesData = async () => {
    const bodyPartsData = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList');
    setBodyParts(['all', ...bodyPartsData]);

};

useEffect(() => {
    fetchExercisesData();
}, []);


  const [bodyPart, setBodyPart] = useState('');

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      
      {bodyParts.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          display='flex'
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <Exercise item={item}/>}

          {/* <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> */}
          
        </Box>
      )
      )}

    </ScrollMenu>
  );
};

export default HorizontalScrollbar;