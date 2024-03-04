import React from 'react'
import { HeadContainer, HeadTitle, HeaderBody, InnerPageContainer, Librarywrapper, PageWrapper, SubTitle } from '../../boxes-style/page_wrapper'
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
import Heading from '../../utilities/Heading';
import FlexBetween from '../../boxes-style/FlexBetween';

function Mobile() {
  return (
    <PageWrapper>
        <InnerPageContainer>

            <Heading 
            title="RexPay Documentation" 
            />
            {/* Libraries */}

            <Librarywrapper>
                <FlexBetween  padding="0 3rem 0 1rem">
                    <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayReact/tree/main/rexpay-doc'>
                        <LibrariesContent image={myAndroid} name="Android"/>
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayFlutter/tree/master '>
                        <LibrariesContent image={myIos} name="iOS"/>        
                    </a>
                </FlexBetween>

                <FlexBetween padding="0 3rem 0 1rem">
                <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayReact/tree/main/rexpay-doc'>
                    <LibrariesContent  image={myReact} name="React Native"/>
                </a>
                <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayFlutter/tree/master'>
                    <LibrariesContent image={myFlutter}  name="Flutter" />
                </a>
                </FlexBetween>

                <FlexBetween padding="0 3rem 0 1rem">
                <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayReact/tree/main/rexpay-doc'>
                    <LibrariesContent image={myIonic} name="Ionic"/>
                </a>
                </FlexBetween>    
            </Librarywrapper>

            {/* Helpful question */}
            <Helpful />

        </InnerPageContainer>
    </PageWrapper>
  )
}

export default Mobile