import { Box, boxClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Helpwrapper = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "30px",
    alignItems: "center",
    marginTop: "6rem",
    marginBottom: "5rem",

    [theme.breakpoints.up("md")]: { gap: "0.2px", marginTop: "3.5rem",},
    [theme.breakpoints.down("md")]: { marginTop:"2rem", fontSize:"14px", gap: "10px", marginBottom: "2rem",},
    [theme.breakpoints.down("sm")]: { marginTop:"2rem", marginBottom:"5rem",  gap: "0.3rem",},
}));

export const Helpquetion = styled("div")(({ theme }) => ({
    display: "inline-block",
    padding: "1rem 0.5rem 1rem 0",

    [theme.breakpoints.up("md")]: {  width:"50%", display:"block", padding:"0"},
    [theme.breakpoints.down("md")]: { fontSize:"0.8rem", width:"50%", display:"block"},
}));

export const HelpAnsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",

    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("sm")]: { alignItems:"center"},
}));

export const AnswerContainer = styled(Box)(({ theme }) => ({
    display: "inline-block",
    padding: "0.6rem 2rem",
    cursor: "pointer",
    textDecorationLine: "none",
    color: "#fff",
    fontSize: "0.8rem",
    fontWeight: "600",
    borderRadius:"0.25rem",
    transition:"all 0.2s ease-out",
    '&:hover': {
        backgroundColor: "#ff3333",
        color:"#fff",
        border:"none"
      },

      [theme.breakpoints.up("md")]: { padding:"5px 0.5rem"},
      [theme.breakpoints.down("md")]: { padding: "0.3rem", fontSize:"12px",},
      [theme.breakpoints.down("sm")]: { padding: "0.2rem 0.8rem", fontSize:"0.8rem",},
}));

export const No_asw_container = styled(Box)(({ theme }) => ({
    display: "inline-block",
    padding: "0.4rem 1rem",
    cursor: "pointer",
    textDecorationLine: "none",
    color: "#000",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius:"0.25rem",
    '&:hover': {
        color:"#040c16",
        border:"0.04rem solid #ff3333 "
      },
      [theme.breakpoints.down("sm")]: { padding: "0.2rem 0.8rem", fontSize:"14px"},
      [theme.breakpoints.down("md")]: { padding: "0.3rem", fontSize:"12px", 
      '&:hover': {
        color:"#ff0000",
        fontSize:"14px",
        border:"none",
    },
}}));