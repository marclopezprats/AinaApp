import React from 'react';
import Box from '@mui/material/Box';
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
        width: {xs:40, md: 40, lg:55}, // Ancho del círculo
        height: {xs:40, md: 40, lg:55}, // Altura del círculo
        borderRadius: '30%', // Esto hace que el Box sea circular
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25D366', // Color de fondo similar al de WhatsApp
        cursor: 'pointer'
      }}
    >
      <WhatsAppIcon style={{ color: 'white', width: '60%', // Ancho del círculo
        height: '60%', // Altura del círculo
         }} />
    </Box>
      </Box>
      
    </>
  );
};

export default Whatsapp;

