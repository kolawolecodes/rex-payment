import { Box, InputBase } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// import Search from "@mui/icons-material/Search";


export const Searchsignin = styled(Box)(({theme}) => ({
  position:"fixed",
  top:"0",
  left:"0",
  height:"90px",
  backgroundColor:"#fff",
  zIndex: 1,
  width: "80%",
  borderBottom:"0.04rem solid #cfd3d9",

  [theme.breakpoints.up("md")]: {marginLeft:"20%"},
  [theme.breakpoints.only("md")]: {marginLeft:"20%"},
  [theme.breakpoints.only("sm")]: {marginLeft:"20%"},
  [theme.breakpoints.down("sm")]: {position:"fixed", top:"0", height:"55px",top:"0", marginLeft:"0", padding:"0", width:"100%",},
    
    
  }));
  
export const Headerserch = styled("div")(({theme}) => ({
     
    display: "flex",
    alignItems:"center",
    justifyContent:"space-around",
    width:"90%",
    margin:"1.5rem auto",
  
    
    [theme.breakpoints.only("sm")]:{justifyContent:"space-between",},
    [theme.breakpoints.down("sm")]:{ width:"90%", margin:" 0.7rem auto auto 2rem", justifyContent:"space-around", alignItems:"center",},
  }));


  
  
export  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    flex:"none",
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: { left:"0" },
  }));
  
export  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      backgroundColor:"none",
      border:"0.5px solid #e1e2e7",
      borderRadius:"1rem",
      fontSize:"1rem",
      width:"50vw",
      '&:hover': {
        backgroundColor: "#fdeded",
        color:"#0d2543",
        border:"none"
      },
  
      
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      // width: '100%',

      [theme.breakpoints.up("md")]: {width:"40vw"},
      [theme.breakpoints.only("sm")]: {width:"38vw", },
     
      // [theme.breakpoints.up('md')]: {
      //   height:"15px", display:"flex", justifyContent:"center", width:"40vw"},
      // [theme.breakpoints.down('md')]: {
      //   height:"15px", display:"flex", justifyContent:"center", width:"300px"},

      [theme.breakpoints.down('sm')]: {width:"30vw", fontSize:"0.8rem", paddingLeft:"2rem", height:"10px", },

    },
  }));
  
export  const Sigincontainer = styled(Box)(({theme}) => ({ 
    display: "flex",  
   justifyContent:"space-around",
   gap:"1rem",
   [theme.breakpoints.only("sm")]: {},
  }))
  
export const Signbox = styled(Box)(({ theme }) => ({
    padding:".5rem 1.5rem",
    fontWeight:"600",
    borderRadius:"0.3rem",
    
    // '&:hover': {
    //   color:"#040c16",
    //   border:"0.04rem solid #0d2543 "
    // },
    '&:hover': {
      backgroundColor: "#ff3333",
      color:"#fff",
      border:"none"
    },
    // [theme.breakpoints.down("md")]: {padding:"0 3px", marginRight:"", border:"none"},
    [theme.breakpoints.only("sm")]: {padding:"0.2rem ", borderRadius:"3px",},
      [theme.breakpoints.down("sm")]: {padding:"0 5px", marginRight:"0.2rem", border:"none"},
  }));

  export const Logbox = styled(Box)(({ theme }) => ({
    padding:".5rem 1.5rem",
    fontWeight:"600",
    borderRadius:"0.3rem",
    
    '&:hover': {
      color:"#040c16",
      border:"0.04rem solid #0d2543 "
    },
   
    // [theme.breakpoints.down("md")]: {padding:"0 3px", marginRight:"", border:"none"},
    [theme.breakpoints.only("sm")]: {padding:"0.2rem",},
      [theme.breakpoints.down("sm")]: {padding:"0 5px", marginRight:"0.2rem", border:"none"},
  }));
  
  
  
  
  // export const Signlogcontainer = styled("div")(() => ({
  //     display: "block",
  //     height:"3rem",
  //     border:"solid red"
      
  //   }));
  // export  const Searchinput = styled("input")(() => ({
  //     // width: "50vw",                       
  //     height: "2.5rem",
  //     backgroundColor: "transparent",
  //     borderRadius: "1rem",
  //     border: "0.02rem solid #e1e2e7",
  //     padding: "0.7rem",
  //     backgroundColor:"none",
  //   }))