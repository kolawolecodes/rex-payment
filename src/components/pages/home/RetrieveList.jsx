import { Box, useTheme } from '@mui/material'
import React from 'react'

function RetrieveList({ items}) {
    const {palette} = useTheme();
  return (
    <div className='testMode_list'>
        {
            items.map((item, index) => (
                <span className='testMode_list_unit' key={index}>
                    <Box className='test_list_index' bgcolor={palette.grey[100]}>
                        <span>{index+1}</span>
                    </Box>
                    <span className='retrieveAPI_title'>{item.title}</span>
                </span>
            ))
        }
    </div>
  )
}

export default RetrieveList