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



function Contact(props) {
    const fontVariantBig = props.screenSize ? "h7": "h6";
    const fontVariantSmall = props.screenSize ? "h8": "h7";
    
    return(
        <div style={{marginTop: "100px"}}>
            <Grid container spacing={1} sx={{minHeight: 500, maxWidth:"100%"}}>
                <Grid sm={12} md={6} sx={{m:"20px", display: "flex", justifyContent: "center"}}>
                    <Card sx={{backgroundColor: "rgba(200,200,200,0)", aspectRatio: "1/1", maxHeight: "500px", minWidth: "330px"}}>
                        <CardMedia component="iframe" sx={{aspectRatio: "1/1"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351.2431407276198!2d-74.38552777582763!3d5.125857265567032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f7d0867b3411f%3A0x59255d8bf9c709ce!2sSue%20del%20Sol!5e0!3m2!1sen!2sco!4v1671586281893!5m2!1sen!2sco"/>
                    </Card>
                </Grid>
                <Grid sm md display="flex" justifyContent="center">
                    <Card sx={{m:"20px", backgroundColor: "rgba(200,200,200,0)", maxHeight: "300px", position: "relative" ,top: "45%", transform: "translate(0%, -50%)"}}>
                    <CardContent sx={{px: "15px"}}>
                    <Typography variant="h4" align="center">Contactanos</Typography>
                            <TableContainer sx={{marginTop: "25%", marginLeft: "50%", transform: "translate(-50%, -50%)"}}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell size="small">
                                                <Typography variant={fontVariantBig}>Dirección:</Typography>
                                            </TableCell>
                                            <TableCell padding="none">
                                                <Typography variant={fontVariantSmall}>CALLE 3 3-05 CARRERA 3 1-39 NIMAIMA CUNDINAMARCA</Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell size="small">
                                                <Typography variant={fontVariantBig}>Correo:</Typography>
                                            </TableCell>
                                            <TableCell padding="none">
                                                <Typography variant={fontVariantSmall}>gerenciasuedelsol@gmail.com</Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell size="small">
                                                <Typography variant={fontVariantBig}>Telefono:</Typography>
                                            </TableCell>
                                            <TableCell padding="none">
                                                <Typography variant={fontVariantSmall}>305 790 3597</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
            
        </div>
    )
}

export default Contact;