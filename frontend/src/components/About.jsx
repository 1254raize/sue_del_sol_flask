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


function About(props) {
    return(
        <div>
            <Container sx={{mt:"100px", maxWidth: props.screenSize ? "90%": "70%"}}>
                <Typography className="title" variant="h2" sx={{fontFamily:"great vibes", fontSize: "5rem", fontWeight: 700, textAlign: "center"}}>Conocenos</Typography>
                <br></br>
                <Typography variant="subtitle1" sx={{fontSize: props.screenSize ? "1rem": "1.5rem", textAlign:"justify"}}>Somos una empresa colombiana dedicada a la producción de crema de licor de caña de alta calidad. Nuestra misión es ofrecer 
                un producto auténtico y delicioso, hecho con ingredientes 100% naturales y producido en Colombia.
                Nuestra crema de licor de caña es el resultado de una receta tradicional y cuidadosamente elaborada, que combina los mejores ingredientes con un proceso de fabricación artesanal. 
                Estamos comprometidos con la sostenibilidad y trabajamos directamente con agricultores locales para asegurarnos de tener los ingredientes más frescos y de calidad.
                Estamos orgullosos de ser una empresa 100% colombiana y de apoyar a la comunidad local, pasando por caficultores y paneleros, nuestro objetivo es llevar el sabor
                de colombia a tu mesa a través de nuestros esfuerzos de responsabilidad social.
                Gracias por elegir nuestras cremas y por apoyar a un producto hecho en Colombia con amor. </Typography>
            </Container>
            
        </div>
    )
};

export default About;