import { Box, useTheme } from '@mui/material'
import React from 'react'
import { paymentMethods } from '../../data/sideStepData'

function PaymentOptions({name, value}) {
    const {palette} = useTheme();
  return (
    <div className='paymentTable_container'>
        <Box bgcolor={palette.grey[100]} className='payment_inner_container'>
            <div className='table_header_container'>
                <div className='table_header'>
                    <h4>{name}</h4>
                </div>
                <div className='table_header'>
                    <h4>{value}</h4>
                </div>
            </div>
            <div className='table_body_container'>
                {
                    paymentMethods.map((item, index) => (
                        <div key={index} className='tableBody'>
                            <span className='tableBody_title'>{item.title}</span>
                            <span className='tableBody_value'>{item.value}</span>
                        </div>
                    ))
                }
            </div>
        </Box>
    </div>
    )
}

export default PaymentOptions