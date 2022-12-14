import React from "react";
// import Button from '@mui/material/Button';
import NavBar from "./navbar";
import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
// import Container from "@mui/material/Container";
import Image from 'mui-image'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import ColombiaImgList from "./ColombiaImg";
import Apoyo from "./Apoyo";
import { textAlign } from "@mui/system";



function App() {

    const screenSize = useMediaQuery('only screen and (max-width: 1000px)') ? "70px" : "100%";

    return (
    <div>
    <Animate play={true} start={{ opacity: 0, transform: "translateY(-100px)"}} end={{ opacity: 1, transform: "translateY(0px)" }}>
    <NavBar></NavBar>
    </Animate>
    
    <Card sx={{backgroundColor:"rgba(136, 172, 173, 0.2)", my: 5, mx: "20%", pr: "20px"}}>
        <CardContent>
        <Typography sx={{fontFamily:"Great Vibes", textAlign:"center"}} component="div">
            <h1 className="title">Cremas a la Colombiana</h1>
        </Typography>
        <Grid container spacing={1}>

        <Grid display="flex" justifyContent="center" xs={12} md={6}>
                <Image width="auto" src="../../images/mockupBottle.png" fit="scale-down"/>

            </Grid>

            
            <Grid xs sx={{}}>
                <h2>Nuestras cremas son 100% elaboradas en Colombia, desde el cafe, hasta la panela. <i>Todo es de origen colombiano</i></h2>
                
                    <ColombiaImgList/>
                    {/* <Grid container spacing={1}>
                        <Grid md={4} xs={6}>
                            <Image className="promo-image" src="../../araza.jpg" sx={{borderRadius:"50%", border: 2 }} style={{height:screenSize, width:screenSize}}/>
                        </Grid>
                        <Grid md={4} xs={6}>
                            <Image className="promo-image" src="../../copoasu.jpg" sx={{borderRadius:"50%", border: 2 }} style={{height:screenSize, width:screenSize}}/>
                        </Grid>
                        <Grid md={4} xs={12}>
                            <Image className="promo-image" src="../../copoasu.jpg" sx={{borderRadius:"50%", border: 2}} style={{height:screenSize, width:screenSize}}/>
                        </Grid>
                    </Grid> */}

            </Grid>
           
        </Grid>
        
        </CardContent>
    </Card>
    <h2 style={{textAlign:"Center"}}>Con el apoyo de</h2>
   <Apoyo/>
    </div>
    )
    
}

export default App;