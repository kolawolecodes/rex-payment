import { Box } from "@mui/material";
import { styled } from "@mui/system";


export const PageWrapper = styled(Box)({
    display: "flex",
    width: "90%",
    margin: "auto auto",
    gap: "1rem",
    color: "#0a1e36",
    fontSize: "1rem",
});

export const InnerPageContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "70%",
    gap: "1.5rem",
});

export const HeadContainer = styled(Box)({
    marginTop: "1.5rem",
    display: "block",
    width: "100%",
});

export const HeadTitle = styled(Box)({
    display: "block",
    fontweight: "600"
});

export const HeaderBody = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    
});




export const HeadContent = styled(Box)({
    display: "block",
});

export const SubTitleConte = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap:"1rem"
});

export const SubTitle = styled(Box)({
    display: "block",
    fontweight: "600",
});

export const SubContent = styled(Box)({
    display: "block",
});