import React from 'react'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import PageWrapper, { HeadContainer, HeadContent, HeadTitle, HeaderBody, InnerPageContainer, SubTitle } from '../../boxes_style/pageWrapper'
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
import { Box, useTheme } from '@mui/material';
import FlexBetween from '../../boxes_style/FlexBetween';
import LibrariesContent from './LibrariesContent';
import ErrorBox2 from '../../errorBox/ErrorBox2';

function BackEnd() {
  return (
    <PageWrapper>
        <InnerPageContainer>
            <HeadContainer>
                <HeadTitle>
                    <h1>SDKs for servers</h1>
                </HeadTitle>
                <HeadContent width="80%">
                    <span>
                        These libraries should be used on the frontend.
                    </span>

                    {/* Error Prompt 2 */}
                    <ErrorBox2
                            icon={<ReportProblemIcon sx={{ fontSize:"2rem", color:"#660000", marginTop: "1rem"}}/>}
                            errorTitle="Limited Support"
                            message="Not all end points are supported by our SDKs yet. You'll see 
                            a lisr of which endpoints are supported for each SDK in it's documentation, 
                            if  you find an endpoint that's missing in your preffered SDK, send in a PR."
                    />
                </HeadContent>

                {/* Libraries */}
                <HeaderBody marginTop="2rem">
                    <LibrariesContent 
                        image1={myNode}
                        name1="Node.js"
                        image2={myPhp}
                        name2="PHP"
                    />

                    <LibrariesContent 
                        image1={myPython}
                        name1="Python"
                        image2={myRuby}
                        name2="Ruby"
                    />

                    <LibrariesContent 
                        image1={myGo}
                        name1="GO"
                        image2={myCshap}
                        name2="C#"
                    />

                    <Box display= "flex" align-items= "center" width="50%" gap="0.5rem">
                        <Box >
                            <img  style={{width:"45px", height:"45px"}} src={myJava} alt="java" />
                        </Box>

                        <SubTitle style={{color:"red"}}>
                            <h4>Java</h4>
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

export default BackEnd