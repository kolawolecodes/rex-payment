import React from 'react'
import { HeadContainer, HeadTitle, HeaderBody, InnerPageContainer, PageWrapper, SubTitle } from '../../boxes_style/page_wrapper'
import Footer from '../footer/Footer'
import Helpful from './Helpful'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import myAndroid from "../../../images/android.png"
import myIos from "../../../images/ios.png"
import myReact from "../../../images/react.png"
import myFlutter from "../../../images/flutter.png"
import myIonic from "../../../images/java.png"
import { Box, useTheme } from '@mui/material';
import LibrariesContent from './LibrariesContent';

function Mobile() {
  return (
    <PageWrapper>
        <InnerPageContainer>
            <HeadContainer>
                <HeadTitle>
                    <h1>SDKs for mobile apps</h1>
                </HeadTitle>

                {/* Libraries */}
                <HeaderBody marginTop="2rem">
                    <LibrariesContent 
                        image1={myAndroid}
                        name1="Android"
                        image2={myIos}
                        name2="iOS"
                    />

                    <LibrariesContent 
                        image1={myReact}
                        name1="React Native"
                        image2={myFlutter}
                        name2="Flutter"
                    />


                    <Box display= "flex" align-items= "center" width="50%" gap="0.5rem">
                        <Box >
                            <img  style={{width:"45px", height:"45px"}} src={myIonic} alt="java" />
                        </Box>

                        <SubTitle style={{color:"red"}}>
                            <h4>Ionic</h4>
                        </SubTitle>
                    </Box>
                </HeaderBody>
            </HeadContainer>

            {/* Helpful question */}
            <Helpful />

            {/* footer */}
            <Footer 
                icon1= {<ForumIcon sx={{fontSize: "1.2rem"}} />}
                title1= "Have any questions?"
                body1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt."

                icon2= {<SmartDisplayIcon sx={{fontSize: "1.2rem"}} />}
                title2= "Video tutorials"
                body2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt."
            />
        </InnerPageContainer>
    </PageWrapper>
  )
}

export default Mobile