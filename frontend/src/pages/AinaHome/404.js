import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Block } from '@mui/icons-material'; // Importa el ícono de prohibido
import back from 'assets/images/backgroundAina.jpg';

const FullScreenBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${back})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  textAlign: 'center',
});

const IconContainer = styled(Box)({
  transform: 'scale(4)', 
  marginBottom: '60px',
});

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <FullScreenBox>
      <IconContainer>
        <Block style={{ fontSize: '50px', color: '#d6061e' }} /> {/* Ícono con tamaño base */}
      </IconContainer>
      <Box mb={3}>
        <Typography variant="h2" sx={{ color: "#FFFFFF" }} gutterBottom>
          ¡EP! ¡Carril en contra dirección!
        </Typography>
        <Typography variant="h5" sx={{ color: "#FFFFFF" }} gutterBottom>
          404 - Página no encontrada
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{ color: "#FFFFFF" }}
        onClick={handleButtonClick}
      >
        Volver a la página principal
      </Button>
    </FullScreenBox>
  );
};

export default NotFoundPage;
