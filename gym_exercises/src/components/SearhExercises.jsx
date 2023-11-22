import { useState, useEffect, React } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearhExercises = () => {
    return (
        <Stack
            alignItems='center'
            justifyContent='center'
            mt='37px'
            p='20px'
        >
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xm: '30px' },
                    mb: '50px',
                    textAlign: 'center'
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
                        width:{
                            
                        }
                    }}
                    height='76px'
                    value=''
                    onChange={() => { }}
                    placeholder='search exercises...'
                    type='text'
                />

            </Box>


        </Stack>
    )
}

export default SearhExercises
