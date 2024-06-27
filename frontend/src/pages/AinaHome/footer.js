import React from 'react';
import { Grid, Box, Link, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import logoaina from "assets/images/isoAina.png";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#031b27', color: '#FFFFFF', py: 4 }}>
      <Grid container item xs={10} lg={8} justifyContent="center" sx={{ mx: "auto", textAlign: "center" }}>
        <Grid item xs={12} sm={4} mb={4}>
          <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
            <Box component="img" src={logoaina} alt="Logo" sx={{ height: 70, width: 70, mr: 2 }} />
            <Typography sx={{ color: '#FFFFFF' }} variant="h6">Ainacar Grup</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center"> 
          <Typography variant="body2" sx={{textAlign: "left" }}>
            C/ de Joaquín Costa, 50.<br />
            08206 Sabadell (BCN)<br />
            Tlf: 937 273 907
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} mb={4}>
       

          <Box display="flex" alignItems="center" justifyContent="center"> 

          <Box  sx={{textAlign: "left" }}>
          <Typography  mb={2}variant="h6" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>HORARIO</Typography>

            <Typography variant="h6" sx={{ color: '#FFFFFF',fontWeight: 'bold' }}>De lunes a viernes:</Typography> 
            <Typography variant="h6" sx={{ color: '#FFFFFF',fontWeight: 'regular' }}>08:00h a 13:00h</Typography>
            <Typography variant="h6" sx={{ color: '#FFFFFF',fontWeight: 'regular' }}> 16:00h a 19:00h (Agosto 15:00h a 18:00h)</Typography>
            <Typography variant="h6" sx={{ color: '#FFFFFF',fontWeight: 'bold' }}>Sábado:</Typography> 
            <Typography variant="h6" sx={{ color: '#FFFFFF',fontWeight: 'regular' }}> 09:00h a 13:00h</Typography>

          </Box>
          </Box>

        </Grid>
        <Grid item xs={12} sm={4} mb={4}>
        <Box display="flex" alignItems="center" justifyContent="center"> 

<Box  sx={{textAlign: "left" }}>
        <Typography  mb={2}variant="h6" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>GRUPO AINACAR</Typography>

          {[
            "Aina Car Protect",
            "FAQ. Preguntas frecuentes",
            "Aviso Legal",
            "Política Gestión de daños",
            "Términos y Condiciones Generales",
            "Política de privacidad",
            "Política de cookies",
            "Condiciones generales de contratación",
            "Información antes del alquiler"
          ].map((text, index) => (
            <Typography variant="h6" sx={{ color: '#FFFFFF',fontWeight: 'regular' }}> {text}</Typography>

          ))}
          </Box>
          </Box>
        </Grid>
        <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }} sx={{ px: 2, mt: 4 }}>
        <Typography variant="body2" sx={{ color: '#FFFFFF', textAlign: { xs: 'center', sm: 'left' }, mb: { xs: 2, sm: 0 } }}>
          © Copyright 2024 Ainacar Grup - Todos los derechos reservados.
        </Typography>
        <Box>
          {[
            { icon: <Facebook />, href: "#" },
            { icon: <Instagram />, href: "#" },
            { icon: <LinkedIn />, href: "#" }
          ].map((item, index) => (
            <Link key={index} href={item.href} color="inherit" sx={{ color: '#FFFFFF', ml: 1 }}>
              {item.icon}
            </Link>
          ))}
        </Box>
      </Box>
      </Grid>
      
    </Box>
  );
};

export default Footer;
