import React from 'react';
import Box from '@mui/material/Box';
import MKTypography from "components/MKTypography";

import { useTranslation } from 'react-i18next';


const Comp247 = ({isOpenReservation}) => {
  
    const { t, i18n } = useTranslation();

  return (
    <>
      <Box
  sx={{

    position: 'absolute',
    top: '4%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.15s linear',
    width: '80%', // Ajusta el ancho al 70% del contenedor padre
    borderRadius: '12px', // Ajusta el valor según el radio deseado
  }}
>
  <Box
    sx={{
      padding: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#d6061e',
      borderRadius: 'inherit', // Hereda el radio de la caja padre
    }}
  >
    <MKTypography color="white" variant="h6">
                {t('recogida247')}
              </MKTypography>
  </Box>
</Box>

      
    </>
  );
};

export default Comp247;

