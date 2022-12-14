import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';

export default function ButtonAppBar() {
  return (
    <Box sx={{  }}>
      <AppBar position="sticky" sx={{backgroundColor:"rgba(136, 172, 173, 0.3)", transition: "all 0.3s ease-in-out", color:"black"}}>
        <Toolbar sx={{ml:10}}>
        
            <Logo sx={{left: -70, top: 10}}/>
        
          <IconButton
            
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h6 style={{fontFamily: "Great Vibes", fontSize:"2rem", margin:0, color:"rgb(197, 187, 96)"}}>Sue del Sol</h6>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}