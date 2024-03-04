import myVideo from "../../../images/bandicam 2023-11-17 19-13-23-648.mp4"
import "./quickstart.css";
import {Box, useMediaQuery, useTheme } from '@mui/material';
import Helpful from '../home/Helpful';
import { overviewsteps1, step1, step2 } from "../../data/SideStepData";
import Footer from '../../pages/footer/Footer'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import TitleDetails from './TitleDetails';
import ErrorIcon from '@mui/icons-material/Error';
import ErrorBox from '../../errorBox/ErrorBox';
import  { HeadContainer, InnerPageContainer, PageWrapper, SubContent } from '../../boxes-style/page_wrapper';
import Steps from './Steps';
import HeaderDetails from './HeaderDetails';
import ReactPlayer from "react-player"
import { createRef, forwardRef, useRef} from "react";
import SideStep from "./SideStep";


function QuickStart() {
    let myRef = useRef(null);

    const handleClick = () => {
        myRef.current.scrollIntoView({ behaviour: "smooth"})
    }

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageWrapper>
        {/* left hand side */}
        
            <InnerPageContainer>
                <HeaderDetails
                    title= "Quick Start"
                    details= "Welcome! with our APIs, you can make and receive payments in dozens of currencies and countries, with variety of payment channels. Here's what you need to do:"
                />
                {/* step 1 */}
                <TitleDetails 
                    title="Step 1. Create Account"
                    details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia 
                    maiores saepe asperiores nemo quibusdam harum nesciunt fugit laboriosam aperiam?"
                />

                {/* attached video */}
                <Box 
                       
                    sx={(theme) => ({ display:"flex", flexWrap:"wrap",
                        // [theme.breakpoints.up("md")]: {marginBottom:"1rem" },
                        [theme.breakpoints.down("sm")]: {display:"flex", flexWrap:"wrap", width:"98%", margin:"auto",  }
                    })}
                >
                    <ReactPlayer className="reactplayer"  max-width="100%"  margin= "2rem 0 2rem 0" url="{myVideo}" controls={true} 
                        
                    />
                </Box>
                

                <SubContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </SubContent>

                <Steps 
                    items={step1}
                />

                {/* step 2 */}
                <TitleDetails 
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
                    icon={<ErrorIcon sx={(theme) => ({ fontSize:"1.8rem", color:"#0d2543", 
                    [theme.breakpoints.down("sm")]: {fontSize:"24px"},
                    [theme.breakpoints.down("md")]: {fontSize:"22px"},
                })}/>}
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                    natus velit ex in corrupti asperiores temporibus dolores dolorem incidunt, 
                    laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
                />
                <SubContent marginTop="1rem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia 
                    maiores saepe asperiores nemo quibusdam harum nesciunt fugit laboriosam aperiam?
                </SubContent>
                

                {/* step 3 */}

                <TitleDetails 
                    title="Step 3. Create an Account"
                    details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia 
                    maiores saepe asperiores nemo quibusdam harum nesciunt fugit laboriosam aperiam?"
                />

                {/* Helpful question */}
                <Helpful />
            </InnerPageContainer>
        
        {/* Right hand side */}


           { !matches &&
           <SideStep sideRef = {myRef}
            title="On this Page" 
            items= {overviewsteps1}
            handleClick={handleClick}
            />
            }
    </PageWrapper>
  )
}

export default QuickStart 

