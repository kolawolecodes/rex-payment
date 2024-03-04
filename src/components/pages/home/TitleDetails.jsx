import React, { forwardRef } from 'react'
import { SubContent, SubTitle, SubTitleConte } from '../../boxes-style/page_wrapper'

import { styled } from '@mui/material/styles';


export const Homeheader = styled("div")(({ theme }) => ({
    display: "inline-block",
    
  }));

function TitleDetails({title, details,}, ref) {
  return (
    <Homeheader >
        <SubTitle  ref={ref}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {fontSize:"0.7rem", },
            [theme.breakpoints.only("sm")]: {fontSize:"0.7rem", }
          })}
        >
            <h2>{title}</h2>
        </SubTitle>
        <SubContent >
          {details}
        </SubContent> 
    </Homeheader>
  )
}

export default forwardRef (TitleDetails)