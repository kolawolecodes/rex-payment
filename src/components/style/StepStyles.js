import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


export const Stepwrap = styled("div")(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    // gap: "20px",  
}));



export const Step = styled("span")(({theme}) => ({
  display:"flex",
  gap:"1rem",
  paddingBottom:"1rem",

  [theme.breakpoints.down("sm")]: {fontSize:"14px", paddingBottom:"0.5rem",},
  [theme.breakpoints.down("md")]: {fontSize:"14px", paddingBottom:"0.8rem",   paddingBottom:"0.5rem",},
}));

export const Stepindex = styled(Box)(({theme}) => ({
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",

    [theme.breakpoints.down("sm")]: {fontSize:"14px",  width: "1.2rem", height: "1.2rem",},
    
}));