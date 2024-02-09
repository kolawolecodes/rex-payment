import React from 'react'
import "./package.css"
import { Box, useTheme } from '@mui/material'

function Package({title, content, blank}) {
    const {palette} = useTheme();
  return (
    <div className='package_container'>
        <Box  
            width= "100%" 
            className='paackage_blank'
            height= "200px" 
            borderRadius= "1rem"
            bgcolor= {palette.grey[100]}
            borderColor= {palette.grey[100]}
            border= "0.2px solid"
            >
            {blank} 
        </Box>
        <div className='sdk_title'>
            <h3>{title}</h3>
        </div>
        <div className='package_content'>
            <span>{content}</span>
        </div>
    </div>
  )
}

export default Package