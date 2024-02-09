import React from 'react'
import { SubContent, SubTitle, SubTitleConte } from '../../Boxes_style/pageWrapper'

function Title_Details({title, details}) {
  return (
    <SubTitleConte >
        <SubTitle fontSize="0.8rem">
            <h2>{title}</h2>
        </SubTitle>
        <SubContent >
            <span >{details}</span>
        </SubContent>
    </SubTitleConte>
  )
}

export default Title_Details