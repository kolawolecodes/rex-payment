import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Package section
export const Empty = styled(Box)(({theme}) => ({
    height:"200px",
    width:"100%", 
    borderRadius:"0.5rem",
    border:"0.2px solid",
    '&:hover': {
        transform: "translateY(-5px)",
        transition: "all 1.6s ease-out"
      },
    
      [theme.breakpoints.only("sm")]: {height:"150px",}
}));

export const PackageCont = styled(Box)(({ theme }) =>({
    display:"flex",
    width:"100%",
    flexDirection:"column",
    gap:"1rem",
    padding:"0",
    
    [theme.breakpoints.down("sm")]: {marginBottom:"1rem",}
}));

// const EmptyTitleCont = styled("div")(({ theme }) =>({
//     display:"inline-block",
// }));

export const EmptycontentWrap = styled("div")(({ theme}) =>({
    display:"block",

    // [theme.breakpoints.down("sm")]:{fontSize:"1rem", padding:"1.5rem"},
}));

export const EmptyTitle = styled("span")(({ theme }) =>({
    marginBottom:"1.3rem",
    display:"block",
    fontSize:"1.3rem",
    fontWeight:"900",
    color:"#ff3333",
    

    [theme.breakpoints.only("sm")]:{ fontSize:"1.2rem"  },
    [theme.breakpoints.down("sm")]:{fontSize:"1rem", marginBottom:"1.5rem"},
}));


export const Emptycontent = styled("span")(({ theme }) =>({
    display:"block",
    fontSize: "1rem",
    fontWeight:"500",
    marginTop: "-15px",
    '&:hover': {
        transition: "all 1.6s ease-out",
        // border:"0.04rem solid #cfd3d9",
        borderRadius:"0.5rem",
        paddingLeft:"0.5rem"
      },

      [theme.breakpoints.only("sm")]: {fontSize:"0.9rem",},
      [theme.breakpoints.down("sm")]:{fontSize:"0.9rem", lineHeight:"1.3rem" },
}));

// Home styling section
export const Homewrapper = styled("div")(({ theme }) => ({
    width:"100%",
    padding:"0",
    margin:"0",
  
    [theme.breakpoints.only("sm")]:{ marginBottom:"2.5rem", },
    [theme.breakpoints.down("sm")]:{ marginBottom:"2rem", },
  }));
  
  export const HomeInnerWrap = styled("div")(({ theme }) => ({
    position:"relative",
    display:"flex",
    // flexWrap:"wrap",
    flexDirection:"column",
    width:"70%",
    margin:"auto 5vw",
     
    
    
    [theme.breakpoints.only("sm")]:{width:"98%", margin:"auto",},
    [theme.breakpoints.down("sm")]:{ width:"85%",  margin:"0 auto", },
  
  }));
  
  export const HomeMainContainer = styled("div")(({ theme }) => ({
    display:"flexBox",
    flexWrap:"wrap",
    flexDrection:"column",
    marginBottom:"19rem",
     gap:"2rem",
  
    [theme.breakpoints.only("sm")]:{width:"90%", border:"", margin:"auto", },
    [theme.breakpoints.down("sm")]:{width:"", border:"", margin:"0", },
  }));
  
  export const Packageline = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "2rem",
    marginTop:"1.7rem",
    width:"100%",
    // marginBottom: "-1rem",
  
    [theme.breakpoints.down("sm")]:{display:"inline-block", marginTop:"1.5rem",},
    [theme.breakpoints.only("sm")]:{gap:"0.4rem", },
  }));
  
  export const HeadContainer = styled("div")(({ theme }) => ({
    display: "inline-block", 
    padding: "0 1.3rem",
    marginTop:"0.5rem",
    
    [theme.breakpoints.only("sm")]:{padding: "0 2.5rem", fontSize:"0.9rem"},
    [theme.breakpoints.down("sm")]:{padding: "0 1.5rem", marginBottom:"-1rem"},
  }));