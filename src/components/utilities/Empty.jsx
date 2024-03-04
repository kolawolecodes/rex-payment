import { Box, styled, useTheme } from '@mui/material';
import React from 'react'


const EmptyWrap = styled(Box)(({ theme }) => ({
    width:"100%",
    height:"20rem",

    [theme.breakpoints.only("sm")]: {height:"15rem",},
}));
function Empty({empty}) {
    const {palette} = useTheme();
  return (
    <EmptyWrap bgcolor={palette.grey[100]}>
        {empty}
    </EmptyWrap>
  )
}

export default Empty