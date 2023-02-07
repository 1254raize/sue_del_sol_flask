import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Container } from "@mui/system";
import IsVisible from "react-is-visible";
import { imageTransitionStyling } from "./constants";
import Image from 'mui-image'

function Products(props){
    return(
        <div style={{marginTop: "100px"}}>
        <Container maxWidth="md" sx={{mt: "30px"}}>
            <Grid container spacing={1}>
                <Grid display="flex" justifyContent="center" xs={12} md={6}>
                    <IsVisible>
                        {(isVisible) => <div>
                            <Card sx={{maxWidth:props.screenSize ? 200: 300}}>
                                <CardMedia className="img-combined-1"
                                    component="img"
                                    height="auto"
                                    image="../../images/bottle 1.png"
                                    alt="Aperitivo tradicional"
                                    style={imageTransitionStyling(isVisible)}
                                />
                            </Card>
                            
                        </div>}
                    </IsVisible>
                    
                </Grid>
                <Grid xs md sx={{p:"20px"}}>
                    <Typography variant="h3" sx={{fontFamily: "Pacifico"}}>Aperitivo tradicional</Typography>
                    <br></br>
                    <Typography variant="h5">¿Prefieres algo más tradicional? Nuestro aperitivo tradicional te deleitara con su combinación de cafe, vainilla y chocolate</Typography>
                </Grid>
            </Grid>
            </Container>
        
        <Container maxWidth="md" sx={{mt: "30px"}}>
            <Grid container spacing={1}>
                <Grid display="flex" justifyContent="center" xs={12} md={6}>
                    <IsVisible>
                        {(isVisible) => <div>
                            <Card sx={{maxWidth:props.screenSize ? 200: 300}}>
                                <CardMedia className="img-combined-1"
                                    component="img"
                                    height="auto"
                                    image="../../images/bottle 1.png"
                                    alt="Aperitivo tradicional"
                                    style={imageTransitionStyling(isVisible)}
                                />
                            </Card>
                            <Container className="img-combined-2"><Image  src="../../images/araza 3.png" height="auto" sx={{maxWidth:props.screenSize ? 75: 100}}/></Container>
                            


                        </div>}
                    </IsVisible>
                    
                </Grid>
                <Grid xs md sx={{p:"20px"}}>
                    <Typography variant="h3" sx={{fontFamily: "Pacifico"}}>Aperitivo sabor a Arazá</Typography>
                    <br></br>
                    <Typography variant="h5">¿Buscas algo más exotico? Nuestro aperitivo de arazá le dara un toque de acidez a tu paladar que te deleitara</Typography>
                </Grid>
            </Grid>
            </Container>
            <Container maxWidth="md" sx={{mt: "30px"}}>
            <Grid container spacing={1}>
                <Grid display="flex" justifyContent="center" xs={12} md={6}>
                    <IsVisible>
                        {(isVisible) => <div>
                            <Card sx={{maxWidth:props.screenSize ? 200: 300}}>
                                <CardMedia className="img-combined-1"
                                    component="img"
                                    height="auto"
                                    image="../../images/bottle 1.png"
                                    alt="Aperitivo tradicional"
                                    style={imageTransitionStyling(isVisible)}
                                />
                            </Card>
                            <Container className="img-combined-2"><Image  src="../../images/copoasu.png" height="auto" sx={{maxWidth:props.screenSize ? 80: 110}}/></Container>
                            


                        </div>}
                    </IsVisible>
                    
                </Grid>
                <Grid xs md sx={{p:"20px"}}>
                    <Typography variant="h3" sx={{fontFamily: "Pacifico"}}>Aperitivo sabor a Copoazu</Typography>
                    <br></br>
                    <Typography variant="h5">¿Que tal algo más dulce? Nuestro aperitivo de copoasu te dara la mezcla perfecta entre acidez y dulzura, con ligeros tonos de cacao</Typography>
                </Grid>
            </Grid>
            </Container>

       
        
            
        </div>
    )
}

export default Products