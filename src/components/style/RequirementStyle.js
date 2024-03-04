import { Box } from '@mui/material'
import { styled } from "@mui/material/styles"

export const RequirementWrap = styled("div")(({theme}) => ({
    // margin:"0.7rem 0 0 0",
    //   border:"0.04rem solid",
    //  borderRadius:"0.5rem",
}));

export const ReqmntTitleCont = styled("div")(({theme}) => ({
    padding:"1rem 2rem",
     display:"grid",
     gridTemplateColumns:"3fr 1fr 2fr",
     width:"100%",

     [theme.breakpoints.only("sm")]: { padding:"0.9rem 1rem", fontSize:"0.8rem",},
     [theme.breakpoints.down("sm")]: { padding:"0.8rem 1.5rem", gridTemplateColumns:"2fr 2fr 2fr", fontSize:"0.8rem",}
}));
export const ReqmntBodyCont = styled(Box)(({theme}) => ({
    padding:"1rem 2rem",
     display:"grid",
     gridTemplateColumns:"3fr 1fr 2fr",
     width:"100%",
     alignItems:"center",

     [theme.breakpoints.only("sm")]: { padding:"0.5rem 1.5rem", fontSize:"0.8rem",},
     [theme.breakpoints.down("sm")]: { padding:"0.3rem 1.5rem", fontSize:"0.8rem", gridTemplateColumns:"2fr 2fr 2fr", gap: "0.5rem"}
}));