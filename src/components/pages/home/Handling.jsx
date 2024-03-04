import React from 'react'
import { Box, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

const HandlyWrap = styled("div")(({theme}) => ({
    // margin:"0.7rem 0 0 0",
      border:"0.04rem solid",
     borderRadius:"0.5rem",
}));

const HandlyHeadContain = styled("div")(({theme}) => ({
    padding:" 1rem",
     display:"grid",
     gridTemplateColumns:"1fr 4fr",
     width:"100%",

     [theme.breakpoints.only("sm")]: { padding:"0.9rem 1rem", fontSize:"0.8rem",},
     [theme.breakpoints.down("sm")]: { padding:"0.8rem 1.5rem", gridTemplateColumns:"1fr 3fr", fontSize:"0.8rem",}
}));
const HandlyBodyCont = styled(Box)(({theme}) => ({
    padding:"0.5rem 0 0.5rem 1rem",
     display:"grid",
     gridTemplateColumns:"1fr 4fr",
     paddding:"0.5rem",
     width:"100%",
     alignItems:"center",

     [theme.breakpoints.only("sm")]: { padding:"0.5rem 1.5rem", fontSize:"0.8rem",},
     [theme.breakpoints.down("sm")]: { padding:"0.3rem 1.5rem", gridTemplateColumns:"1fr 3fr", gap: "0.5rem", fontSize:"0.8rem",}
}));

function Handling({items}) {
    const {palette} = useTheme();
  return (
    <HandlyWrap>
        
        {/* Heading  of Hanling list */}
        <HandlyHeadContain >
            <h3>Param</h3>
            <h3>Description</h3>
        </HandlyHeadContain>

        {/* Body of Handling list */} 
        {
            items.map((item, index) => {
                return index % 2 === 1 ? (
                    <HandlyBodyCont key={index}>
                        <Box>{item.title}</Box>
                        <Box>{item.description}</Box>
                    </HandlyBodyCont> 
                ) : (
                    <HandlyBodyCont key={index} bgcolor= {palette.grey[100]}>
                        <Box>{item.title}</Box>
                        <Box>{item.description}</Box>
                    </HandlyBodyCont> 
                );
            })
        }
    </HandlyWrap>
  )
}

export default Handling