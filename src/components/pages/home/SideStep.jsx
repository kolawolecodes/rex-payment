import { useRef } from 'react'
import { SubContent, SubTitle } from '../../boxes_style/page_wrapper'


function SideStep({title, items, message, ref}) {
    ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behaviour: "smooth"})
        console.log(ref)
    }
  return (
    <div className='right_side_step'>
        <SubTitle marginTop="2rem">
            <h3>{title}</h3>
        </SubTitle>
        <SubContent marginTop="-1rem">
            {
                items.map((step, index) => (
                    <SubContent padding="0 0.3rem 0.5rem 0.5rem" key={index} className='sideStep'>
                        <span style={{cursor:"pointer"}} onClick={handleClick}>
                            step {index+1}. <span ref={ref} className='right_step_title'>{step.title}</span> 
                        </span>
                    </SubContent>
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