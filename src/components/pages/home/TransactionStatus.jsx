import React from 'react'
import { HeadContainer, InnerPageContainer, PageWrapper, SubContent } from '../../boxes_style/page_wrapper'
import HeaderDetails from './HeaderDetails'
import Title_Details from './Title_Details'
import ErrorBox from '../../errorBox/ErrorBox'
import ErrorBox2 from '../../errorBox/ErrorBox2'
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import ShowResPdash from './ShowResPdash'

function TransactionStatus() {
  return (
    <PageWrapper>
        <InnerPageContainer width="60%">
            <HeadContainer>
                <HeaderDetails 
                    title="Get Transaction Title"
                    details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sint delectus voluptatem officia eum nostrum!"
                />
            </HeadContainer>

            <Title_Details 
                title="How to verify payment"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sint delectus voluptatem officia eum nostrum!"
            />
            <Title_Details 
                title="Collect customer information"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sint delectus voluptatem officia eum nostrum!"
            />

            <ErrorBox 
                icon={<ErrorIcon sx={{ fontSize:"2rem", color:"#0d2543"}}/>}
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                natus, laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
            />

            <SubContent>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
            </SubContent>

            <ShowResPdash 
                curls="cUR"

            />

            <ErrorBox2 
                    icon={<WarningIcon sx={{ fontSize:"2rem", marginTop:"1rem", color:"#990000"}}/>}
                    errorTitle="Limited Support"
                    message="Not all endPoints are supported by our SDKs yet. You'll see a list of which endpoints are supported 
                     for each SDK in its documentation. if you find an endpoint that's missing in your prefered SDK, pls send in a PR"  
                />

            <Title_Details 
                title="Change returning users"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                natus, laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
            />

        </InnerPageContainer>
    </PageWrapper>
  )
}

export default TransactionStatus