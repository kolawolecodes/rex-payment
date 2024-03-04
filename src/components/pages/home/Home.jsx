import { Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import Package from './Package'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import Heading from '../../utilities/Heading';
import { Link } from 'react-router-dom';
import { HeadContainer, HomeInnerWrap, HomeMainContainer, Homewrapper, Packageline } from '../../style/PackageStyle';





function Home() {
  const {palette} = useTheme();
  return (
      <Homewrapper>
        <HomeInnerWrap>
          <HeadContainer>
            <Heading
              title="RexPay Documentation" 
              />
          </HeadContainer>
          <HomeMainContainer>

              {/* Line 1 (SDK and payment) */}
              <Packageline>
                <Link to="/backend" className='navLink' >
                  <Package
                    empty= ""
                    title= "SDKs and Plugings"
                    content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
                  />
                </Link>

                <Link to="/collectpayment" className='navLink' >
                <Package 
                    empty= "" 
                  title= "Collect Payment"
                  content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
                />
                </Link>

              </Packageline>
            {/* line 2 */}
            <Packageline >
              <Link to="/chargetransfer" className='navLink'>
                <Package
                  empty= ""
                  title= "SDKs and Plugings"
                  content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
                />
              </Link>

              <Link to="/recurrent" className='navLink'>
                <Package 
                    empty= "" 
                  title= "Recurrent Payments"
                  content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
                />
              </Link>
            </Packageline>
        </HomeMainContainer>
      </HomeInnerWrap>
        {/* <Footer/> */}
      </Homewrapper>
  )
}

export default Home

/* .thisHome {
  width: 100%;
}

.thisHome_innercontainer {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto auto;
  gap: 30px;
  padding: 0;
}

.title_documentstion {
  margin-top: 1.2rem;
  padding: 0;
  font-size: 1rem;
  font-weight: 100;
  margin-bottom: -20px;
}

.package_line {
  display: flex;
  width: 70%;
  gap: 20px;
}

#package_line2 {
  margin-bottom: 2rem;
}  */