import { Box, Typography, useTheme } from "@mui/material";
import { Headerserch, Logbox, SearchIconWrapper, Searchsignin, Sigincontainer, Signbox, StyledInputBase } from "../../style/HeadSearchStyle";
import { alpha, styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { BorderBottom } from "@mui/icons-material";
// import Search from "@mui/icons-material/Search";

const Search = styled('div')(({ theme }) => ({
  position: 'relative', width:"auto",
  
  // [theme.breakpoints.up('md')]: {
  //   width:"auto",
  // },

  // [theme.breakpoints.down('md')]: {
  //   width:"auto",  marginLeft:"45px",
  // },

  [theme.breakpoints.down('sm')]: {
    width:"auto", 
  },

}));


const SearchSignIn = () => {
  
  const { palette } = useTheme();
  const theme = useTheme()
  
  return (
    <Searchsignin
      sx={{ flexGrow: 1}}
    >
      
    <Headerserch>
      <Search>
        <SearchIconWrapper>
              <SearchIcon color={palette.grey[100]}
                sx={{
                  zIndex:"3",
                  [theme.breakpoints.down("sm")]: {fontSize:"1rem",},

                }}
              />
        </SearchIconWrapper>
        <StyledInputBase type="text" name="search" id="search"  placeholder= "Search..."/>
      </Search>

      <Sigincontainer>
        <Logbox>
          <Typography className="login"
            fontSize="1rem"
            variant="h6" 
            fontWeight="600" 
            color= {palette.grey[900]}

            sx={(theme) => ({
              [theme.breakpoints.only("sm")]: {},
              [theme.breakpoints.down("sm")]: {fontSize:"0.9rem"},
            })} 
          >
            Log in
          </Typography>
        </Logbox>
        <Signbox bgcolor={palette.grey.main}>
          <Typography className="signup"
            variant="h6" 
            fontSize="1rem" 
            fontWeight="600" 
            color="#fff"
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {fontSize:"0.8rem", padding:"2px"}
            })} 
            >
            Sign Up
          </Typography>
        </Signbox>
        </Sigincontainer>
      </Headerserch> 
    </Searchsignin>
    
    
  )
}

export default SearchSignIn

// '&:hover': {
//   backgroundColor: "#ff3333",
//   color:"#fff",
//   border:"none",
// }

// '&:hover': {
//   backgroundColor: "#ff3333",
//   color:"#fff",
//   border:"none"
// },
// '&:hover': {
//   color:"#040c16",
//   border:"0.04rem solid #ff3333 "
// },
{/* <AppBar position="static">
    <Toolbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
        </Toolbar>
  </AppBar> */}


      // <Headerserch  position="static">
      //       <Search
      //         sx={(theme) => ({
      //           [theme.breakpoints.down("sm")]: {}
      //         })}
      //         >
      //         <SearchIconWrapper>
      //               <SearchIcon />
      //         </SearchIconWrapper>
      //         <StyledInputBase type="text" name="search" id="search"  placeholder= "Search..."
               
      //         />
      //       </Search>
        
          
      //       <Sigincontainer 
      //       >
      //         <Signbox>
      //           <Typography className="login"
      //             fontSize="1.1rem"
      //             variant="h6" 
      //             fontWeight="600" 
      //             color= {palette.grey[900]}

      //             sx={(theme) => ({
      //               [theme.breakpoints.down("sm")]: {fontSize:"0.9rem"}
      //             })} 
      //           >
      //             Log in
      //           </Typography>
      //         </Signbox>
      //         <Signbox bgcolor={palette.grey.main}>
      //           <Typography className="signup"
      //             variant="h6" 
      //             fontSize="1.1rem" 
      //             fontWeight="600" 
      //             color="#fff"
      //             sx={(theme) => ({
      //               [theme.breakpoints.down("sm")]: {fontSize:"0.9rem"}
      //             })} 
      //             >
      //             Sign Up
      //           </Typography>
      //         </Signbox>
      //       </Sigincontainer>
         
      // </Headerserch >