import React from 'react'
import FlexBetween from '../../boxes-style/FlexBetween'
import { Box, Typography } from '@mui/material'
import { SubTitle } from '../../boxes-style/page_wrapper'

import { styled, useTheme } from '@mui/material/styles';


export const Myflex = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "2rem",
  alignItems:"center",
  gap: "1rem",

  [theme.breakpoints.down("sm")]:{padding:"1.5rem 0.5rem" }
  }));

function LibrariesContent({image, name}) {
    const {palette} = useTheme();
  return (
        <Myflex>
          <Box 
            sx={(theme) => ({
              objectFit:"contain",
              [theme.breakpoints.down("sm")]:{ }
            })}
          >
            <img style={{width:"40px", height:"40px", objectFit:"contain"}} src={image}/>
          </Box>
            <Typography className='externallink' variant="h4" fontSize="1.2rem" fontWeight="900" color= {palette.secondary.main} 
              sx={(theme) => ({
                objectFit:"contain",
                [theme.breakpoints.down("sm")]:{fontSize:"1REM"}
              })}
            >
                {name}
            </Typography>
        </Myflex>
  )
}

export default LibrariesContent