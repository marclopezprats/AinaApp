// src/CircleIcon.js
import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box } from '@mui/material';

const CircleIcon = ({ colorCircle, size }) => {
  return (
    <Box
      sx={{  
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',  // Ancho fijo del contenedor
        height: '24px', // Alto fijo del contenedor
      }}
    >
      <FiberManualRecordIcon color={colorCircle}  size={size} /> {/* Ajustar el tamaño del ícono dentro del contenedor */}
    </Box>
  );
};

export default CircleIcon;
