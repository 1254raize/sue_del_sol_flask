import React from "react";

import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';

import Image from 'mui-image'

import ColombiaImgList from "./ColombiaImg";
import Apoyo from "./Apoyo";
import Amazonas from "./Amazonas";



function Home(props) {
    return(
        <div>                
            <Card sx={{backgroundColor:"rgba(255, 255, 255, 0.3)", mt: "100px", mx: props.screenSize ? 5: 20}}>
                <CardContent>
                    <Typography sx={{fontFamily:"Great Vibes", textAlign:"center", fontSize: props.screenSize ? "2rem": "3rem"}} component="div">
                        <h1 className="title">Cremas a la Colombiana</h1>
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid display="flex" justifyContent="center" xs={12} md={6}>
                            <Image width="auto" src="../../images/mockupBottle.png" fit="scale-down"/>
                        </Grid>
                        <Grid xs md sx={{p:"20px"}}>
                            <h2>Nuestras cremas son 100% elaboradas en Colombia, desde el cafe, hasta la panela. <i>Todo es de origen colombiano</i></h2>
                            <ColombiaImgList/>
                        </Grid>
                    </Grid>        
                </CardContent>
            </Card>
            <Amazonas screenSize={props.screenSize}/>
            <h2 style={{textAlign:"Center"}}>Con el apoyo de</h2>
            <Apoyo/>
        </div>
    )
}

export default Home;