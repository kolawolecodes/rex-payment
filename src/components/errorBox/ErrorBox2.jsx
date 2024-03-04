import { Box, useTheme } from '@mui/material';
import React from 'react'
import { Errorboxstyln, Errorcomment2 } from '../boxes-style/Errorboxstyln';


function ErrorBox2({icon, message, errorTitle}) {
    const {palette} = useTheme();
  return (
    <Errorboxstyln bgcolor={palette.orange[100]}>
            {icon}
        <Errorcomment2>
            <h4 style={{ marginTop:"0" }}>{errorTitle}</h4>
            <div style={{ marginTop:"-1rem"}}>{message}</div>
        </Errorcomment2>
    </Errorboxstyln>
  )
}

export default ErrorBox2