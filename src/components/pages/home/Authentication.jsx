import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { apiKeys, overviewsteps3, retrieveAPIKeys } from '../../data/sideStepData';
import SideStep from './SideStep';
import Footer from '../footer/Footer';
import "./authentication.css"
import { Box, useTheme } from '@mui/material';
import ErrorBox from '../../errorBox/ErrorBox';
import Example from '../../errorBox/Example';
import Helpful from './Helpful';
import AuthContent from '../home/AuthContent';
import ErrorBox2 from '../../errorBox/ErrorBox2';
import ErrorIcon from '@mui/icons-material/Error';
import MyList from './MyList';
import { testModes } from '../../data/sideStepData';
import RetrieveList from './RetrieveList';
import PageWrapper, { HeadContainer, InnerPageContainer, SubContent } from '../../Boxes_style/pageWrapper';
import Title_Details from './Title_Details';
import HeaderDetails from './HeaderDetails';

function Authentication() {
    const {palette} = useTheme();
  return (
    <PageWrapper>
        <InnerPageContainer width="100%">
            <HeadContainer>
                <HeaderDetails 
                    title="Authentication"
                    details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sint delectus voluptatem officia eum nostrum!"
                />
            </HeadContainer>
            {/* Live N Test Mode */}
            <AuthContent 
                title="Mode vs Live Mode Test"
                decription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                children={<MyList items={testModes}/>}
                decription2="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sint dolore obcaecati veniam perferendis id perspiciatis rem 
                vero porro totam pariatur."
                empty=""
            />
                {/* API Keys */}
            <AuthContent 
                title="API Keys"
                decription="When you create a Rex Pay account, you're given three kinds of API keys"
                replaceThis="array"
                children={<MyList items={apiKeys}/>}
            />

            {/* Retrieving your API */}
            <AuthContent 
                title="Retrieve Your API keys"
                decription="Your API keys are vital to making requests successful to 
                our servers. To get your  keys on testmode:"
                children={<RetrieveList items={retrieveAPIKeys}/>}
                empty=""
                decription3="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
            />
            {/* error handling */}
            <ErrorBox2 
                    icon={<ReportProblemIcon sx={{ fontSize:"2rem", color:"#660000", marginTop: "1rem"}}/>}
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                    natus velit ex in corrupti asperiores temporibus dolores dolorem incidunt, 
                    laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
            />

            {/* Autorizing API */}
                <AuthContent 
                    title="Authorize API Calls"
                    decription="All API calls on Rexpay are authenticated. API requests are made without 
                    autorization will fail with the status code of 401:Utorized."
                />
                <ErrorBox 
                    icon={<ErrorIcon sx={{ fontSize:"2rem", color:"#0d2543", marginTop: "1rem"}}/>}
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                    natus velit ex in corrupti asperiores temporibus dolores dolorem incidunt, 
                    laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
                />

                <SubContent>
                    <span>To autorize API calls from your server, pass your secret key as a bearer token. 
                        The means passing an autorization header with a value of "Bearer: YOUR_SECRET_KEY".
                        </span>
                </SubContent>

                {/* Example */}
                <Example 
                    messageHead = "For example, an API call look like this Node.js"
                    message = "CONST RESPONSE = AWAIT GOT.POST(`HTTPS://API.FLUTTERWAVE.COM/V3/PAYMENTS)`"
                />

                <SubContent>
                    <span>
                        If you're using one of our <span>backend SDKs</span>, you don't need to pass 
                        the header manually; instead you will provide your keys when initializing the library.".
                    </span>
                </SubContent>

                {/* Example 2 */}
                <Example 
                    message = "//INSTALL WITH: NPM | REXPAY-NODE-V3 CONST FLUTTERWAVE = REQUIRED(PROCESS.ENV.FLW_PRODUCT_KEW_SECRET_KEY); //SUBSEQUENT CALLS WILL AUTOMATICALLY HAVE THE HEADER ADDED FLW.MISC.BVN({BVN:`123456789010`}).THEN(RESPONSE => CONSOLE.LOG(RESPONSE)"
                />  
                        
                {/* Helpful question */}
                <Helpful />


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
        <div>
            <SideStep 
                title="On this Page" 
                items= {overviewsteps3}
            />
        </div>
    </PageWrapper>
  )
}

export default Authentication