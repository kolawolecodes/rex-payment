import React from 'react'
import { Box, useTheme } from '@mui/material'
import { ReqmntBodyCont, ReqmntTitleCont, RequirementWrap } from '../../style/RequirementStyle';


function Requirement({items}) {
    const {palette} = useTheme();
  return (
    <RequirementWrap  borderColor={palette.grey[100]}>
            {/* Heading  of Requirement list */}
            <ReqmntTitleCont>
                <h3>Param</h3>
                <h3>required?</h3>
                <h3>Description</h3>
            </ReqmntTitleCont>

            <div>
                {
                    items.map((item, index) => {
                        return index % 2 === 1 ? (
                            <ReqmntBodyCont key={index}>
                                <Box>{item.title}</Box>
                                <Box>{item.required}</Box>
                                <Box>{item.description}</Box>
                            </ReqmntBodyCont>
                        ) : (
                            <ReqmntBodyCont  key={index} bgcolor= {palette.grey[100]}>
                            <Box>{item.title}</Box>
                                <Box>{item.required}</Box>
                                <Box>{item.description}</Box>
                            </ReqmntBodyCont>
                        );
                    })
                }    
            </div>
        </RequirementWrap>   
  )
}

export default Requirement