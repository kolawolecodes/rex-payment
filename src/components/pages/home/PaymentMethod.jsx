import React from 'react'
import "./paymentMethod.css"
import Helpful from './Helpful'
import Footer from '../footer/Footer'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import SideStep from './SideStep';
import { overviewsteps4 } from '../../data/sideStepData';
import Title_Details from './Title_Details';
import ErrorBox from '../../errorBox/ErrorBox';
import ErrorIcon from '@mui/icons-material/Error';
import Example from '../../errorBox/Example';
import { Box, useTheme } from '@mui/material';
import{ HeadContainer, InnerPageContainer, PageWrapper, SubContent } from '../../boxes_style/pageWrapper';
import HeaderDetails from './HeaderDetails';
import PaymentOptions from './PaymentOptions';

function PaymentMethod() {
    const {palette} = useTheme();
  return (
    <PageWrapper>
        <InnerPageContainer width="100%">
            <HeadContainer>
                <HeaderDetails 
                    title="Payment Method"
                    details="RexPay support a wide variety of methods for your customers to pay you, across a wide 
                    range of countries. when accepting  payments, you can specifiy what payment 
                    methods you are willing to accept from ypu customers."
                />

                <SubContent margin="1.5rem 0 0 0">
                    <span>
                        To autorize API calls from your server, pass your secret key as a bearer token. 
                        The means passing an autorization header with a value of "Bearer: YOUR_SECRET_KEY".
                    </span>
                </SubContent>
            </HeadContainer>
            

            <Title_Details 
                title="Account Setting"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
            />
            
            <Title_Details 
                title="Per Payment"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
            />

            {/* Error */}
            <ErrorBox 
                icon={<ErrorIcon sx={{ fontSize:"2rem", color:"#000"}}/>}
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                natus velit ex in corrupti asperiores temporibus dolores dolorem incidunt, 
                laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
            />

            {/* Example */}
            <div className='error_wrapper'>
                <Example 
                    messageHead = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    message = "CONST RESPONSE = AWAIT GOT.POST(`HTTPS://API.FLUTTERWAVE.COM/V3/PAYMENTS)`"
                />  
            </div>
            <SubContent className='payment_instrct_container'>
                <span className='payment_instrct'>
                    To autorize API calls from your server, pass your secret key as a bearer token. 
                    The means passing an autorization header with a value of "Bearer: YOUR_SECRET_KEY".
                </span>
            </SubContent>

            <Title_Details 
                title="Supported payment methods"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
            />

            <PaymentOptions 
                name="Payment Option"
                value="Value"
            />
                <Title_Details 
                    title="Expiring payments"
                    details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                    fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
                />
            {/* Example */}
            <div className='error_wrapper'>
                <Example 
                    message = "CONST RESPONSE = AWAIT GOT.POST(`HTTPS://API.FLUTTERWAVE.COM/V3/PAYMENTS)`"
                />  
            </div>


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
        {/* Right hand side */}
        <div>
            <SideStep 
                title="On this Page" 
                items= {overviewsteps4}
            />
        </div>
    </PageWrapper>
  )
}

export default PaymentMethod