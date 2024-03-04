import { Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'
import { Step, Stepindex, Stepwrap } from '../../style/StepStyles';




function Steps({items}) {
    const {palette} = useTheme();
  return (
    <Stepwrap>
        {
            items.map((step, index) => (
                <Step key={index}>
                  <Stepindex bgcolor={palette.grey[100]}>
                    {index+1}
                  </Stepindex>
                    {step.title}
                </Step>
            ))
          }
    </Stepwrap>
  )
}

export default Steps
{/* <div className='step_index' style={{backgroundColor: palette.grey[100]}}>
  <span>{index+1}</span>
</div> */}