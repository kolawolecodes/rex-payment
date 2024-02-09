import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../boxes_style/FlexBetween";




const SearchSignIn = ({myicon, empty}) => {
  const { palette } = useTheme();
  const [ selected, setSelected ] = useState("Home");
  return (
    <div className="searchSignIn"> 
      <FlexBetween 
        color={palette.grey[900]} 
        width="90%" height="10vh" 
        margin="1rem auto 0 auto"
      >
        {/* left and side */}
        <input type="text" name="search" id="search"  placeholder= "Search Dodument"/>

        {/* <Box position="absolute" left="388px" top="52px" sx={{fontSize: "20px", color: palette.grey[600]}}>
          {myicon}
        </Box> */}

        {/* right hand side */}
        <FlexBetween gap="0.9rem">
          <Typography 
            variant="h6" 
            fontSize="14px" 
            fontWeight="600" 
            color="{palette.grey[900]}"
          >
            Log in
          </Typography>
          <Typography 
            variant="h6" 
            fontSize="14px" 
            fontWeight="600" 
            color="#fff" 
            bgcolor="#0D2543"
            padding=".65rem 1rem"
            borderRadius="0.45rem">
            Sign Up
          </Typography>
        </FlexBetween>
      </FlexBetween>
        
      <Box height="0.2px" width="100%" bgcolor={palette.grey[100]} marginTop="1rem">{empty}</Box>
    </div>
    
  )
}

export default SearchSignIn