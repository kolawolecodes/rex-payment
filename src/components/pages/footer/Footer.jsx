import React from 'react'
import "./footer.css"
import { Box, useTheme } from '@mui/material'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';


import { FooterBody, FooterConainer, FooterMainWrap, FooterTitle, FooterTitleCont, FooterWrap, Footerbodycontent } from '../../style/FooterStyle';



function Footer() {
  const {palette} = useTheme();

  return (
    <FooterWrap
      sx={{borderTop: "0.03rem solid #cfd3d9", }}
    >
      {/* left hand side */}
      <FooterConainer
      >
        <FooterMainWrap >
          <FooterTitleCont >
            <ForumIcon   sx={{fontSize: "1.2rem", color:"#ff3333"}} />
            <FooterTitle >
              Have any questions
            </FooterTitle>
          </FooterTitleCont>
          <FooterBody>
            <Footerbodycontent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt.
            </Footerbodycontent>
          </FooterBody>
        </FooterMainWrap>

        {/* right hand side */}
        <FooterMainWrap >
          <FooterTitleCont>
              <SmartDisplayIcon sx={{fontSize: "1.2rem", color:"#ff3333"}} />
              <FooterTitle >
                Video tutorial
              </FooterTitle>
          </FooterTitleCont>
          <FooterBody >
              <Footerbodycontent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt.
              </Footerbodycontent>
          </FooterBody>
        </FooterMainWrap>
      </FooterConainer>
    </FooterWrap>
  )
}

export default Footer