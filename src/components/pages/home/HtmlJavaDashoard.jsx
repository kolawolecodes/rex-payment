import { Box, useTheme } from '@mui/material'
import React from 'react'
import { javaMessage } from '../../data/sideStepData';
import { ButtonHtml, ButtonWrapper1, Buttonjava, Content, DashBordWrap, HtmlJavaStylin, MessageCont, MessageWrapper } from '../../style/DashboardStyles';



function HtmlJavaDashoard({HTML, JavaScript}) {
  const { palette } = useTheme();
  return (
    <DashBordWrap>
      <ButtonWrapper1>
        <ButtonHtml >{HTML}</ButtonHtml>
        <Buttonjava style={{color:"#cfd3d9"}}>{JavaScript}</Buttonjava>
      </ButtonWrapper1>

      <HtmlJavaStylin borderColor={palette.grey[100]}>
        <MessageWrapper bgcolor={palette.grey[400]} >
          <MessageCont style={{}}>
            {
              javaMessage.map((item, index) => (
                <Content style={{marginLeft:"2rem"}} key={index}>
                  <span>{item.message}</span>
                </Content>
              ))
            }
          </MessageCont>
        </MessageWrapper>
      </HtmlJavaStylin>
    </DashBordWrap>
  )
}

export default HtmlJavaDashoard