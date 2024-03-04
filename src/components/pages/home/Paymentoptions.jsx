import { useTheme } from '@mui/material'
import React from 'react'
import { paymentMethods } from '../../data/sideStepData'
import { PaymentOptContaina, PaymentOptWrap, PaymntBodyContainer, PaymntBodyWrap, PaymntHdContainer, PaymntHder, TableBodyValue, Tabletitle } from '../../style/PaymentStyle';


function PaymentOptions({name, value}) {
    const {palette} = useTheme();
  return (
    <PaymentOptWrap >
        <PaymentOptContaina bgcolor={palette.grey[100]} >
            <PaymntHdContainer>
                <PaymntHder >
                    <h4>{name}</h4>
                </PaymntHder>
                <PaymntHder >
                    <h4>{value}</h4>
                </PaymntHder>
            </PaymntHdContainer>
            <PaymntBodyWrap>
                {
                    paymentMethods.map((item, index) => (
                        <PaymntBodyContainer key={index}>
                            <Tabletitle>{item.title}</Tabletitle>
                            <TableBodyValue>{item.value}</TableBodyValue>
                        </PaymntBodyContainer>
                    ))
                }
            </PaymntBodyWrap>
        </PaymentOptContaina>
    </PaymentOptWrap>
    )
}

export default PaymentOptions