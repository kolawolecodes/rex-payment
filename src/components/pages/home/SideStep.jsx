import { createRef, forwardRef, useRef } from 'react';
import { SubContent, SubTitle } from '../../boxes-style/page_wrapper';
import { Box, useTheme } from '@mui/material';
import { Rightsteps, Sidesteps, Stepscontainer } from '../../style/SideStepStyle';





function SideStep({sideRef, title, items, message, handleClick}, ) {
    
     
    const theme = useTheme()
  return (
    <Rightsteps 
   
    >
        <SubTitle 
            sx={(theme) => ({ fontSize:"1.2rem", marginTop:"1rem",
                [theme.breakpoints.down("md")]: {fontSize: "16px", fontWidth:"600"},
                [theme.breakpoints.down("md")]: {fontSize: "0.9rem", fontWidth:"600"},
              })}
            >
           <h4>{title}</h4>
        </SubTitle>
        <Stepscontainer>
            {
                items.map((step, index) => (
                    <Sidesteps ref={sideRef} key={index} onClick={handleClick}>
                       <Box
                        sx={(theme) => ({
                            [theme.breakpoints.only("sm")]: { fontSize:"0.7rem" },
                        })}
                       >step {index+1}.</Box>
                       <Box sx={(theme) => ({
                        [theme.breakpoints.down("md")]: {width:"70%",},
                        [theme.breakpoints.only("sm")]: { marginRight:"0.5rem",  fontSize:"0.7rem" },

                        
                        })}>{step.title}</Box> 
                    </Sidesteps>
                ))
            }
        </Stepscontainer>
            {/* <li className='step'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li> */}
        <SubContent
            sx={(theme) => ({
                fontSize:"0.8rem"
            })}
        >
            {message}
        </SubContent>
    </Rightsteps>
  )
}

export default SideStep

// const handleClick = () => {
//     sideRef.current[i]?.scrollIntoView({ behaviour: "smooth"})
//     console.log(sideRef.current)
// }
