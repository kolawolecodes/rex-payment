import { Box, useTheme } from '@mui/material';
import React from 'react'

function Example({messageHead, message,}) {
    const {palette} = useTheme();
  return (
    <Box width="100%">
        <div style={{gap:"1.5rem", display: "flex", flexDirection:"column"}} className='example_container'>
            <div className='error_icon'>
                <span>{messageHead}</span>
            </div>
            <Box 
                bgcolor={palette.grey[400]} 
                height="17rem" 
                width="100%" 
                borderRadius= "0.7rem" 
                display= "flex"
                justifyContent="center"
                alignItems="center"
                className='example_main_container'>
                <span style={{ color:"#cfd3d9", width:"70%", fontSize:"12px"}} className='error_message'>{message}</span>
            </Box>
        </div>
    </Box>
  )
}

export default Example