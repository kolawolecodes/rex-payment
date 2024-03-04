import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SidebarItemWrap = styled(Box)(({theme}) => ({
    display:"block",
    padding:"0",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "flex-start", 
    
    // border:"solid",
  
    [theme.breakpoints.up("md")]: { padding: "0.1rem 0", },
    [theme.breakpoints.only("md")]: {  padding: "0.5rem", },
    [theme.breakpoints.only("sm")]: { padding: "0.3rem 0", },
  }));
  
  export const SidebarTitleCont = styled("div")(({theme}) => ({
    display:"block",
    borderBottom: "0.03rem solid #686d73", 
    // border:"solid red",
    
  
    [theme.breakpoints.only("md")]: {padding:"0",},
    [theme.breakpoints.only("sm")]: {padding:"0",},
  }));
  
  export const SidebarTitle = styled("span")(({theme}) => ({
    textDecorationLine:"none",
    color:"#040c16",
    fontSize: "1.4rem",
    display: "flex",
    flexDirection: "column",
    padding: "1.3rem 2rem",
    cursor: "pointer",
    fontWeight: "600",
   
    [theme.breakpoints.up("lg")]: {  },
    // [theme.breakpoints.only("lg")]: {  fontSize:"1.1rem", padding:"1.3rem ",},
    [theme.breakpoints.only("md")]: { fontSize:"1.2rem", padding:"1.2rem 0.7rem ", }, 
    [theme.breakpoints.only("sm")]: {  fontSize:"1rem", padding: "0.7rem 0.5rem",},
    [theme.breakpoints.down("sm")]: {  fontSize:"1.25rem", padding: "1.3rem 2rem ", },
  }));
  
  
  
  export const SubNav = styled("div")(({theme}) => ({
    height: "0",
    overflow: "hidden",
  }));
  
  export const SubNavItem = styled("span")(({theme}) => ({
    textDecoration:"none",
    color:"#0a1e36",
    display: "block",
    fontSize:"1.2rem",
    fontWeight:"500",
    padding: "0.5rem 2.5rem",
    width:"100%",
  
    '&:hover': {background: "#cfd3d9"},
  
      // [theme.breakpoints.up("md")]: {padding: "0.7rem 1.5rem", },
      // [theme.breakpoints.up("sm")]: { lineHeight:"1.5rem", },
      [theme.breakpoints.only("md")]: { fontSize:"1.1rem",  padding: "0.5rem 1.5rem", },
      [theme.breakpoints.only("sm")]: {  fontSize:"1rem", width:"100%", padding:"0.6rem 0.5rem", margin: "0 0.5rem " },
      [theme.breakpoints.down("sm")]: { fontSize:"1.05rem", padding: "0.6rem 2.4rem ",
      '&:hover': {background: "none", color: "#ff6666"},
    },
  }));
  
  export const SubNavContainer = styled("div")(({theme}) => ({
    display: "flex",
  
      '&:hover': {background: "#cfd3d9"},
  }));