import { styled } from "@mui/material/styles";


export const Rightsteps = styled("div")(({ theme }) => ({
    display:"flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    [theme.breakpoints.up("md")]: {}
}));

export const Stepscontainer = styled("div")(({ theme }) => ({
    display:"inline-block",
    marginTop:"0.6rem", 
    [theme.breakpoints.down("md")]: {marginTop:"10px", }
}));

export const Sidesteps = styled("span")(({ theme }) => ({
    display: "flex",
    paddingBottom: "1rem", 
    fontSize:"0.9rem",
    gap:"0.5rem",
    cursor:"pointer",
    // padding:"0.5rem",
    '&:hover': {
        color:"red",
        border:"none",
        fontWeight:"600",
    },

    [theme.breakpoints.up("sm")]: { fontSize:"13px", paddingBottom: "10px", width:"23vw",},
    [theme.breakpoints.only("sm")]: {gap:"0",},
    [theme.breakpoints.down("md")]: { fontSize:"13px", paddingBottom: "10px", justifyContent:"space-between", gap:"0" }
}));