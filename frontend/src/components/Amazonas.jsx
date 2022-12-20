import React from "react";
import Container from "@mui/material/Container";
import Image from 'mui-image'
import { fontSize } from "@mui/system";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from "@mui/material/Typography";
import IsVisible from "react-is-visible";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


function Amazonas(props) {
    const imageTransitionStyling = (isVisible) => ({
        opacity: isVisible ? 1: 0,
        top: isVisible ? 0: "100px",
        transition: "opacity 2s ease, top 2s ease",
      });
    return (
        <div>
            <h1 className="title" style={{fontSize: "3.5rem"}}>Sumergete en la Amazonia Colombiana</h1>
            <IsVisible>
                {(isVisible) => <Image style={imageTransitionStyling(isVisible)} src="../../images/amazonas.jpg" alt="Amazonas" height={props.screenSize ? "300px": "500px"} width="100%" fit="cover" overFlow="Hidden" sx={{objectPosition: "0% 35%"}}/>}
            </IsVisible>
            
            <Container maxWidth="md" sx={{mt: "30px"}}>
            <Grid container spacing={1}>
                <Grid display="flex" justifyContent="center" xs={12} md={6}>
                    <IsVisible>
                        {(isVisible) => <div>
                            <Card className="fruit1" sx={{maxWidth:props.screenSize ? 200: 300}}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="../../images/araza.jpg"
                                    alt="Araza"
                                    style={imageTransitionStyling(isVisible)}
                                />
                            </Card>
                            <Card className="fruit2" sx={{maxWidth:props.screenSize ? 200: 300}}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="../../images/araza 2.jpg"
                                    alt="Araza"
                                    style={imageTransitionStyling(isVisible)}
                                />
                            </Card>


                        </div>}
                    </IsVisible>
                    
                </Grid>
                <Grid xs md>
                    <Typography variant="h3" sx={{fontFamily: "Pacifico"}}>Disfruta de la acidez del Araza</Typography>
                    <Typography variant="h5">Pueba nuestro delicioso sabor a Araza, descubre uno de los sabores más exoticos de nuestra amazonia colombiana</Typography>
                </Grid>
            </Grid>
            </Container>
        </div>

    )

}

export default Amazonas;