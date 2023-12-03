import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import { useBodyPart } from '../context_data/BodyPartContext';
import { FetchData } from '../utils/fetchData';


export const LeftArrow = () => {

  function scrollPrev(){
    window.scrollTo({scroll:'smooth', left:500})
  }

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

export const RightArrow = () => {

  function scrollNext(){
    window.scrollTo({scroll:'smooth', right:500})
  }

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const HorizontalScrollbar = () => {
  const { bodyParts, setBodyParts } = useBodyPart();

  const bodyPartsData = async () => {
    const res = await FetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList");
    setBodyParts(['all', ...res]);
  }

  useEffect(() => {
    bodyPartsData();
  }, []);

  let array = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div style={{
      width:'100%',
      display:'flex',
      overflow:'scroll'
      
    }}>
      <LeftArrow />
    {bodyParts.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
        
      >
        <BodyPart item={item} />
      </Box>
    ))}
    <RightArrow/>
  </div>
  )
};

export default HorizontalScrollbar;




