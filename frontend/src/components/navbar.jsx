import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DropdownMenu from "./DropdownMenu"
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

import Logo from './Logo';

export default function NavBar(props) {
  return (
    <Animate play={true} start={{ opacity: 0, transform: "translateY(-100px)"}} end={{ opacity: 1, transform: "translateY(0px)", position: "fixed", width: "100%", zIndex:10 }}>
    <Box sx={{}}>
      <AppBar position="fixed" sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", transition: "all 0.3s ease-in-out", color: "black" }}>
        <Toolbar sx={{ ml: 10 }}>

          <Logo style={{ top: "50%", left: "-25px", transform: "translate(-50%, -50%)", height: "50px"}} />

          <Typography variant="h6" component={Link} to="/" underline="none" sx={{ flexGrow: 1 }}>
            <h6 style={{ fontFamily: "Great Vibes", fontSize: "2rem", margin: 0, color: "rgb(197, 187, 96)"}}>Sue del Sol</h6>
          </Typography>

          {props.screenSize ? <DropdownMenu /> :
            <Stack direction="row" spacing={2}>
              <Button component={Link} to="/contacto" variant="text">Contacto</Button>
              <Button variant="text">Productos</Button>
              <Button component={Link} to="/about" variant="text">Quienes somos</Button>
            </Stack>}
        </Toolbar>
      </AppBar>
    </Box>
    </Animate>
  );
}