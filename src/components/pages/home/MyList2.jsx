import { Box, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { Step, Stepindex, Stepwrap } from '../../style/StepStyles';



function MyList2({items}) {
    const {palette} = useTheme();
  return (
    <Stepwrap className='testMode_list'>
        {
            items.map((item, index) => (
                <Step className='testMode_list_unit' key={index}>
                    <Stepindex bgcolor={palette.grey[100]}>{index+1}</Stepindex>
                    <span className='testMode_unit_details'>{item.title}<span>{item.details}</span></span>    
                </Step>
            ))
        }
    </Stepwrap>
  )
}

export default MyList2