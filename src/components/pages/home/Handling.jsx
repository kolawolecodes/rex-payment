import React from 'react'
import { SubTitleConte } from '../../boxes_style/pageWrapper'
import { Box, useTheme } from '@mui/material'

function Handling({items}) {
    const {palette} = useTheme();
  return (
    <SubTitleConte margin="1.5rem 0 0 0" width="100%">
        {/* Heading  of Hanling list */}
        <Box  display="grid" gridTemplateColumns="1fr 3fr" width="100%" fontSize="0.8rem">
            <Box>
                <h3>Param</h3>
            </Box>

            <Box>
                <h3>Description</h3>
            </Box>
        </Box>
        {/* Body of Handling list */}
        
        {
            items.map((item, index) => {
                return index % 2 === 1 ? (
                    <Box   padding="1rem" display="grid" gridTemplateColumns="1fr 3fr" width="100%" fontSize="0.9rem" key={index}>
                        <Box>{item.title}</Box>
                        <Box>{item.description}</Box>
                    </Box> 
                ) : (
                    <Box   padding="1rem" display="grid" gridTemplateColumns="1fr 3fr" width="100%" fontSize="0.9rem" key={index} bgcolor= {palette.grey[100]}>
                        <Box>{item.title}</Box>
                        <Box>{item.description}</Box>
                    </Box> 
                );
            })
        }
    </SubTitleConte>
  )
}

export default Handling