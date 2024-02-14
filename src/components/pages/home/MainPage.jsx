import React, { useMemo } from 'react'
import Sidebar from './SideBar'
import InnerMainPage from './InnerMainPage'
import SearchSignIn from '../header_search_log/HeaderSearch'
import Footer from '../footer/Footer'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from "../../../theme"

function MainPage() {
    const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className='mainpage'>
            <section>
                <Sidebar />
            </section>

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <section  style={{ width:"100%", height:"auto", display:"flex", flexDirection:"column"}}>
                <SearchSignIn />
                <InnerMainPage />
                <Footer />
            </section>
        </ThemeProvider>
    </div>
  )
}

export default MainPage