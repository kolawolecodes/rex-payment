import { useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function SideBarItems({item}) {
  const [open, setOpen] = useState(false);
  const {palette} = useTheme();
  const testNav = {
    display: "block",
    padding:  "0.5rem",
    margin: "0 0 0.2rem 0.5rem",
    color: "#0a1e36",
    transition: "all 1s",
    textDecorationLine: "none"
  }
  


  return (
    <div class='side_item'>
      <div  className='sidebar_title'>
        <Link to={item.path} className="titleNav">
          <span className='sideTitle' onClick={() => setOpen(!open)} >
              {item.title}
          </span>
        </Link>
      </div>
      <div id='sidebar_content' className={open ? " open" : ""}>
        {
          item.childrens.map((child, index) => (
            <Link to={child.path} className= "navLink"  key={index}>
              <span id='sidebarSubcontent' className={open ? " open" : ""}>
                {child.title}
              </span>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
// className={open ? "sidebar_item open" : "sidebar_item"}

export default SideBarItems

{/* <SideBarItems key={index} item={child} /> */}