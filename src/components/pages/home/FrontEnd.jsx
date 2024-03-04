import React from 'react'
import { HeadContainer, HeadContent, HeadTitle, HeaderBody, InnerPageContainer, Librarywrapper, PageWrapper, SubTitle } from '../../boxes-style/page_wrapper'
import Footer from '../footer/Footer'
import Helpful from './Helpful'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import myReact from "../../../images/react.png"
import myVue from "../../../images/vue.png"
import myAngular from "../../../images/angular.png"
import { useTheme } from '@mui/material';
import FlexBetween from '../../boxes-style/FlexBetween';
import { styled } from '@mui/material/styles';
import LibrariesContent from './LibrariesContent';
import HeaderDetails from './HeaderDetails';


export const Homeheader = styled("div")(({ theme }) => ({
    display: "inline-block",
    padding:"1rem",
    marginTop: "1rem",
    marginBottom:"-1rem"
    
  }));

function FrontEnd() {
    const palette = useTheme();
  return (
    <PageWrapper>
        <InnerPageContainer>
        <HeaderDetails 
                title="SDKs for Client"
                details="These libraries should be used on the frontend."
            />

                {/* Libraries */}
                <Librarywrapper>
                        <FlexBetween  padding="0 3rem 0 1rem" color="red">
                            <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayReact/tree/main/rexpay-doc'>
                                <LibrariesContent image={myReact} name="ReactJs"/>
                            </a>
                            <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayPHP'>
                                <LibrariesContent image={myVue} name="VueJs/Nuxt"/>        
                            </a>
                        </FlexBetween>

                        <FlexBetween padding="0 3rem 0 1rem">
                            <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayAngular '>
                                <LibrariesContent  image={myAngular} name="Angular"/>
                            </a>
                        </FlexBetween>    
                    </Librarywrapper>

            {/* Helpful question */}
            <Helpful />
            
        </InnerPageContainer>
    </PageWrapper>
  )
}

export default FrontEnd