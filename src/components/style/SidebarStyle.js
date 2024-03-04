import { Box } from "@mui/material";
import {alpha, styled} from "@mui/material/styles";


export const Sidebarwrp = styled("div")( ({theme} ) => ({
    height:"100vh",
    position:"absolute",
    top:"0",

    [theme.breakpoints.down("sm")]: {},
  }));
  
  export const Navopen  = styled(Box)(({ theme }) => ({
      width: "100%",
      display:"flex",
      justifyContent:"flex-end",
      padding:"0",
      overflowX:"hidden",
  
      [theme.breakpoints.down("sm")]: { },
  }));
  
  export const Sidebarnav = styled(Box)(({ theme }) => ({
    height:"100vh",
    width:"20%",
    overflowY:"auto",
    justifyContent:"flex-end",
    position:"fixed",
    top: 0,
    zIndex: "2",
    overflowY:"auto",
    "&::-webkit-scrollbar": {display:"none"},
  
    [theme.breakpoints.only("sm")]: { width:"20%",},
    [theme.breakpoints.down("sm")]: { width:"70%", zIndex:"3", height:"100%", },
  }))
  
  export const SidebarmainCont = styled(Box)(({ theme }) =>({
    marginBottom:"2rem",
  }));
  
  export const Navbar = styled(Box)(({ theme }) => ({
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      cursor:"pointer", 
      margin: "2rem 1rem",
      color: "#0d2543",
  
      [theme.breakpoints.up("sm")]: {display: ""},
      [theme.breakpoints.down("sm")]: {zIndex:"3", top:"-1.3rem", position:"fixed", left: "-0.5rem", },
  }))
  
  export const Navclose = styled(Box)(({ theme }) => ({ 
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    margin:"1.7rem 0 2.5rem 0",

    // [theme.breakpoints.up("sm")]: {margin:"45px 0 20px 0",},
      [theme.breakpoints.down("sm")]: {paddingTop:"2rem", width:"80%", margin:"auto"},
  }));
  export const Navbarclose = styled(Box)(({ theme }) => ({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#0d2543",
    cursor:"pointer", 
    margin: "2rem 1rem",
  
    [theme.breakpoints.down("sm")]: {display:"block", margin: "0.5rem ", },
    [theme.breakpoints.up("sm")]: {display: "none"},
  }));