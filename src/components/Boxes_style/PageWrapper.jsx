import { Box } from "@mui/material";
import { styled } from "@mui/system";


const PageWrapper = styled(Box)({
    display: "flex",
    width: "85%",
    margin: "auto auto",
    gap: "1.5rem",
    color: "#0a1e36",
    fontSize: "1rem"
});

export const InnerPageContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "90%",
    gap: "1rem"
});

export const HeadContainer = styled(Box)({
    marginTop: "1rem",
    // display: "block",
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
    fontSize: "0.9rem",
});

export const SubTitle = styled(Box)({
    display: "block",
    fontweight: "600",
});

export const SubContent = styled(Box)({
    display: "block",
});

// export const ListedStepsContainer = styled(Box)({
//     display: "flex",
//     flexDirection: "column",
//     width: "100%",
//     gap: "1rem",
// });

export const InnerPage4creat = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "75%",
    gap: "0.5rem",
});



export default PageWrapper