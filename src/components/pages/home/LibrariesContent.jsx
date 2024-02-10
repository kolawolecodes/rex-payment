import React from 'react'
import FlexBetween from '../../boxes_style/FlexBetween'
import { Box } from '@mui/material'
import { SubTitle } from '../../boxes_style/page_wrapper'

function LibrariesContent({image1, name1, image2, name2}) {
  return (
    <FlexBetween width="80%">
        <Box display= "flex" align-items= "center" gap="1rem">
            <Box>
            <img style={{width:"60px"}} src={image1} alt={image1} />
            </Box>

            <SubTitle>
                <h4 style={{color:"red", fontWeight:"900"}}>{name1}</h4>
            </SubTitle>
        </Box>

        <Box display= "flex" align-items="center" gap="1rem">
            <Box className="libraryImage">
            <img style={{width:"60px"}} src={image2} alt={image2} />
            </Box>

            <SubTitle style={{color:"red"}}>
                <h4>{name2}</h4>
            </SubTitle>
        </Box>
    </FlexBetween>
  )
}

export default LibrariesContent