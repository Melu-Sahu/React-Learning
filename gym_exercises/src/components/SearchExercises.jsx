import { useState, useEffect, React } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {  fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearhExercises = ({setExercise, bodyPart, setBodyPart}) => {


    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);


    const fetchExercisesData = async () => {
        const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList');

        setBodyParts(['all', ...bodyPartData]);
    }

    useEffect(() => {
        fetchExercisesData();

    }, []);


    const handleSearch = async () => {
        if (search) {

            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises');
            console.log('exercise Data', exercisesData);

            const searchedExercises =  exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                       || item.target.toLowerCase().includes(search)
                       || item.equipment.toLowerCase().includes(search)
                       || item.bodyPart.toLowerCase().includes(search)
              );

            // console.log("Searched Exercise Data", searchedExercises);
            // setSearch('');
            setExercise(searchedExercises);
        }
    }

    return (
        <Stack
            alignItems='center'
            justifyContent='center'
            mt='37px'
            p='20px'
        >
            <Typography
                sx={{
                    fontSize: { lg: '44px', xm: '30px' },
                    mb: '50px',
                    textAlign: 'center',
                    fontWeight: 700
                }}
            >
                Awesome exercises You <br /> should know...
            </Typography>
            <Box
                position='relative'
                mb='72px'
            >
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: {
                            lg: '800px',
                            xs: '350px'
                        },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                    height='76px'
                    value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    placeholder='search exercises...'
                    type='text'
                />

                <Button className='search-btn'
                    sx={{
                        bgcolor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xm: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: 0
                    }}

                    onClick={handleSearch}

                >
                    search
                </Button>
            </Box>


            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    p: '20px'
                }}
            >
                <HorizontalScrollbar
                data={bodyParts}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} />
            </Box>



        </Stack>
    )
}

export default SearhExercises