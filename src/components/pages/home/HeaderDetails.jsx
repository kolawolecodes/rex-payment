import React from 'react'
import { HeaderBody, SubTitle, SubTitleConte } from '../../boxes-style/page_wrapper'
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Headertitle = styled("div")(({ theme }) => ({
  display: "inline-block",
  padding:" 0",
  

  [theme.breakpoints.down("sm")]: {},

  
}));

function HeaderDetails({title, details}) {
  const {palette} = useTheme()
  return (
    <Headertitle >
        <Typography
              variant="h2" 
              fontWeight="900" 
              color= {palette.grey.main}

              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {fontSize:"1.2rem",},
              })}
            >
              {title}
            </Typography>
        <HeaderBody 
          sx={(theme) => ({
            [theme.breakpoints.only("sm")]: {fontSize:"0.9rem", },
            [theme.breakpoints.down("sm")]: {fontSize:"0.8", lineHeight:"1.5rem", marginBottom:"0.5rem" },
          })}
        >
            {details}
        </HeaderBody>
    </Headertitle>
  )
}

export default HeaderDetails