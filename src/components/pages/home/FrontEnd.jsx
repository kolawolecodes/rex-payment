import React from 'react'
import { HeadContainer, HeadContent, HeadTitle, HeaderBody, InnerPageContainer, PageWrapper, SubTitle } from '../../boxes_style/page_wrapper'
import Footer from '../footer/Footer'
import Helpful from './Helpful'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import myReact from "../../../images/react.png"
import myVue from "../../../images/vue.png"
import myAngular from "../../../images/angular.png"
import { Box, useTheme } from '@mui/material';
import FlexBetween from '../../boxes_style/FlexBetween';

function FrontEnd() {
    const palette = useTheme();
  return (
    <PageWrapper>
        <InnerPageContainer>
            <HeadContainer>
                <HeadTitle>
                    <h1>SDKs for client</h1>
                </HeadTitle>
                <HeadContent>
                    <span>
                        These libraries should be used on the frontend.
                    </span>
                </HeadContent>

                {/* Libraries */}
                <HeaderBody marginTop="1.5rem">
                    <FlexBetween width="50%">
                        <Box display= "flex" align-items= "center" gap="1rem">
                            <Box>
                                <img style={{width:"80px", height:"80px"}} src={myReact} alt="React_logo" />
                            </Box>

                            <SubTitle style={{color:"red"}}>
                                <h3 >React</h3>
                            </SubTitle>
                        </Box>

                        <Box display= "flex" align-items="center" gap="0.5rem">
                            <Box>
                                <img  style={{width:"80px", height:"80px"}} src={myVue} alt="Vue_logo" />
                            </Box>

                            <SubTitle style={{color:"red"}}>
                                <h3>Vie</h3>
                            </SubTitle>
                        </Box>
                    </FlexBetween>
                    {/* Angular */}
                    <Box display= "flex" align-items= "center" width="50%" gap="1rem">
                        <Box padding="0.5rem">
                            <img  style={{width:"60px", height:"60px"}} src={myAngular} alt="Vue_logo" />
                        </Box>

                        <SubTitle style={{color:"red"}}>
                            <h3>Angular</h3>
                        </SubTitle>
                    </Box>
                </HeaderBody>
            </HeadContainer>

            {/* Helpful question */}
            <Helpful />
            
        </InnerPageContainer>
    </PageWrapper>
  )
}

export default FrontEnd