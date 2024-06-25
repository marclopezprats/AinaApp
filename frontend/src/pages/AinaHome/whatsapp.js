import React, {lazy, useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import MKButton from "components/MKButton";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const Whatsapp = () => {
  
    const handleClick = () => {
        window.open('https://api.whatsapp.com/send?phone=34658962613&text=Voldria%20llogar%20un%20vehicle', '_blank'); // Reemplaza con el enlace deseado
      };
  return (
    <>
      <Box sx={{ position: 'fixed', top: '90%', right: '2%', zIndex: '1001', transition: '0.15s linear' }}>
      <Box 
      onClick={handleClick}
      sx={{
        width: 65, // Ancho del círculo
        height: 65, // Altura del círculo
        borderRadius: '50%', // Esto hace que el Box sea circular
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25D366', // Color de fondo similar al de WhatsApp
        cursor: 'pointer'
      }}
    >
      <WhatsAppIcon style={{ color: 'white', width: 45, // Ancho del círculo
        height: 45, // Altura del círculo
         }} />
    </Box>
      </Box>
      
    </>
  );
};

export default Whatsapp;

