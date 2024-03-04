import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { themeSettings } from "./theme"
import Sidebar from "./components/pages/home/SideBar"
import MainPage from "./components/pages/home/MainPage"
import { useTheme } from "@emotion/react"
import { styled } from "@mui/material/styles"
import { mytheme } from "./components/style/Style"

const Appwrapper = styled(Box)(({ theme}) => ({
  display: "flex",
  minHeight:"100vh",
  height: "auto",
  width: "100%",
  maxWidth: "100vw",
  overflowX: "hidden",

  [theme.breakpoints.up("sm")]: { overflowX:"hidden",
    '&::-webkit-scrollbar': {
      display:"none"
    },
  },
  [theme.breakpoints.down("sm")]: {padding:"0 0.5rem", flexWrap:"wrap", flexDirection:"column", justifyContent:"center", overflowY:"auto", overflowX:"hidden",
        '&::-webkit-scrollbar': {
          display:"none"
        },
      },

    }));

function App() {

  const theme = useMemo(() => createTheme(themeSettings), []);

    const [w, setW] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setW(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    })
    return (
      <Appwrapper className="app">
          <BrowserRouter>

              <Sidebar />
            <ThemeProvider theme={theme}>
              <CssBaseline/>
                <MainPage />
            </ThemeProvider>
          </BrowserRouter>
      </Appwrapper>  
    )
  }

export default App












// import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
// import { useMemo } from "react"
// import { themeSettings } from "./theme"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Sidebar from "./components/pages/sideBar/Sidebar"
// import Home from "./components/pages/main/Home"

// // import SearchSignIn from "./pages/main/topSearchLogin/Index"
// // import LeftHandNavs from "./pages/leftHandNavs/Index"




// function App() {
//   const theme = useMemo(() => createTheme(themeSettings), [])
//   return (
//     <div className='app'>
//       <BrowserRouter>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           {/* <SearchSignIn /> */}
//           <Routes>
//             <Route path="/" element={<><Sidebar/><Home/></>} />
//           </Routes>
//         </ThemeProvider>
//       </BrowserRouter>
//     </div>
     
//   )
// }

// export default App
