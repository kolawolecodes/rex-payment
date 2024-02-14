import React, { forwardRef } from 'react'
import { SubContent, SubTitle, SubTitleConte } from '../../boxes_style/page_wrapper'

function Title_Details({title, details}, ref) {
  return (
    <SubTitleConte id="title">
        <SubTitle fontSize="0.8rem">
            <h2 ref={ref}>{title}</h2>
        </SubTitle>
        <SubContent >
            <span >{details}</span>
        </SubContent>
    </SubTitleConte>
  )
}

export default forwardRef (Title_Details)