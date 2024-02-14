import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useMemo } from "react"
import { themeSettings } from "./theme"
// import QuickStart from "./components/pages/home/QuickStart"
// import Authentication from "./components/pages/home/Authentication"
// import PaymentMethod from "./components/pages/home/PaymentMethod"
// import PaymentPage from "./components/pages/home/PaymentPage"
// import FrontEnd from "./components/pages/home/FrontEnd"
// import BackEnd from "./components/pages/home/BackEnd"
// import CreatePayment from "./components/pages/home/CreatePayment"
// import TransactionStatus from "./components/pages/home/TransactionStatus"
// import Mobile from "./components/pages/home/Mobile"
// import Home from "./components/pages/home/Home"
import Sidebar from "./components/pages/home/SideBar"
import MainPage from "./components/pages/home/MainPage"



function App() {
  // const theme = useMemo(() => createTheme(themeSettings), []);
    return (
      <div className='app'>
          <BrowserRouter>
                {/* <ThemeProvider theme={theme}> */}
                  {/* <CssBaseline/> */}
                  <MainPage />
                {/* </ThemeProvider> */}
          </BrowserRouter>
      </div>  
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
