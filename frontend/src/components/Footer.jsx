import React from "react";
import Typography from "@mui/material/Typography";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
 return(
    <div className="footer">
        <Typography variant="h3" align="center">
        <InstagramIcon className="icon" fontSize="5rem"/>
        <TwitterIcon className="icon" fontSize="5rem"/>
        <FacebookIcon className="icon" fontSize="5rem"/>
        </Typography>
        <Typography variant="h5" align="center">EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD. 15% VOL. ALC.</Typography>
        
    </div>
 )
}

export default Footer;