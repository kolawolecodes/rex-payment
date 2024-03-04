import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { apiKeys, overviewsteps3, retrieveAPIKeys } from '../../data/sideStepData';
import SideStep from './SideStep';
import "./authentication.css"
import { Box, useMediaQuery, useTheme } from '@mui/material';
import ErrorBox from '../../errorBox/ErrorBox';
import Helpful from './Helpful';
import ErrorIcon from '@mui/icons-material/Error';
import MyList from './MyList';
import { testModes } from '../../data/sideStepData';
import { ExampleContainer, ExampleContent, InnerPageContainer, PageWrapper, SubContent } from '../../boxes-style/page_wrapper';
import HeaderDetails from './HeaderDetails';
import NoteBox from '../../errorBox/NoteBox';
import TitleDetails from './TitleDetails';
import Empty from '../../utilities/Empty';
import MyList2 from './MyList2';

function Authentication() {
    const {palette} = useTheme();
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <PageWrapper>
        <InnerPageContainer>
            <HeaderDetails 
                title="Authentication"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sint delectus voluptatem officia eum nostrum!"
            />
            {/* Live N Test Mode */}
            <TitleDetails
                title="Mode vs Live Mode Test"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            
            <MyList items={testModes}/>
            <SubContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sint dolore obcaecati veniam perferendis id perspiciatis rem 
                vero porro totam pariatur.
            </SubContent>
            <Empty empty=""/>
           
                {/* API Keys */}
            <TitleDetails
                title="API Keys"
                details="When you create a Rex Pay account, you're given three kinds of API keys."
            />

            <MyList items={apiKeys}/>
           

            {/* Retrieving your API */}

            <TitleDetails
                title="Retrieve Your API keys"
                details="Your API keys are vital to making requests successful to 
                our servers. To get your  keys on testmode:"
            />

            <MyList2 items={retrieveAPIKeys}/>

            <Empty empty=""/>

            <SubContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda
            </SubContent>
        
            {/* error handling */}
            <NoteBox 
                    icon={<ReportProblemIcon sx={(theme) => ({ 
                        fontSize:"2rem", color:"#660000",
                        [theme.breakpoints.down("sm")]: {fontSize:"1.5rem"}
                    })}
                    
                    />}
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                    natus velit ex in corrupti asperiores temporibus dolores dolorem incidunt, 
                    laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
            />

            {/* Autorizing API */}
                <TitleDetails 
                    title="Authorize API Calls"
                    details="All API calls on Rexpay are authenticated. API requests are made without 
                    autorization will fail with the status code of 401:Utorized."
                />
                <ErrorBox 
                    icon={<ErrorIcon sx={(theme) => ({
                         fontSize:"2rem", color:"#0d2543",
                        
                         [theme.breakpoints.down("sm")]: {fontSize:"1.7rem"},

                    })}
                    />}
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                    natus velit ex in corrupti asperiores temporibus dolores dolorem incidunt, 
                    laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
                />

                <SubContent>
                    To autorize API calls from your server, pass your secret key as a bearer token. 
                    The means passing an autorization header with a value of "Bearer: YOUR_SECRET_KEY".
                </SubContent>
                        
                {/* Example */}
                <SubContent>
                    For example, an API call look like this Node.js.
                </SubContent>
                <ExampleContainer bgcolor={palette.grey[400]}>
                    <ExampleContent>
                        <code>
                            CONST RESPONSE = AWAIT GOT.POST&#40;"HTTPS://API.FLUTTERWAVE.COM/V3/PAYMENTS",&#123;
                            <br />
                            HEADERS&#58; <br />
                            &nbsp; 
                                &#123;AUTHORIZATION: `BEARER $&#123;PROCESS.ENV.FLW_SECRET_KEY&#125;`<br />
                                &#125;, <br />
                            JSON: &#123;<br />
                            &nbsp;    // YOURPAYLOAD
                            &#125; <br />
                            &#125;&#41;;
                        </code>
                    </ExampleContent>
                </ExampleContainer>

                <SubContent>
                    If you're using one of our <span>backend SDKs</span>, you don't need to pass 
                    the header manually; instead you will provide your keys when initializing the library.".
                </SubContent>

                {/* Example 2 */}

                <ExampleContainer bgcolor={palette.grey[400]}>
                    <ExampleContent>
                        <code>
                            INSTALL WITH: NPM | REXPAY-NODE-V3 
                            <br />
                            <br />
                            CONST FLUTTERWAVE = REQUIRED&#40;'REXPAY-NODE-V3'&#41;;<br />
                            CONST FLUTTERWAVE = REQUIRED&#40;PROCESS.ENV.FLW_PRODUCT_KEW_SECRET_KEY&#41;;<br />
                            
                            &nbsp; //SUBSEQUENT CALLS WILL AUTOMATICALLY HAVE THE HEADER ADDED <br />
                            
                            FLW.MISC.BVN&#40;&#123;BVN: "123456789010"&#125;&#41;<br />
                            .THEN&#40;RESPONSE =&gt; CONSOLE.LOG&&#41;
                        </code>
                    </ExampleContent>
                </ExampleContainer>
                {/* <Example 
                    message = "//INSTALL WITH: NPM | REXPAY-NODE-V3 CONST FLUTTERWAVE = REQUIRED(PROCESS.ENV.FLW_PRODUCT_KEW_SECRET_KEY); //SUBSEQUENT CALLS WILL AUTOMATICALLY HAVE THE HEADER ADDED FLW.MISC.BVN({BVN:`123456789010`}).THEN(RESPONSE => CONSOLE.LOG(RESPONSE)"
                />  
                         */}
                {/* Helpful question */}
                <Helpful />
        </InnerPageContainer>
        
        {/* Right hand side */}

        { !matches &&
            <SideStep 
                title="On this Page" 
                items= {overviewsteps3}
            />
        }
    </PageWrapper>
  )
}

export default Authentication