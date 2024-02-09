import React from 'react'
import PageWrapper, { HeadContainer, HeadTitle, InnerPage4creat, InnerPageContainer, SubContent } from '../../boxes_style/pageWrapper'
import ErrorBox from '../../errorBox/ErrorBox'
import Helpful from './Helpful'
import Footer from '../footer/Footer'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import Title_Details from './Title_Details'
import { Box, useTheme } from '@mui/material'
import { HandlingList, javaMessage, require4Sigle, require4multi, requirements, retrieveAPIKeys } from '../../data/sideStepData'
import Requirement from './Requirement'
import HtmlJavaDashoard from './HtmlJavaDashoard'
import ErrorBox2 from '../../errorBox/ErrorBox2'
import Handling from './Handling'
import JavaDashoard from './JavaDashboard'
import WarningIcon from '@mui/icons-material/Warning';


function CreatePayment() {
    const {palette} = useTheme();
  return (
    <PageWrapper>
        <InnerPage4creat width="60%">
            <HeadContainer>
                <HeadTitle fontSize="0.9rem" fontWeight="800">
                    <h1>Create Payment</h1>
                </HeadTitle>

                <ErrorBox 
                    message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores delectus at 
                    officiis. Provident magnam esse qui atque dolorum!"
                />

                <Title_Details 
                    title="Popup"
                    details="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores 
                    delectus at officiis. Provident magnam esse qui atque dolorum!"
                />

                {/* the main list now */}
                <div className='requirement_wrapper'>
                    <Requirement 
                        items = {requirements}
                    />
                    <Box display="inline"  width="65%" fontSize="0.8rem">
                        <h3>For single <span style={{color:'green', cursor:"pointer"}}> split pamyment</span></h3>
                    </Box>

                    <Requirement 
                        items = {require4Sigle}
                    />

                    <Box display="grid" gridTemplateColumns="3fr 1fr 2fr" width="65%" fontSize="0.8rem">
                        <h3>For Multi <span style={{color:'green', cursor:"pointer"}}> split pamyment</span></h3>
                    </Box>

                    <Requirement 
                        items = {require4multi}
                    />
                </div>

                <SubContent margin="1.5rem 0">
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit.
                    </span>
                </SubContent>

                <HtmlJavaDashoard 
                HTML="HTML"
                JavaScript="JavaScript"
                items = {javaMessage}
                />

                <SubContent margin="1.5rem 0">
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit.
                    </span>
                </SubContent>

                <ErrorBox 
                    message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."
                />

                <Title_Details 
                    title="Important notes"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />
                <Title_Details 
                    title="Handle the callback methods"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />

                {/* change this laterto prompt not error */}
                <ErrorBox2 
                    icon={<WarningIcon sx={{ fontSize:"2rem", marginTop:"1rem", color:"#990000"}}/>}
                    errorTitle="Helpful tips"
                    message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />

                <SubContent margin="0 0 1.5rem 0">
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit.
                    </span>
                </SubContent>

                <JavaDashoard 
                JavaScript="Javascript"
                items = {javaMessage}
                />

                <SubContent margin="1.5rem 0">
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit.
                    </span>
                </SubContent>

                <JavaDashoard 
                JavaScript="Javascript"
                items = {javaMessage}
                />

                <ErrorBox2
                    icon={<WarningIcon sx={{ fontSize:"2rem", marginTop:"1rem", color:"#990000"}}/>}
                    errorTitle="Limited Support"
                    message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />

                <Title_Details 
                    title="Verify Transaction"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />
                <Title_Details 
                    title="Handle webhook"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />

                <Title_Details 
                    title="Redirect"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />

                <ErrorBox2 
                    icon={<WarningIcon sx={{ fontSize:"2rem", marginTop:"1rem", color:"#990000"}}/>}
                    errorTitle="Limited support"
                    message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />

                <Title_Details 
                    title="Collect customer information"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."
                />

                <JavaDashoard 
                JavaScript="Javascript"
                items = {javaMessage}
                />

                <Title_Details 
                title="Initialize transaction"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <JavaDashoard 
            JavaScript="PHP"
            message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore."
            />

            <Title_Details 
                title="Verify Transaction"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />
            <Title_Details 
                title="Handle webhook"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <Title_Details 
                title="Mobile SDKs"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <Title_Details 
                title="Charge APIs"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <Title_Details 
                title="Use cases"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <JavaDashoard 
            JavaScript="JSON"
            message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore."
            />

            <Title_Details 
                title="Charge APIs"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <div className='handling_wrapper'>
                <Handling 
                    items={HandlingList}
                />
            </div>

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
        </InnerPage4creat>
    </PageWrapper>
  )
}

export default CreatePayment