import React from 'react'
import { HeadContainer, HeadTitle, InnerPageContainer, PageWrapper, SubContent } from '../../boxes-style/page_wrapper'
import ErrorBox from '../../errorBox/ErrorBox'
import Helpful from './Helpful'
import Footer from '../footer/Footer'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import TitleDetails from './TitleDetails'
import { Box, useTheme } from '@mui/material'
import {styled } from '@mui/material/styles'
import { HandlingList, javaMessage, require4Sigle, require4multi, requirements } from '../../data/sideStepData'
import Requirement from './Requirement'
import HtmlJavaDashoard from './HtmlJavaDashoard'
import ErrorBox2 from '../../errorBox/ErrorBox2'
import Handling from './Handling'
import JavaDashoard from './JavaDashboard'
import WarningIcon from '@mui/icons-material/Warning';
import Heading from '../../utilities/Heading'

const MiddleSubHead = styled(Box)(({theme}) => ({
    display:"inline-Block", 
    width:"100%",  
    borderBottom:"0.04rem solid", 
    fontSize:"0.8rem",
    borderColor: theme.palette.grey[400], 
    
}));


function CreatePayment() {
    const {palette} = useTheme();
  return (
    <PageWrapper sx={(theme) => ({ width:"60%", margin:"auto", gap:"15px",
        [theme.breakpoints.up("md")]: { },
        [theme.breakpoints.down("sm")]: {width:"100%" }

    ,})}>
        <InnerPageContainer  
            sx={(theme) => ({ 
            [theme.breakpoints.up("md")]: { },
            [theme.breakpoints.down("sm")]: {width:"100%", margin:"" }
    
        ,})}
        >
                <Heading 
                   title= "Create Payment"
                />

                <ErrorBox 
                    message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores delectus at 
                    officiis. Provident magnam esse qui atque dolorum!"
                />

                <TitleDetails 
                    title="Popup"
                    details="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores 
                    delectus at officiis. Provident magnam esse qui atque dolorum!"
                />

                {/* the main list now */}
                <Box sx={(theme) => ({
                        borderColor: palette.grey[400],
                        border:"0.04rem solid",
                        borderRadius:"0.5rem",
                    })}>
                    <Requirement 
                        items = {requirements}
                    />
                    <MiddleSubHead>
                        <h3 style={{padding:"1rem 2rem"}}>For single <span style={{color:'green', cursor:"pointer",}}> split pamyment</span></h3>
                    </MiddleSubHead>

                    <Requirement
                        items = {require4Sigle}
                    />

                    <MiddleSubHead>
                        <h3 style={{padding:"1rem 2rem"}}>For Multi <span style={{color:'green', cursor:"pointer"}}> split pamyment</span></h3>
                    </MiddleSubHead>

                    <Requirement 
                        items = {require4multi}
                    />
                </Box>

                <SubContent margin="1.5rem 0">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit.
                    
                </SubContent>

                <HtmlJavaDashoard 
                HTML="HTML"
                JavaScript="JavaScript"
                items = {javaMessage}
                />

                <SubContent margin="1.5rem 0">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit.
                </SubContent>

                <ErrorBox 
                    message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."
                />

                <TitleDetails 
                    title="Important notes"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />
                <TitleDetails 
                    title="Handle the callback methods"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />

                {/* change this laterto prompt not error */}
                <ErrorBox2 
                    icon={<WarningIcon sx={(theme) => ({
                        fontSize:"2rem", color:"#990000",
                        [theme.breakpoints.only("sm")]: {fontSize:"1.6rem"},
                        [theme.breakpoints.down("sm")]: {fontSize:"1.6rem"}
                    })}/>}
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit.
                </SubContent>

                <JavaDashoard 
                JavaScript="Javascript"
                items = {javaMessage}
                />

                <ErrorBox2
                    icon={<WarningIcon 
                        sx={(theme) => ({
                            fontSize:"2rem", color:"#990000",
                            [theme.breakpoints.only("sm")]: {fontSize:"1.6rem"},
                            [theme.breakpoints.down("sm")]: {fontSize:"1.6rem"}
                        })}
                        />}
                    errorTitle="Limited Support"
                    message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />

                <TitleDetails 
                    title="Verify Transaction"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />
                <TitleDetails 
                    title="Handle webhook"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
                />

                <TitleDetails 
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

                <TitleDetails 
                    title="Collect customer information"
                    details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."
                />

                <JavaDashoard 
                JavaScript="Javascript"
                items = {javaMessage}
                />

                <TitleDetails 
                title="Initialize transaction"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <JavaDashoard 
            JavaScript="PHP"
            message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore."
            />

            <TitleDetails 
                title="Verify Transaction"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />
            <TitleDetails 
                title="Handle webhook"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <TitleDetails 
                title="Mobile SDKs"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <TitleDetails 
                title="Charge APIs"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <TitleDetails 
                title="Use cases"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <JavaDashoard 
            JavaScript="JSON"
            message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore."
            />

            <TitleDetails 
                title="Charge APIs"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ipsam vel voluptatem tempora doloremque ipsum asperiores illo sunt velit."  
            />

            <div className='handling_wrapper'>
                <Handling 
                    items={HandlingList}
                />
            </div>

            
            {/* Helpful question */}
            <Helpful />
            
        </InnerPageContainer>
    </PageWrapper>
  )
}

export default CreatePayment