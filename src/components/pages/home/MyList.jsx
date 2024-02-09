import { Box, useTheme } from '@mui/material'
import React from 'react'

function MyList({items}) {
    const {palette} = useTheme();
  return (
    <div className='testMode_list'>
        {
            items.map((item, index) => (
                <span className='testMode_list_unit' key={index}>
                    <Box className='test_list_index' bgcolor={palette.grey[100]}>
                        <span>{index+1}</span>
                    </Box>
                    <span className='testMode_unit_details'>{item.title}:<span>{item.details}</span></span>
                </span>
            ))
        }
    </div>
  )
}

export default MyList