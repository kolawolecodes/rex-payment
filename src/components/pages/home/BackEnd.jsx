import React from 'react'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { HeadTitle, HeaderBody, InnerPageContainer, Librarywrapper, PageWrapper, SubTitle } from '../../boxes-style/page_wrapper'
import Footer from '../footer/Footer'
import Helpful from './Helpful'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import myPhp from "../../../images/php.png"
import myVue from "../../../images/vue.png"
import myPython from "../../../images/python.png"
import myRuby from "../../../images/ruby.png"
import myGo from "../../../images/go.png"
import myCshap from "../../../images/c-sharp.png"
import myJava from "../../../images/java.png"
import myNode from "../../../images/node.png"
import { Box, Typography, useTheme } from '@mui/material';
import LibrariesContent from './LibrariesContent';
import ErrorBox2 from '../../errorBox/ErrorBox2';
import HeaderDetails from './HeaderDetails';
import { styled } from '@mui/material/styles';
import FlexBetween from '../../boxes-style/FlexBetween';



function BackEnd() {
  return (
    <PageWrapper>
        <InnerPageContainer>

            <HeaderDetails 
                title="SDKs for servers"
                details="These libraries should be used on the frontend."
            />

            {/* Error Prompt 2 */}
            <ErrorBox2
                icon={<ReportProblemIcon sx={(theme) => ({ 
                    fontSize:"2rem", color:"#660000",
                    [theme.breakpoints.down("sm")]: {fontSize:"1.5rem",}
                })}/>}
                errorTitle="Limited Support"
                message="Not all end points are supported by our SDKs yet. You'll see 
                a lisr of which endpoints are supported for each SDK in it's documentation, 
                if  you find an endpoint that's missing in your preffered SDK, send in a PR."
            />

                {/* Libraries */}

                    <Librarywrapper>
                        <FlexBetween  padding="0 3rem 0 1rem">
                            <a className='sdkLink' target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayReact/tree/main/rexpay-doc'>
                                <LibrariesContent image={myNode} name="Node.js"/>
                            </a>
                            <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayPHP'>
                                <LibrariesContent image={myPhp} name="PHP"/>        
                            </a>
                        </FlexBetween>

                        <FlexBetween padding="0 3rem 0 1rem">
                        <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayReact/tree/main/rexpay-doc'>
                            <LibrariesContent  image={myPython} name="Python"/>
                        </a>
                        <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayReact/tree/main/rexpay-doc'>
                            <LibrariesContent image={myRuby}  name="Ruby" />
                        </a>
                        </FlexBetween>

                        <FlexBetween padding="0 3rem 0 1rem">
                        <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayReact/tree/main/rexpay-doc'>
                            <LibrariesContent image={myGo} name="GO"/>
                        </a>
                        <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayJava/tree/master '>
                            <LibrariesContent image={myCshap}  name="C#"/>
                        </a>
                        </FlexBetween>
                        
                        <FlexBetween padding="0 3rem 0 1rem">
                        <a target='_blank' rel='noreferrer' href='https://github.com/accelerex-developer/RexPayJava/tree/master '>
                            <LibrariesContent image={myJava} name="Java"/>
                        </a>
                        </FlexBetween>     
                    </Librarywrapper>

            {/* Helpful question */}
            <Helpful />
            
            
        </InnerPageContainer>
    </PageWrapper>
  )
}

export default BackEnd