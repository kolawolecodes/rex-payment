import { Box, styled } from '@mui/material';
import React from 'react'
import SearchSignIn from '../header-search-log/HeaderSearch';
import InnerMainPage from './InnerMainPage';
import Footer from '../footer/Footer';

export const Mainpagewrap = styled(Box)(({ theme }) =>({
    position:"relative",
    display:"flex",
    flexDirection:"column",
    // flex: 1,
    width:"80%",
    marginLeft:"20%",
    height:"100%",
    overflowX:"hidden",
  
    [theme.breakpoints.down("sm")]: {  width:"100%", margin:"0", overflowX: "hidden", overflowY: "auto", "&::-webkit-scrollbar": {display:"none"} },
   
}));
  


function MainPage() {

  
  return (
        <Mainpagewrap>
             <SearchSignIn />
            <InnerMainPage/>
            <Footer/>
        </Mainpagewrap>
  )
}

export default MainPage