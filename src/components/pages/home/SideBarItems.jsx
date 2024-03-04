import items from "../../data/data.json"
import "../../../stylesfile/sidebar.css"
import { Box, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { SidebarTitle, SidebarTitleCont, SubNav, SubNavContainer, SubNavItem } from "../../style/SideBarItemStyling";




function SideBarItems({item}) {

  const [open, setOpen] = useState(false);
  const {palette} = useTheme();

 const theme = useTheme();
  
  const [selected, setSelected] = useState("");
  const [navSelected, setNavSelected] = useState("");
  let myRef = useRef();
  let mySideRef = useRef();

  // const ShowSubItem = (e) => {
  //   setOpen(!open)
  // }


  useEffect(() => {
    const Handler = (e) => {
      e.preventDefault();
      if (   !myRef.current.contains(e.target) ) {
        
        setOpen(false); 
      }
    };

    let ColorHandeler = (e) => {
      e.preventDefault();
      if ( !mySideRef.current.contains(e.target) ) {
        
        setSelected("");  
      } 
    };

    document.addEventListener("mousedown", Handler);
    document.addEventListener("mousedown", ColorHandeler);
    
    return () => {
      window.removeEventListener("mousedown", Handler)
      window.removeEventListener("mousedown", ColorHandeler)
  };

    
  });

  

  return (
    <>
          <SidebarTitleCont >
            <Link to={item.path} onClick={() => setSelected(!selected)}>
              <SidebarTitle ref={mySideRef}  onClick={() =>  setOpen(!open)} style={{color: selected ? "#ff3333" : ""}} >
                  {item.title}
              </SidebarTitle>
            </Link>
          </SidebarTitleCont>
        
      <SubNav ref={myRef} id='sidebar_content' className={open ? " open" : ""}>
        {
          item.childrens.map((child, index) => (
            <Link  to={child.path} onClick={() => setNavSelected(!navSelected)}  key={index} >
              <SubNavContainer className={open ? " open" : ""}>
                <SubNavItem >
                  {child.title}
                </SubNavItem>
              </SubNavContainer>
            </Link>
          ))
        }
      </SubNav>
    </>
  )
}

export default SideBarItems

