import { Route, Routes } from 'react-router-dom'
import QuickStart from './QuickStart'
import PaymentMethod from './PaymentMethod'
import Home from "./Home"
import Authentication from "./Authentication"
import PaymentPage from "./PaymentPage"
import FrontEnd from "./FrontEnd"
import BackEnd from "./BackEnd"
import Mobile from "./Mobile"
import CreatePayment from "./CreatePayment"
import TransactionStatus from "./TransactionStatus"
import { styled } from "@mui/material/styles"
import { Box } from '@mui/material'

const Innermain = styled(Box)(( {theme} ) => ({
  marginTop:"90px",
  paddingBottom:"90px",
  width:"100%",
  height:"100%",
  paddingTop:"1rem",
  justifyContent:"column",  
  overflow:"hidden",
  

  [theme.breakpoints.only("sm")]:{ },
  [theme.breakpoints.down("sm")]:{ marginTop:"55px", paddingBottom:"120px",},
}))

function InnerMainPage() {
  return (
    <Innermain
    >
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/quickStart" element={<QuickStart/>} />
            <Route path="/authentication" element={<Authentication/>} />
            <Route path="/paymentMethod" element={<PaymentMethod/>} />
            <Route path="/paymentPage" element={<PaymentPage/>} />
            <Route path="/frontend" element={<FrontEnd/>} />
            <Route path="/backend" element={<BackEnd/>} />
            <Route path="/mobile" element={<Mobile/>} />
            <Route path="/createpayment" element={<CreatePayment/>} />
            <Route path="/transstatus" element={<TransactionStatus/>} />
        </Routes>
    </Innermain>
  )
}

export default InnerMainPage