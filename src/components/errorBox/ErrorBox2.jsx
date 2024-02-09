import { Box, useTheme } from '@mui/material';
import React from 'react'


function ErrorBox2({icon, message, errorTitle}) {
    const {palette} = useTheme();
  return (
    <Box bgcolor={palette.orange[100]} className='errorWrapper'>
        <div className='errorContainer'>
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

export default ErrorBox2