import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Image from 'mui-image'


export default function Apoyo() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        {apoyos.map((apoyo) => (<Image src={apoyo.image} alt={apoyo.alt} height="100px" fit="scale-down"/>))}
      </Stack>
    </div>
  );
}

const apoyos =[
    {
        image: "../../images/gobierno.jpg",
        alt:"Gobierno de Colombia"
},
{
    image: "../../images/SENA.png",
    alt: "SENA"
},
{
    image: "../../images/fondo emprender.jpg",
    alt: "Fondo Emprender"
},
];