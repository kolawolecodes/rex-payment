import { useTheme } from '@mui/material';
import React from 'react'

function Steps({items}) {
    const {palette} = useTheme();
  return (
    <div className='step_list'>
        {
            items.map((step, index) => (
                <span key={index} className='step'><div className='step_index' style={{backgroundColor: palette.grey[100]}}><span>{index+1}</span></div>{step.title}</span>
            ))
        }
    </div>
  )
}

export default Steps