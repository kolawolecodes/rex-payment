import React from 'react'
import "./paymentMethod.css"
import Helpful from './Helpful'
import Footer from '../footer/Footer'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import SideStep from './SideStep';
import { overviewsteps4 } from '../../data/sideStepData';
import TitleDetails from './TitleDetails';
import ErrorBox from '../../errorBox/ErrorBox';
import ErrorIcon from '@mui/icons-material/Error';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import{ ExampleContainer, ExampleContent, HeadContainer, InnerPageContainer, PageWrapper, SubContent } from '../../boxes-style/page_wrapper';
import HeaderDetails from './HeaderDetails';
import PaymentOptions from './PaymentOptions';



function PaymentMethod() { 
    const {palette} = useTheme();
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageWrapper>
        <InnerPageContainer>
            <HeaderDetails 
                title="Payment Method"
                details="RexPay support a wide variety of methods for your customers to pay you, across a wide 
                range of countries. when accepting  payments, you can specifiy what payment 
                methods you are willing to accept from ypu customers."
            />
            
            <SubContent>
                To autorize API calls from your server, pass your secret key as a bearer token. 
                The means passing an autorization header with a value of "Bearer: YOUR_SECRET_KEY".
            </SubContent>
        

        <TitleDetails 
            title="Account Setting"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
            fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
        />
        
        <TitleDetails 
            title="Per Payment"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
            fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
        />

        {/* Error */}
        <ErrorBox 
            icon={<ErrorIcon 
                sx={(theme) => ({ fontSize:"2rem", color: palette.grey[400] ,
                [theme.breakpoints.down("sm")]: {fontSize: "1.5rem"},
                [theme.breakpoints.only("sm")]: {fontSize: "1.5rem"}
            })}
            />}
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
            natus velit ex in corrupti asperiores temporibus dolores dolorem incidunt, 
            laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
        />

        {/* Example */}
        
        <SubContent>
            messageHead = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
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

        <SubContent className='payment_instrct_container'>
            To autorize API calls from your server, pass your secret key as a bearer token. 
            The means passing an autorization header with a value of "Bearer: YOUR_SECRET_KEY".
        </SubContent>

        <TitleDetails 
            title="Supported payment methods"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
            fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
        />

        <PaymentOptions 
            name="Payment Option"
            value="Value"
        />
            <TitleDetails 
                title="Expiring payments"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
            />
        {/* Example */}
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

                


        {/* Helpful question */}
        <Helpful />

            {/* footer */}
        </InnerPageContainer>

        {/* Right hand side */}
        { !matches &&
            <SideStep 
                title="On this Page" 
                items= {overviewsteps4}
            />
        }
    </PageWrapper>
  )
}

export default PaymentMethod