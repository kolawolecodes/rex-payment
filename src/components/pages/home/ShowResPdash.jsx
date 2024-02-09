import { Box, useTheme } from '@mui/material'
import React from 'react'
import FlexBetween from '../../Boxes_style/FlexBetween'
import styled from '@emotion/styled';
import { javaMessage } from '../../data/sideStepData';

const HtmlJavaStylin = styled(Box)({
  width:"70%",
  height: "270px",
 position: "relative",
  border:"0.04rem solid",
  borderRadius:"0.7rem",
  display: "flex",
  justifyContent:"center",
  alignItems:"center",
})

function ShowResPdash({curls}) {
  const { palette } = useTheme();
  return (
    <div>
      <FlexBetween width="150px" margin="1rem 0 1.5rem 1rem" position="absolute">
        <Box>
            <span style={{fontWeight:500, background:"#cfd3d9", padding:"0.5rem 1.2rem", borderRadius:"0.5ren"}}>{curls}</span>
        </Box>
      </FlexBetween>
      <HtmlJavaStylin borderColor={palette.grey[100]}>
        <Box bgcolor={palette.grey[400]} color="#fff" width="90%" height="180px" display="flex" borderRadius="0.7rem"   margin="2rem 0 0 0">
          <div style={{fontSize:"0.8rem", overflowY:"scroll", width:"85%", display:"inline-block", flexDirection:"column", gap: "0.7rem", justifyContent:"center", alignItems:"center", margin:"20px 20px"}}>
            {
              javaMessage.map((item, index) => (
                <div style={{marginLeft:"3rem"}} key={index}>
                  <span>{item.message}</span>
                </div>
              ))
            }

          </div>
        </Box>
      </HtmlJavaStylin>
    </div>
  )
}

export default ShowResPdash