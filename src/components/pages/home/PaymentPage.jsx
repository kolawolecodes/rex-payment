
import ErrorIcon from '@mui/icons-material/Error';
import "./paymentPage.css"
import Helpful from './Helpful'
import Footer from '../footer/Footer'
import SideStep from './SideStep'
import { afterPayment, overviewsteps5, testModes } from '../../data/sideStepData'
import TitleDetails from './TitleDetails'
import ErrorBox from '../../errorBox/ErrorBox'
import AuthContent from './AuthContent'
import MyList from './MyList'
import { ExampleContainer, ExampleContent, HeadContainer, HeadContent, HeadTitle, HeaderBody, InnerPageContainer, PageWrapper, SubContent, SubTitle, SubTitleConte } from '../../boxes-style/page_wrapper'
import HeaderDetails from './HeaderDetails';
import MyList2 from './MyList2';
import Empty from '../../utilities/Empty';
import { useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SubscriptSharp } from '@mui/icons-material';
// import { Palette } from '@mui/icons-material';


function PaymentPage() {
    const {palette} = useTheme();
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <PageWrapper>
        {/* Left Hand Side */}
        <InnerPageContainer>
        <HeaderDetails 
                    title="Payment Page"
                    details="RexPay support a wide variety of methods for your customers to pay you, across a wide 
                    range of countries. when accepting  payments, you can specifiy what payment 
                    methods you are willing to accept from ypu customers."
                />

        <SubContent>
            There are two ways to specify your accepted payment methods.
        </SubContent>
            <TitleDetails 
                title="Step1: Assembly payment details"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
            />
            
            <TitleDetails 
                title="Per Paymenty"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
            />

            {/* Error */}
            <ErrorBox 
                icon={<ErrorIcon sx={(theme) => ({ fontSize:"2rem", color:"#000",
                [theme.breakpoints.down("sm")]: {fontSize: "1.5rem"},
                [theme.breakpoints.only("sm")]: {fontSize: "1.5rem"}
            })}/>}
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                natus velit ex in corrupti asperiores temporibus dolores dolorem incidunt, 
                laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
            />

            <SubContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis".
            </SubContent>

            <TitleDetails 
                title="Step2: Get a payment link"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
            />

            {/* Example 1 */}
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis".
            </SubContent>
            

            {/* Example  2*/}
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
            
            <TitleDetails 
                title="Step 3: Redirect the user to the page Link"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <Empty/>
            {/* <AuthContent 
                title="Step 3: Redirect the user to the page Link"
                decription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                empty=""
            /> */}

            <MyList2 items={afterPayment}/>
            <SubContent>
                Four things will happen when payment is paid in full.
            </SubContent>
            
            <Empty empty=""/>

            <SubContent>
                On your server, you should handle the redirect and always verify the final state of the transsaction. <br />
                <br />
                Here's what transaction verification could look like in a Node.js app with our backend SDK:
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

            <SubTitleConte>
                <SubTitle>
                   <h3>What if the  payment fails</h3>
                </SubTitle>
                <SubContent className='payment_detail'>
                    If the payment attempt fails (for instance, due to insufficient funds). 
                    you don't need to do anything. We'll keep the payment page open, so the 
                    the custumer can try again until the payment succeeds or they  close to cancel, after 
                    which we will redirect to the redirect_url with the query pararmeters tx-ref and a status of failed.
                </SubContent>
                <br />
                <SubContent>
                    If you have webhooks enabled, we'll send you a notitification for each failed payment attept. This is useful 
                    in case you want to later reach out to customers who had issues paying. See our <span style={{color:"#ff3333", cursor:"pointer"}}>webhooks guide</span> for an example.
                </SubContent>
            </SubTitleConte>


            {/* Helpful question */}
            <Helpful />

        
        </InnerPageContainer>

        {/* Right hand side */}
        { !matches &&
            <SideStep 
                title="On this Page" 
                items= {overviewsteps5}
                message="What if payment fails?"
            />
        }
    </PageWrapper>
  )
}

export default PaymentPage