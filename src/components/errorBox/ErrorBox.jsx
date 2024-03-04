import { Box, useTheme } from '@mui/material';
import React from 'react'
import { Errorboxstyln, Errorcomment } from '../boxes-style/Errorboxstyln';
// import { Errorboxstyln, Errorcomment } from '../boxes-style/Errorboxstyln';

function ErrorBox({icon, message}) {
    const {palette} = useTheme();
  return (
    <Errorboxstyln bgcolor={palette.grey[100]}>
            {icon}
        <Errorcomment className='errorDetailsContainer'>
            {message}
        </Errorcomment>
  </Errorboxstyln>
  
  )
}

export default ErrorBox
