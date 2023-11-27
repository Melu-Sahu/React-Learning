import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'

            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                cursor: 'pointer',
                gap: ' 47px',
                height: '280px',
            }}

            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 2000, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={Icon} alt='dumblell' style={{ width: '40px', height: '40px' }} />

            <Typography

                fontSize='24px'
                fontWeight='bold'
                textTransform='capitalize'
                color='#3A1212'
            >
                {item}
            </Typography>

        </Stack >
    )
}

export default BodyPart
