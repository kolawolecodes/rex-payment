import { Box, useTheme } from '@mui/material'
import { InnerPageContainer, SubContent, SubTitle, SubTitleConte } from '../../boxes-style/page_wrapper';


function AuthContent({title, decription, decription2, empty, decription3, children}) {
    const {palette} = useTheme();
  return (
    <>
        <SubTitle fontSize="0.8rem">
            <h2>{title}</h2>
        </SubTitle>
        <SubContent>
            {decription}
        </SubContent>
        <SubContent>
            {children}
           {/* <MyList 
            items={testModes}
           /> */}
        </SubContent>
        <SubContent className='testMode_descrpt'>
            {decription2}
        </SubContent>
        <Box className='testMode_pic_container'
            width="100%"
            bgcolor={palette.grey[100]}
            height="20rem"
        >
            {empty}
        </Box>
        <SubContent>
            {decription3} 
        </SubContent>
    </>
  )
}

export default AuthContent