import { Box } from '@mui/material'
import {styled } from '@mui/material/styles'
import React from 'react'

const Blank = styled(Box)(({theme}) => ({
    position:"absolute",
    top:"0",
     minWidth:"100vw",
     width:"100%",
    minHeight:"100vh",
     height:"100%",
     bgcolor:"grey",
     opacity:"0.9",
      zIndex:"9" 
}))
function BlankPage() {
  return (
    <Blank bgcolor="grey"
    sx={(theme) => ({
        [theme.breakpoints.up("md")]: {display:"none"},
        [theme.breakpoints.up("sm")]: {display:"block"},
      })}
    >

    </Blank>
  )
}

export default BlankPage