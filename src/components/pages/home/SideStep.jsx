import React from 'react'
import { SubContent, SubTitle, SubTitleConte } from '../../boxes_style/pageWrapper'

function SideStep({title, items, message}) {
    
  return (
    <div className='right_side_step'>
        <SubTitle marginTop="2rem">
            <h3>{title}</h3>
        </SubTitle>
        <SubContent marginTop="-1rem">
            {
                items.map((step, index) => (
                    <SubContent padding="0 0.3rem 0.5rem 0.5rem" key={index} className='sideStep'>step {index+1}. <span className='right_step_title'>{step.title}</span></SubContent>
                ))
            }
            {/* <li className='step'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li> */}
        </SubContent>
        <SubContent fontSize="0.8rem">
            <span>{message}</span>
        </SubContent>
    </div>
  )
}

export default SideStep