import { Box, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function Helpful() {
    const {palette} = useTheme();
  return (
    <div className='helpful'>
                <div className='helpful_question_container'>
                    <span className='helpful_question'>Did you find this page helpful</span>
                </div>
                <div className='answer_container'>
                    <div className='answer_yes_container'>
                        <Link to='/' className='yesAnsNav'>
                            <Box bgcolor={palette.grey[600]} className='answer_yes'>Yes, I did</Box>
                        </Link>
                    </div>
                    <div className='answer_no_container'>
                        <Box border="2px solid" borderColor={palette.grey[300]} className='answer_no'>No, I did'nt</Box>
                    </div>
                </div>
            </div>
  )
}

export default Helpful