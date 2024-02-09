import { Box, useTheme } from '@mui/material'
import React from 'react'
import Package from './Package'
import Footer from "../footer/Footer";
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import SearchSignIn from '../Header_search_log/HeaderSearch';
import SearchIcon from '@mui/icons-material/Search';




function ThisHome({children}) {
  const {palette} = useTheme();
  return (
    <div className='thisHome'>
      <div className='thisHome_innercontainer'>
        <div className='title_documentstion'>
            <h2>RexPay Documentation</h2>
          </div>
          {/* Line 1 (SDK and payment) */}
        <div className='package_line'>
          <Package
            empty= ""
            title= "SDKs and Plugings"
            content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
          />
          <Package 
              empty= "" 
            title= "Collect Payment"
            content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
          />
        </div>
        {/* line 2 */}
        <div className='package_line' id='package_line2'>
          <Package
            empty= ""
            title= "SDKs and Plugings"
            content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
          />
          <Package 
              empty= "" 
            title= "Collect Payment"
            content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
          />
        </div>
        {/* footer layer */}
        <Footer 
          icon1= {<ForumIcon sx={{fontSize: "1.2rem"}} />}
          title1= "Have any questions?"
          body1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt."

          icon2= {<SmartDisplayIcon sx={{fontSize: "1.2rem"}} />}
          title2= "Video tutorials"
          body2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, deserunt."
        />
      </div>

    </div>
  )
}

export default ThisHome

{/* <Box className='footer_main_wrapper'
    display= "flex"
    gap= "20px"
    paddingTop= "20px"
    borderTop= "solid green"
    width= "70%"
    marginLeft= "120px"
    >
</Box> */}