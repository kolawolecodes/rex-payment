import { Box, useTheme } from '@mui/material'
import React from 'react'
import FlexBetween from '../../boxes-style/FlexBetween'
import styled from '@emotion/styled';
import { javaMessage } from '../../data/sideStepData';
import { ButtonWrapper, Buttonjava, Content, DashBordWrap, HtmlJavaStylin, MessageCont, MessageWrapper } from '../../style/DashboardStyles';

// const HtmlJavaStylin = styled(Box)({
//   width:"100%",
//   height: "270px",
//  position: "relative",
//  lineHeight:"1.7rem",
//   border:"0.04rem solid",
//   borderRadius:"0.7rem",
//   display: "flex",
//   justifyContent:"center",
//   alignItems:"center",
// })

function JavaDashoard({JavaScript, items }) {
  const { palette } = useTheme();
  return (
    <DashBordWrap>
      <ButtonWrapper>
        <Buttonjava>
            <Box color={palette.grey[400]}>{JavaScript}</Box>
        </Buttonjava>
      </ButtonWrapper>
      <HtmlJavaStylin borderColor={palette.grey[100]}>
        <MessageWrapper bgcolor={palette.grey[400]} >
          <MessageCont>
            {
              javaMessage.map((item, index) => (
                <Content  key={index}>
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

export default JavaDashoard