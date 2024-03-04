import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


export const PageWrapper = styled(Box)(( {theme} ) => ({
    width: "90%",
    display: "flex",
    margin: "auto auto",
    color: "#0a1e36",
    fontSize: "1rem",
    gap:"3rem",

    [theme.breakpoints.only("md")]: {gap:"2rem",},
    [theme.breakpoints.up("sm")]: {width:"95%", margin:"auto auto",},
    [theme.breakpoints.only("sm")]: {gap:"1.5rem",},
    [theme.breakpoints.down("sm")]: {display:"block",  width: "100%", padding:"0 1rem", },
}));

export const InnerPageContainer = styled(Box)(({ theme}) => ({
    display: "flex",
    flexDirection: "column",
    width: "65%",
    gap: "2rem",
   
    [theme.breakpoints.only("sm")]: {gap:"1rem" },
    [theme.breakpoints.down("sm")]: {width:"100%",  gap:"1rem"},
}));

export const HeadContainer = styled(Box)(({ theme}) => ({
    marginTop: "1.5rem",
    display: "block",
    width: "100%",
}));

export const HeadTitle = styled(Box)(({ theme}) => ({
    display: "block",
    fontweight: "600"
}));

export const HeaderBody = styled(Box)(({ theme}) => ({
    display: "block",
    marginTop:"1rem",

    [theme.breakpoints.down("sm")]: {fontSize:"14px"}
}));




export const HeadContent = styled(Box)(({ theme}) => ({
    display: "block",

    [theme.breakpoints.down("sm")]: {}
}));

export const SubTitleConte = styled(Box)(({ theme}) => ({
    display: "block",
    flexDirection: "column",
    gap:"1rem",

    [theme.breakpoints.down("md")]: {gap: "0.5rem", }
    
}));

export const SubTitle = styled("span")(({ theme}) => ({
    display: "block",
    fontweight: "600",
    fontSize:"0.8rem",

    [theme.breakpoints.down("sm")]: {fontSize:"12px"},
    [theme.breakpoints.down("md")]: { padding:"0", fontSize:"12px"},
}));

export const SubContent = styled("span")(({ theme}) => ({
    display: "block",
    // paddingTop:"1rem"

    [theme.breakpoints.down("sm")]: {fontSize:"14px"},
    [theme.breakpoints.down("md")]: {fontSize:"14px", lineHeight:"25px"},
}));


// liberary Wrapper
export const Librarywrapper = styled("div")(({ theme }) => ({
    display: "block",
    gap:"2rem",
}));

export const Externallink = styled("div")(({ theme }) => ({
    display: "inline-block",
    textDecorationLine: "none",
}));

export const ExampleContainer = styled(Box)(({ theme }) => ({
    height:"auto", 
    // width:"100%" ,
    padding:"1rem",
    borderRadius: "0.7rem", 
    display: "flex",
    flexWrap:"wrap",
    // justifyContent:"center",
    // alignItems:"center",
    color:"#fff",

    [theme.breakpoints.only("md")]: {padding:"0.5rem", },
    [theme.breakpoints.only("sm")]: {padding:"0.5rem",},
    [theme.breakpoints.down("sm")]: { padding:"0.2rem",},
}));

export const ExampleContent = styled("div")(({theme}) => ({
    display:"flex",
    height:"12rem",
    flexWrap:"wrap",
    // flex:"1",
    
    // margin:" auto",
    fontSize:"1rem",
    fontWeight:"100",
    padding:"1rem",
    lineHeight: "1.5rem",

    [theme.breakpoints.only("md")]: {fontSize:"0.85rem", padding:"0.1rem",},
    [theme.breakpoints.only("sm")]: {fontSize:"0.75rem", lineHeight: "1.1rem", },
    [theme.breakpoints.down("sm")]: { fontSize:"0.7rem", lineHeight: "1.2rem", padding:"0.5rem", overflow:"auto", "&::-webkit-scrollbar": {display: "none"}},
  }));