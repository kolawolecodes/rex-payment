import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function SideBarItems({item}) {
  const [open, setOpen] = useState(false);


  return (
    <div class='side_item'>
      <div className='sidebar_title'>
          <NavLink to={item.path} className="titleNav">
            <span className='sideTitle' onClick={() => setOpen(!open)} >
                {item.title}
            </span>
          </NavLink>
      </div>
      <div id='sidebar_content' className={open ? " open" : ""}>
        {
          item.childrens.map((child, index) => (
            <NavLink to={child.path} className='NavLink'   key={index}>
              <span id='sidebarSubcontent' className={open ? " open" : ""}>
                {child.title}
              </span>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}
// className={open ? "sidebar_item open" : "sidebar_item"}

export default SideBarItems

{/* <SideBarItems key={index} item={child} /> */}