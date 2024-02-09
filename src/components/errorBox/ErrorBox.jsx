import { Box, useTheme } from '@mui/material';
import React from 'react'
import { ErrorBoxStyln, ErrorComment } from '../boxes_style/ErrorBoxStyln';

function ErrorBox({icon, message, errorTitle}) {
    const {palette} = useTheme();
  return (
    <Box bgcolor={palette.grey[100]} className='errorWrapper'>
    <div style={{marginTop:"0.5rem"}} className='errorContainer'>
        <div>
            <span>{icon}</span>
        </div>
        <div className='errorDetailsContainer'>
            <div>
                <h4>{errorTitle}</h4>
            </div>
            <span className='errorMessage'>{message}</span>
        </div>
    </div>
  </Box>
  
  )
}

export default ErrorBox