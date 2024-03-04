import * as React from 'react';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
// import { grey } from '@mui/material/colors';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const MySwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: theme.palette.grey.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.grey.main, theme.palette.action.hoverOpacity)
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.palette.grey[300],
  },
}));

export default function BasicSwitches() {
  return (
    <div>
      <MySwitch {...label} defaultChecked size="small" />
    </div>
  );
}