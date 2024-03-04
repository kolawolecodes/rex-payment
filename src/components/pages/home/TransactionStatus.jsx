import React from 'react'
import { HeadContainer, InnerPageContainer, PageWrapper, SubContent } from '../../boxes-style/page_wrapper'
import HeaderDetails from './HeaderDetails'
import TitleDetails from './TitleDetails'
import ErrorBox from '../../errorBox/ErrorBox'
import ErrorBox2 from '../../errorBox/ErrorBox2'
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import ShowResPdash from './ShowResPdash'
import Helpful from './Helpful'

function TransactionStatus() {
  return (
    <PageWrapper
        sx={(theme) => ({ width:"70%", margin:"0", gap:"15px",
            [theme.breakpoints.up("md")]: { },
            [theme.breakpoints.down("sm")]: {width:"100%" }
        })}
    >
        <InnerPageContainer
            sx={(theme) => ({ 
                [theme.breakpoints.up("md")]: { },
                [theme.breakpoints.down("sm")]: {width:"100%", margin:"" }
        
            ,})}
        >
            <HeaderDetails 
                title="Get Transaction Title"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sint delectus voluptatem officia eum nostrum!"
            />

            <TitleDetails 
                title="How to verify payment"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sint delectus voluptatem officia eum nostrum!"
            />
            <TitleDetails 
                title="Collect customer information"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sint delectus voluptatem officia eum nostrum!"
            />

            <ErrorBox 
                icon={<ErrorIcon sx={{ fontSize:"2rem", color:"#0d2543"}}/>}
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                natus, laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
            />

            <SubContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

            <TitleDetails 
                title="Change returning users"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit, 
                natus, laudantium quod ab! A repudiandae, totam velit nihil minus cupiditate."
            />

            {/* Helpful question */}
            <Helpful />

        </InnerPageContainer>
    </PageWrapper>
  )
}

export default TransactionStatus