import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import LogoIcon from '@mui/icons-material/Token';

export default function ButtonAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundImage: 'unset' }}>
      <Container maxWidth="xl" >
        <Toolbar sx={{ justifyContent: 'space-between', padding: 0 }}>
          <LogoIcon sx={{ width: "80px", height: "85px", cursor: "pointer" }} onClick={() => { navigate("/") }} />
          <Box sx={{ width: "100%", pl: 3, pr: 3 }}>
            {/* <Button sx={{ textTransform: 'capitalize', color: "white", fontSize: 18 }}>Home</Button>
            <Button sx={{ textTransform: 'capitalize', color: "white", fontSize: 18 }}>Staking</Button> */}
          </Box>
          <Button startIcon={<AccountBalanceWalletIcon />} size='large' variant="contained" sx={{ color: 'white', bgcolor: '#6D4AFE', textTransform: 'capitalize', '&:hover': { bgcolor: '#6D4AFE' } }}>Connect</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}