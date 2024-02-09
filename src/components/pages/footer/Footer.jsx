import React from 'react'
import "./footer.css"
import { Box, useTheme } from '@mui/material'

function Footer({icon1, icon2, title1, title2, body1, body2 }) {
  const {palette} = useTheme();
  return (
    <Box className='footer'
      display= "flex"
      gap= "20px"
      paddingTop= "20px"
      borderTop= "2px solid"
      borderColor = {palette.grey[100]}
      width= "70%"
    >
      {/* left hand side */}
      <div className='footer_main_wrapper'>
          <div className='footer_title_container'>
              <div className='footer_icon'>
                  {icon1}
              </div>
              <div className='footer_title'>
                  <span>{title1}</span>
              </div>
          </div>
          <div className='footer_body'>
            {body1}
          </div>
      </div>

      {/* right hand side */}
      <div className='footer_main_wrapper'>
          <div className='footer_title_container'>
              <div className='footer_icon'>
                  {icon2}
              </div>
              <div className='footer_title'>
                  <span>{title2}</span>
              </div>
          </div>
          <div className='footer_body'>
            {body2}
          </div>
      </div>
    </Box>
  )
}

export default Footer