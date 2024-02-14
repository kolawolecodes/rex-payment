import React from 'react'
import "./footer.css"
import { Box, useTheme } from '@mui/material'
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

function Footer() {
  const {palette} = useTheme();
  return (
    <Box className='footer'
      display= "flex"
      borderColor = {palette.grey[100]}
      width= "80%"
      margin="auto 0 1rem 3rem"
      >
      {/* left hand side */}
      <div className='footer_main_wrapper'>
          <div className='footer_title_container'>
              <div className='footer_icon'>
                <ForumIcon  color="blue" sx={{fontSize: "1.2rem", color:"#ff3333"}} />
              </div>
              <div className='footer_title'>
                  <span>Have any questions?</span>
              </div>
          </div>
          <div className='footer_body'>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt.</span>
          </div>
      </div>

      {/* right hand side */}
      <div className='footer_main_wrapper'>
          <div className='footer_title_container'>
              <div className='footer_icon'>
                <SmartDisplayIcon sx={{fontSize: "1.2rem", color:"#ff3333"}} />
              </div>
              <div className='footer_title'>
                  <span>Video tutorials</span>
              </div>
          </div>
          <div className='footer_body'>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt.</span>
          </div>
      </div>
    </Box>
  )
}

export default Footer