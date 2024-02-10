import React from 'react'
import { SubTitleConte } from '../../boxes_style/pageWrapper'
import { Box, useTheme } from '@mui/material'

function Requirement({items}) {
    const {palette} = useTheme();
  return (
    <SubTitleConte margin="0.7rem 0 0 0" width="100%">
            {/* Heading  of Requirement list */}
            <Box padding="0 0 0 1rem" display="grid" gridTemplateColumns="3fr 1fr 2fr" width="100%" fontSize="0.8rem">
                <Box>
                    <h3>Param</h3>
                </Box>
                <Box>
                    <h3>required?</h3>
                </Box>
                <Box>
                    <h3>Description</h3>
                </Box>
            </Box>

            <div>
                {
                    items.map((item, index) => {
                        return index % 2 === 1 ? (
                            <Box  padding="1rem 0 1rem 1rem" display="grid" gridTemplateColumns="3fr 1fr 2fr" width="100%" fontSize="0.9rem" key={index}>
                                <Box>{item.title}</Box>
                                <Box>{item.required}</Box>
                                <Box>{item.description}</Box>
                            </Box>
                        ) : (
                            <Box  padding="1rem 0 1rem 1rem" display="grid" gridTemplateColumns="3fr 1fr 2fr" width="100%" fontSize="0.9rem" key={index} bgcolor= {palette.grey[100]}>
                            <Box>{item.title}</Box>
                                <Box>{item.required}</Box>
                                <Box>{item.description}</Box>
                            </Box>
                        );
                    })
                }    
            </div>
        </SubTitleConte>   
  )
}

export default Requirement