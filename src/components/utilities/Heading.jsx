import { Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

export const Homeheader = styled("div")(({ theme }) => ({
  display: "inline-block",
  
  
  [theme.breakpoints.down("sm")]:{},
}));

function Heading({title}) {
    const {palette} = useTheme()
  return (
    <Homeheader>
            <Typography
              variant="h2" 
              fontWeight="900" 
              color= {palette.grey.main}
              sx={(theme) => ({
                [theme.breakpoints.only("sm")]:{fontSize:"1.3rem"},
                [theme.breakpoints.down("sm")]: {fontSize:"1.2rem",},
              })}
            >
              {title}
            </Typography>
        </Homeheader>
  )
}

export default Heading