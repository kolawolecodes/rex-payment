import items from "../../data/data.json"
import { Box , Typography, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { styled } from '@mui/material/styles'
import { Navbar, Navbarclose, Navclose, Navopen, SidebarmainCont, Sidebarnav, Sidebarwrp } from "../../style/SidebarStyle"
import SideBarItems from "./SideBarItems";





const Sidebar = () => {
  // const matches = useMediaQuery(mytheme.breakpoints.up("laptop"));
  const {palette} = useTheme();
  const [ sidebar, setSidebar ] = useState(true);

  const sideRef = useRef();

  
  const showSidebar = (e) => {
    e.preventDefault();
    setSidebar(!sidebar);
  }
  
  
  useEffect(() => {
    let HandleSideBar = (e) => {
      e.preventDefault();
      if (!sideRef.current.contains(e.target)) {
        
        setSidebar(true);
      }
      
    };

    document.addEventListener("mousedown", HandleSideBar);

    
    return () => {
      window.removeEventListener("mousedown", HandleSideBar)
  };
  });
  
  return ( 
    <Sidebarwrp>    
      <Navopen>
          <Link to="#" className="navbariconOpen" onClick={showSidebar}>
            <Navbar>
                <MenuIcon sx={(theme) => ({
                  fontSize:"28px",
                  [theme.breakpoints.down("sm")]:{fontSize:"1.6rem"}
                })} />
            </Navbar>
          </Link>
      </Navopen>
  
        <Sidebarnav ref={sideRef} bgcolor={palette.grey[100] }
          sx={(theme) => ({
            left: sidebar ? "0" : "-100%", transition: "all 1.2s ease-out", 
             [theme.breakpoints.down("md")]: {left: sidebar ? "0" : "-100%", transition: "all 1.2s ease-out",},
             [theme.breakpoints.down("sm")]: {left: sidebar ? "-100%" : "0", transition: "all 1.2s ease-out",}
          })}
          >
        
            <Navclose  
              sx={{
                left: sidebar ? "0%" : "-100%", transition: "all 1.2s ease-out",
                }}
              >
                {/* logo block */}
              <Box margin="auto auto">
                <Box>
                  <Typography variant="h6" fontWeight="900" color= "#ff3333"
                    sx={(theme) => ({
                      [theme.breakpoints.down("sm")]: {fontSize:"1.3rem"}
                    })}
                  >
                    RexPay
                  </Typography>
                  <Box bgcolor="#ff3333" height="0.3rem" width="3rem"></Box>
                </Box>
              </Box>

              <Link to="#" className="navBar" onClick={showSidebar}>
                <Navbarclose>
                  <CloseIcon sx={(theme) => ({fontSize:"28px",
                  [theme.breakpoints.down("sm")]: {fontSize:"2rem"}
                })} />
                </Navbarclose>
              </Link>
            </Navclose>
          
          <SidebarmainCont>
                { 
                  items.map((item, index) => <SideBarItems key={index} item={item} />)
                  // items.map((item, index) => <SideBarItems key={index} item={item} />)
                }  
          </SidebarmainCont>

        </Sidebarnav>
   

    
    </Sidebarwrp> 
  )
}

export default Sidebar