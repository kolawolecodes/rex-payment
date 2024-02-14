import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../boxes_style/FlexBetween";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';



const SearchSignIn = ({myicon, empty}) => {
  const { palette } = useTheme();
  const [ selected, setSelected ] = useState("Home");
  return (
    <div className="searchSignIn">
      <div className="HeaderSerch">
        {/* left and side */}
        <div className="searchBox">
          <input type="text" name="search" id="search"  placeholder= "Search Dodument"/>
        </div>

        {/* right hand side */}
        <div style={{ width:"200px"} }>
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
        </div>
      </div> 
      
        
      <Box height="0.004rem" width="100%" bgcolor={palette.grey[100]} marginTop="1rem">{empty}</Box>
    </div>
    
  )
}

export default SearchSignIn