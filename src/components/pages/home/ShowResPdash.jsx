
import { Box, useTheme } from '@mui/material'
import React from 'react'
import FlexBetween from '../../boxes-style/FlexBetween'
import styled from '@emotion/styled';
import { javaMessage } from '../../data/sideStepData';
import { ButtonWrapper, Content, Curls, DashBordWrap, HtmlJavaStylin, MessageCont, MessageWrapper, SwitchContainer, SwitchLabel } from '../../style/DashboardStyles';
import BasicSwitches from '../../utilities/MySwitch';
// import { Label } from '@mui/icons-material';



function ShowResPdash({curls}) {
  const { palette } = useTheme();

  return (
    <DashBordWrap>
      <ButtonWrapper>
        <Box>
            <Curls>{curls}</Curls>
        </Box>
        <SwitchContainer>
          <SwitchLabel>Show Response</SwitchLabel>
          <BasicSwitches />
        </SwitchContainer>

      </ButtonWrapper>
      <HtmlJavaStylin borderColor={palette.grey[100]}>
        <MessageWrapper bgcolor={palette.grey[400]} >
          <MessageCont>
            {
              javaMessage.map((item, index) => (
                <Content key={index}>
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

export default ShowResPdash