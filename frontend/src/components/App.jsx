import React from "react";
// import Button from '@mui/material/Button';
import NavBar from "./navbar";
import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import { textAlign } from "@mui/system";
import Image from 'mui-image'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import ColombiaImgList from "./ColombiaImg";
import Apoyo from "./Apoyo";
import Amazonas from "./Amazonas";




function App() {

    const screenSize = useMediaQuery('only screen and (max-width: 1000px)');


    return (
    <div>
    <Animate play={true} start={{ opacity: 0, transform: "translateY(-200px)"}} end={{ opacity: 1, transform: "translateY(-100px)", position: "fixed", width: "100%", zIndex:10 }}>
    <NavBar screenSize={screenSize}></NavBar>
    </Animate>
    
    <Card sx={{backgroundColor:"rgba(255, 255, 255, 0.3)", mt: "100px", mx: screenSize ? 5: 20, pr: "20px"}}>
        <CardContent>
        <Typography sx={{fontFamily:"Great Vibes", textAlign:"center", fontSize: screenSize ? "2rem": "3rem"}} component="div">
            <h1 className="title">Cremas a la Colombiana</h1>
        </Typography>
        <Grid container spacing={1}>

        <Grid display="flex" justifyContent="center" xs={12} md={6}>
                <Image width="auto" src="../../images/mockupBottle.png" fit="scale-down"/>

            </Grid>

            
            <Grid xs sx={{}}>
                <h2>Nuestras cremas son 100% elaboradas en Colombia, desde el cafe, hasta la panela. <i>Todo es de origen colombiano</i></h2>
                
                    <ColombiaImgList/>


            </Grid>
           
        </Grid>
        
        </CardContent>
    </Card>
        <Amazonas screenSize={screenSize}/>
    <h2 style={{textAlign:"Center"}}>Con el apoyo de</h2>
   <Apoyo/>
    </div>
    )
    
}

export default App;