import { Box, useTheme } from '@mui/material';
import React from 'react'
import { Errorboxstyln, NoteBoxComment } from '../boxes-style/Errorboxstyln';

function NoteBox({icon, message}) {
    const {palette} = useTheme();
  return (
    <Errorboxstyln bgcolor={palette.orange[100]}>
        {icon}
        <NoteBoxComment>
            {message}
        </NoteBoxComment>
  </Errorboxstyln>
  
  )
}

export default NoteBox
