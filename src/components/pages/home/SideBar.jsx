import items from "../../data/data.json"
import { Box, useTheme } from '@mui/material'
import SideBarItems from "./SideBarItems";

function Sidebar() {
  const {palette} = useTheme();
  return (
    <Box bgcolor={palette.grey[100]} className="sidebar">
      <div className='sideBar_main_container'>
          { 
            items.map((item, index) => <SideBarItems key={index} item={item} />)
          }  
      </div>
    </Box> 
  )
}

export default Sidebar