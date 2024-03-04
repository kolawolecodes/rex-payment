import { Box } from "@mui/material";
import { styled } from "@mui/system";


export const Errorboxstyln = styled(Box)(({ theme }) => ({
    display: "flex",
    color: "#000",
    fontSize: "0.9rem",
    padding:" 1rem",
    borderRadius:"0.8rem",
    gap:"1rem",

    [theme.breakpoints.only("sm")]: { gap:"0.5rem",  padding:" 0.5rem",},
    [theme.breakpoints.down("sm")]: {fontSize:"0.8rem", gap:"10px", height:"auto", padding:"0.7rem", borderRadius:"0.3rem"},
}));

export const Errorcomment = styled(Box)(({ theme }) => ({
    display:"block",
    margin:"auto auto",

    [theme.breakpoints.only("sm")]: {fontSize:"0.8rem", height: "4rem",
        overflowY:"auto",
        "&::-webkit-scrollbar": {display:"none"},},
    [theme.breakpoints.down("sm")]: {fontSize:"0.8rem", },
}));

export const Errorcomment2 = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    gap:"1.2rem",
    margin:"0",

    [theme.breakpoints.only("sm")]: {fontSize:"0.8rem", height: "5rem",
    overflowY:"auto",
    "&::-webkit-scrollbar": {display:"none"},},
    [theme.breakpoints.down("sm")]: {fontSize:"0.8rem", height: "5rem",
    overflowY:"auto",
    "&::-webkit-scrollbar": {display:"none"},},
}));

export const NoteBoxComment = styled(Box)(({ theme }) => ({
    display:"flex",

    [theme.breakpoints.down("sm")]: {fontSize:"0.8rem", },
}));
