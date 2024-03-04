import React from 'react'
import "./package.css"
import {  useTheme } from '@mui/material'
import { Empty, EmptyTitle, Emptycontent, EmptycontentWrap, PackageCont } from '../../style/PackageStyle';




function Package({title, content, blank}) {
    const {palette} = useTheme();
  return (
    <PackageCont>
        <Empty bgcolor= {palette.grey[100]}>
            {blank} 
        </Empty>

        <EmptycontentWrap>
            <EmptyTitle  color={palette.secondary.main}>
                {title}
            </EmptyTitle>

            <Emptycontent bgcolor= {palette.grey[100]}>
                {content}
            </Emptycontent>
        </EmptycontentWrap>


    </PackageCont>
  )
}

export default Package