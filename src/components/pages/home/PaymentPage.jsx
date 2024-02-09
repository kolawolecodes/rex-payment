
import ErrorIcon from '@mui/icons-material/Error';
import "./paymentPage.css"
import Helpful from './Helpful'
import Footer from '../footer/Footer'
import SideStep from './SideStep'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { overviewsteps4, overviewsteps5, testModes } from '../../data/sideStepData'
import Title_Details from './Title_Details'
import ErrorBox from '../../errorBox/ErrorBox'
import Example from '../../errorBox/Example'
import AuthContent from './AuthContent'
import MyList from './MyList'
import PageWrapper, { HeadContainer, HeadContent, HeadTitle, HeaderBody, InnerPageContainer, SubContent, SubTitle, SubTitleConte } from '../../boxes_style/pageWrapper'

function PaymentPage() {
  return (
    <PageWrapper>
        {/* Left Hand Side */}
        <InnerPageContainer>
            <HeadContainer>
                <HeadTitle>
                    <h1>payment Page</h1>
                </HeadTitle>
            </HeadContainer>
            <HeaderBody>
                <HeadContent className='payment_detail'>
                    RexPay support a wide variety of methods for your customers to pay you, across a wide 
                    range of countries. when accepting  payments, you can specifiy what payment 
                    methods you are willing to accept from ypu customers.
                </HeadContent>
                <HeadContent>
                    There are two ways to specify your accepted payment methods.
                </HeadContent>
            </HeaderBody>

            <Title_Details 
                title="Step1: Assembly payment details"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
            />
            
            <Title_Details 
                title="Per Paymenty"
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

            <SubContent className='payment_instrct_container'>
                <span className='payment_instrct'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis".
                </span>
            </SubContent>

            <Title_Details 
                title="Step2: Get a payment link"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis, 
                fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?"
            />

            {/* Example 1 */}
            <div className='error_wrapper'>
                <Example 
                    message = "CONST RESPONSE = AWAIT GOT.POST(`HTTPS://API.FLUTTERWAVE.COM/V3/PAYMENTS)`"
                />  
            </div>

            <div className='payment_instrct_container'>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis".
                </span>
            </div>

            {/* Example  2*/}
            <div className='error_wrapper'>
                <Example 
                    message = "CONST RESPONSE = AWAIT GOT.POST(`HTTPS://API.FLUTTERWAVE.COM/V3/PAYMENTS)`"
                />  
            </div>
            
            <AuthContent 
                title="Step 3: Redirect the user to the page Link"
                decription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                children={<MyList items={testModes}/>}
                decription2="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sint dolore obcaecati veniam perferendis id perspiciatis rem 
                vero porro totam pariatur."
                empty=""
            />

            <SubTitleConte>
                <SubTitleConte>
                    <SubTitle>
                    <h2>What if the  payment fails</h2>
                    </SubTitle>
                </SubTitleConte>
                <HeaderBody className='payment_detail_conatainer'>
                    <span className='payment_detail'>
                        If the payment attempt fails (for instance, due to insufficient funds). 
                        you don't need to do anything. We'll keep the payment page open, so the 
                        the custumer can try again until the payment succeeds or they  close to cancel, after 
                        which we will redirect to the redirect_url with the query pararmeters tx-ref and a status of failed.
                    </span>
                    <span>
                        If you have webhooks enabled, we'll send you a notitification for each failed payment attept. This is useful 
                        in case you want to later reach out to customers who had issues paying. See our <span style={{color:"#ff3333", cursor:"pointer"}}>webhooks guide</span> for an example.
                    </span>
                </HeaderBody>
            </SubTitleConte>


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
                items= {overviewsteps5}
                message="What if payment fails?"
            />
        </div>
    </PageWrapper>
  )
}

export default PaymentPage