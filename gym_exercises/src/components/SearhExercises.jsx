import { useState, useEffect, React } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';


const SearhExercises = () => {


    const [search, setSearch ]  = useState("");
    const handleSearch = async ()=>{
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);


            await console.log(exercisesData);
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
                            xs:'350px'
                        },
                        backgroundColor:'#fff',
                        borderRadius:'40px'
                    }}
                    height='76px'
                    value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    placeholder='search exercises...'
                    type='text'
                />

                <Button className='search-btn'
                    sx={{
                        backgroundColor:'#ff2625',
                        color:'#fff',
                        textTransform:'none',
                        width:{lg:'175px', xm:'80px'},
                        fontSize:{lg:'20px',xs:'14px'},
                        height: '56px',
                        position:'absolute',
                        right:0
                    }}

                    onClick={handleSearch}

                >
                    search
                </Button>



            </Box>




        </Stack>
    )
}

export default SearhExercises