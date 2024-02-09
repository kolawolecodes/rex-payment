import { Box, useTheme } from '@mui/material'
import React from 'react'
import PageWrapper, { InnerPageContainer,  SubContent, SubTitle, SubTitleConte } from '../../Boxes_style/pageWrapper';

function AuthContent({title, decription, decription2, empty, decription3, children}) {
    const {palette} = useTheme();
  return (
    <InnerPageContainer>
        <SubTitleConte>
            <SubTitle fontSize="0.8rem">
            <h2>{title}</h2>
            </SubTitle>
        </SubTitleConte>
        <SubContent>
            <span>
                {decription}
            </span>
        </SubContent>
        <SubContent>
            {children}
           {/* <MyList 
            items={testModes}
           /> */}
        </SubContent>
        <SubContent className='testMode_descrpt'>
            <span>
                {decription2}
            </span>
        </SubContent>
        <Box className='testMode_pic_container'
            width="100%"
            bgcolor={palette.grey[100]}
            height="20rem"
        >
            {empty}
        </Box>
        <SubContent>
            <span>{decription3}
            </span>
        </SubContent>
    </InnerPageContainer>
  )
}

export default AuthContent