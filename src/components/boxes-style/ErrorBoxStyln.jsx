import { Box } from "@mui/material";
import { styled } from "@mui/system";


export const ErrorBoxStyln = styled(Box)({
    display: "flex",
    width: "100%",
    color: "#000",
    fontSize: "1rem",
    padding:" 1.5rem",
    borderRadius:"0.8rem",
    gap:"1rem"
});

export const ErrorComment = styled(Box)({
    display:"block",
    width: "95%",
    margin:"auto auto"
});

export const ErrorComment2 = styled(Box)({
    display:"flex",
    flexDirection:"column",
    gap:"3rem"
});
