import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PaymentOptWrap = styled(Box)(({theme}) => ({
    display: "flex",
    marginTop: "1.5rem",
}));

export const PaymentOptContaina = styled(Box)(({theme}) => ({
    width:"100%"
}));

export const PaymntBodyContainer = styled("div")(({theme}) => ({
    display: "flex",
   padding:"0.5rem ",
   justifyContent:"space-between",
   borderBottom: "0.04rem solid #afafb2",
   alignItems:"center",
}));

export const PaymntHdContainer = styled("div")(({theme}) => ({
    display: "flex",
    justifyContent:"space-between",
    borderBottom: "0.04rem solid #afafb2",
}));

export const PaymntHder = styled("div")(({theme}) => ({
    fontWeight: "700",
    padding: "1rem 1.5rem",

    [theme.breakpoints.only("sm")]: {  fontSize:"1rem",},
  [theme.breakpoints.down("sm")]: {  fontSize:"0.9rem", padding:"0.8rem 1rem", },
}));

export const PaymntBodyWrap = styled("div")(({theme}) => ({
    display: "flex",
    flexDirection: "column",
}));


export const Tabletitle = styled("span")(({theme}) => ({
   padding:"0.5rem 1rem",

   [theme.breakpoints.only("sm")]: {  fontSize:"1rem",},
  [theme.breakpoints.down("sm")]: {  fontSize:"0.9rem", padding:"0.3rem 1rem", },
}));
export const TableBodyValue = styled("span")(({theme}) => ({
    fontSize: "0.9rem",
    background: "whitesmoke",
    padding: "0.09rem 0.4rem",
    borderRadius: "0.3rem",
    border: "0.08rem solid #afafb2",
}));