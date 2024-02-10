import { Box, useTheme } from '@mui/material'
import { InnerPageContainer, SubContent, SubTitle, SubTitleConte } from '../../boxes_style/pageWrapper';


function AuthContent({title, decription, decription2, empty, decription3, children}) {
    const {palette} = useTheme();
  return (
    <>
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
    </>
  )
}

export default AuthContent