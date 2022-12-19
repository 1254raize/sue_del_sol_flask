import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DropdownMenu from "./DropdownMenu"

import Logo from './Logo';

export default function ButtonAppBar(props) {
  return (
    <Box sx={{}}>
      <AppBar position="sticky" sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", transition: "all 0.3s ease-in-out", color: "black" }}>
        <Toolbar sx={{ ml: 10 }}>

          <Logo sx={{ left: -70, top: 10 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h6 style={{ fontFamily: "Great Vibes", fontSize: "2rem", margin: 0, color: "rgb(197, 187, 96)" }}>Sue del Sol</h6>
          </Typography>

          {props.screenSize ? <DropdownMenu /> :
            <Stack direction="row" spacing={2}>
              <Button variant="text">Contacto</Button>
              <Button variant="text">Productos</Button>
              <Button variant="text">Quienes somos</Button>
            </Stack>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}