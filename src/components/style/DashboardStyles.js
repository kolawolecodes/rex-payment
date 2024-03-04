import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";


export const DashBordWrap = styled(Box)(({ theme }) => ({
  display: "inline-block",
  borderRadius:"0.7rem",
  border:"0.09rem solid",
  borderColor: alpha(theme.palette.grey[300], 0.8),
  // border:"solid red",

  [theme.breakpoints.down("sm")]: {width:"90%",  margin:" auto auto"}
}));

export const ButtonWrapper1 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width:"150px", 
  margin:"1rem 3rem 0 1rem", 
  position:"relative",
  
  [theme.breakpoints.only("sm")]: {margin:"1rem 1rem 0 0.7rem", },
  [theme.breakpoints.down("sm")]: {margin:"1rem 1rem 0 1rem", }
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // width:"170px", 
  margin:"1rem 3rem 0 1rem", 
  position:"relative",
  
  [theme.breakpoints.only("sm")]: {margin:"1rem 1rem 0 0.7rem", },
  [theme.breakpoints.down("sm")]: {margin:"1rem 1rem 0 1rem", }
}));

export const HtmlJavaStylin = styled(Box)(({ theme }) => ({
    // width:"100%",
    display: "flex",
    height: "250px",
    lineHeight:"1.7rem",
   position: "relative",
    // border:"0.04rem solid",
    // borderRadius:"0.7rem",
    justifyContent:"center",
    alignItems:"center",

    [theme.breakpoints.down("sm")]: {width:"90%", margin:"auto", height: "220px",}
  }));
  
 export const Buttonjava  = styled("button")(({ theme }) => ({
    fontWeight:600, 
    border:"none",
    background:"none",
    fontSize:"1rem",
    cursor:"pointer",
  
    '&:hover': {
      border:"0.5rem solid green",
    },

    [theme.breakpoints.down("sm")]: { fontSize:"0.85rem",}
  
  }));
  
 export const ButtonHtml = styled(Buttonjava)(({ theme }) => ({
    borderBottom:"2px solid green",
    '&:hover': {
      border:"0.5rem solid green",
    },
    [theme.breakpoints.down("sm")]: {fontSize:"0.85rem",}
  }));
  
 export const MessageWrapper = styled(Box)(({ theme }) => ({
    color:"#fff",
    width:"85%",
    height:"180px",
    display:"flex",
    borderRadius:"0.7rem",

    [theme.breakpoints.down("sm")]: {width:"100%", height:"160px",}
  }));
  
 export const MessageCont = styled("div")(({ theme }) => ({
    fontSize:"0.8rem", 
    overflowY:"scroll", 
    width:"85%", 
    display:"inline-block", 
    flexDirection:"column", 
    gap: "0.7rem", 
    justifyContent:"center", 
    alignItems:"center", 
    margin:"20px 20px",

    [theme.breakpoints.only("sm")]: {height: "9rem",
    overflow:"auto",
    "&::-webkit-scrollbar": {display:"none"},},

    [theme.breakpoints.down("sm")]: {height: "7.3rem",
    overflow:"auto",
    "&::-webkit-scrollbar": {display:"none"},},
  }));
  
 export const Content = styled("div")(({ theme }) => ({
    diplay:"block",
    width: "85%",
    margin:"auto",

  }));

  export const Curls = styled("span")(({ theme }) => ({
    fontWeight:"600", 
    background:"#cfd3d9", 
    padding:"0.5rem 1.2rem", 
    borderRadius:"0.2rem",

    [theme.breakpoints.only("md")]: {fontSize:"0.95rem", padding:"0.3rem 1rem",  },
    [theme.breakpoints.only("sm")]: {fontSize:"0.9rem", padding:"0.3rem 1rem", },
    [theme.breakpoints.down("sm")]: {fontSize:"0.9rem", padding:"0.3rem 1rem", }
  }));
  export const SwitchContainer = styled("div")(({theme}) => ({
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    gap:"0.5rem",

    [theme.breakpoints.down("sm")]: { gap:"0",}
  }));

  export const SwitchLabel = styled("span")({
    display: "block",
    fontSize:"0.8rem",
    fontWeight:"600",
  });


