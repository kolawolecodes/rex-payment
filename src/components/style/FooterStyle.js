import { styled } from '@mui/material/styles';

export const FooterWrap = styled("div")(({theme}) => ({
  position: 'absolute',
  bottom: "0",
  left:"0",
  height:"90px",
  background:"#fff",
  width:"100%",
  padding:"0.5rem",

  [theme.breakpoints.only("sm")]: {  },
  [theme.breakpoints.down("sm")]: { bottom:"0", height:"120px", padding:"0.5rem 0 0.3rem 0", },
  }));

 export const FooterConainer = styled("div")(({ theme }) => ({
    fontSize: "12px",
    width: "70%",
    margin:"auto 1.5rem ",
    height:"100%",
    display:"flex",
    alignItems:"center",

    [theme.breakpoints.only("md")]: {margin:"auto 1.5rem ",},
    [theme.breakpoints.only("sm")]: { marginTop:"0", width:"90%",},
    [theme.breakpoints.down("sm")]: { width:"90%", height:"100%", flex:"wrap", },
}))
  
 export const FooterMainWrap = styled("div")(({theme}) => ({
   display:"inline-block",

   [theme.breakpoints.down("sm")]: {},
  }));
  
 export const FooterTitleCont = styled("div")(({ theme }) => ({
  width:"70%",
    display: "flex",
    gap: "10px",
    alignItems:"center",
    fontSize: "14px",
    "&:hover": {
      cursor:"pointer",
        color:"#0d2543",
        border:"0.04rem solid#cfd3d9",
        borderRadius:"0.2rem"
    },
    [theme.breakpoints.down("sm")]: {fontSize:"0.7rem", gap:"0", width:"100%", },
  }));
  
  
  
export const FooterTitle = styled("span")(({theme}) => ({
    fontWeight: 700,
    // paddding: "1rem",

    [theme.breakpoints.down("sm")]: {fontSize:"0.8rem"},
  }));
  
  
 export const FooterBody = styled("div")(({ theme }) => ({
    display:"block",
    marginTop: "5px",
    width: "80%",
    
    [theme.breakpoints.only("sm")]: { marginTop:"0.1rem",},
    [theme.breakpoints.down("sm")]: {marginTop: "0",},
  }));

  export const Footerbodycontent = styled("span")(({ theme }) => ({
    display:"block",
    lineHeight: "1rem",
    fontWeight:"500",
  }));