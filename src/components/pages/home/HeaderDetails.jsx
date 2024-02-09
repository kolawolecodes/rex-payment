import React from 'react'
import { HeaderBody, SubTitle, SubTitleConte } from '../../boxes_style/pageWrapper'

function HeaderDetails({title, details}) {
  return (
    <SubTitleConte >
        <SubTitle>
            <h1>{title}</h1>
        </SubTitle>
        <HeaderBody >
            <span >{details}</span>
        </HeaderBody>
    </SubTitleConte>
  )
}

export default HeaderDetails