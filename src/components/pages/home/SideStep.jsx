import React from 'react'
import { SubContent, SubTitle, SubTitleConte } from '../../Boxes_style/pageWrapper'

function SideStep({title, items, message}) {
    
  return (
    <SubTitleConte width="20vw">
        <SubTitle marginTop="2rem">
            <h3>{title}</h3>
        </SubTitle>
        <SubContent marginTop="-1rem">
            {
                items.map((step, index) => (
                    <SubContent padding="0 0.3rem 0.5rem 0" key={index} className='sideStep'>step {index+1}. <span className='right_step_title'>{step.title}</span></SubContent>
                ))
            }
            {/* <li className='step'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li> */}
        </SubContent>
        <SubContent fontSize="0.8rem">
            <span>{message}</span>
        </SubContent>
    </SubTitleConte>
  )
}

export default SideStep