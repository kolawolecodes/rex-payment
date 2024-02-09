import React from 'react';
import "./quickstart.css";
import { Box, useTheme } from '@mui/material';
import Helpful from '../home/Helpful';
import SideStep from './SideStep';
import { overviewsteps1, step1, step2 } from "../../data/sideStepData";
import Footer from '../../pages/footer/Footer'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import Title_Details from './Title_Details';
import ErrorIcon from '@mui/icons-material/Error';
import ErrorBox from '../../errorBox/ErrorBox';
import PageWrapper, { HeadContainer, InnerPageContainer, SubContent } from '../../boxes_style/pageWrapper';
import Steps from './Steps';
import HeaderDetails from './HeaderDetails';


function QuickStart({children}) {
    const {palette} = useTheme();

  return (
    <PageWrapper className='quickStart'>
        {/* left hand side */}
        <InnerPageContainer width="100%">
            <HeadContainer>
                <HeaderDetails
                    title="Quick Start"
                    details="Welcome! with our APIs, you can make and receive payments in dozens of 
                    currencies and countries, with variety of payment channels. Here's what you need to do:"
                />
            </HeadContainer>
            {/* step 1 */}
            <Title_Details
                title="Step 1. Create Account"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia 
                maiores saepe asperiores nemo quibusdam harum nesciunt fugit laboriosam aperiam?"
            />

            {/* attached video */}
            <Box className='step_video'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CWEWBgVwFc8?si=jD5_5zohv21C9RLg" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" allowfullscreen></iframe>
            </Box>

            <SubContent className='step_step_by_step_container'>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </SubContent>

            <Steps 
                items={step1}
            />

            {/* step 2 */}
            <Title_Details
                title="Step 2. Create an Account"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia 
                maiores saepe asperiores nemo quibusdam harum nesciunt fugit laboriosam aperiam?"
            />

            {/* listing step 2 */}
            <Steps 
                items={step2}
            />

            {/* error handling */}
            <ErrorBox 
                icon={<ErrorIcon sx={{ fontSize:"2rem", color:"#0d2543", marginTop: "1rem"}}/>}
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                natus velit ex in corrupti asperiores temporibus dolores dolorem incidunt, 
                laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
            />
            <SubContent margin="1rem 0 1rem 0">
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia 
                    maiores saepe asperiores nemo quibusdam harum nesciunt fugit laboriosam aperiam?
                </span>
            </SubContent>
            

            {/* step 3 */}

            <Title_Details
                title="Step 3. Create an Account"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia 
                maiores saepe asperiores nemo quibusdam harum nesciunt fugit laboriosam aperiam?"
            />

            {/* Helpful question */}
            <Helpful />

            {/* footer layer */}
            <Footer 
                icon1= {<ForumIcon sx={{fontSize: "1.2rem"}} />}
                title1= "Have any questions?"
                body1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt."

                icon2= {<SmartDisplayIcon sx={{fontSize: "1.2rem"}} />}
                title2= "Video tutorials"
                body2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt."
            />
        </InnerPageContainer>
        {/* Right hand side */}
        <SideStep 
            title="On this Page" 
            items= {overviewsteps1}
        />
    </PageWrapper>
  )
}

export default QuickStart