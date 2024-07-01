import React, {  Suspense, useState, useEffect, useRef } from 'react';
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import { useNavigate } from 'react-router-dom';
import KarveIframe from '../AinaHome/ReservationWidget';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';


const KarveAntes = ({ isOpenReservation, reservationDrawer }) => {
  //const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [nextStep, setNextStep] = useState('');

  useEffect(() => {
    if (buttonRef.current) {
      const height = buttonRef.current.clientHeight;
      setButtonHeight(height);
    }
  }, [isOpenReservation]);

  const handleStepChange = ({ currentStep, nextStep }) => {
    setCurrentStep(currentStep);
    setNextStep(nextStep);
    // Aquí puedes agregar la lógica que necesites cuando los pasos cambian
    console.log('Step changed:', { currentStep, nextStep });
  };

  const ButtonConfig = isOpenReservation ? "100%" : "0%";
  const ButtonConfig2 = isOpenReservation ? "0%" : "100%";
  const pointerEventsStyle = isOpenReservation ? 'auto' : 'none';

  const isMobileDevice = () => {
    return window.innerWidth <= 1000;
  };

  const CustomTextField = styled(TextField)({
    '& label': {
      color: '#FFFFFF',
    },
    '& label.Mui-focused': {
      color: '#FFFFFF',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFFFFF',
        borderWidth: '2px',
      },
      '&:hover fieldset': {
        borderColor: '#FFFFFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFFFFF',
      },
      color: '#FFFFFF',
    },
  });

  return (
    <>
      {isOpenReservation && (
        <div style={{ 
          width: '100%', 
          height: '100%', 
          backdropFilter: `blur(15px)`,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          position: 'fixed', 
          top: '0', 
          left: '0', 
          zIndex: '1000', 
          transition: '0.15s linear' 
        }} />
      )}
      <div style={{ 
          width: isMobileDevice() ? '100%' : '70%', 
          height: '100%', 
          backgroundColor: 'white', 
          overflow: 'hidden', // Evitar que se desborde
          position: 'fixed', 
          top: '0', 
          left: '0', 
          zIndex: '1000', 
          opacity: ButtonConfig, 
          pointerEvents: pointerEventsStyle,
          display: 'flex',
          flexDirection: 'column' // Asegura que los elementos hijos se apilen verticalmente
      }}>
        <MKBox sx={{ position: 'absolute', top: '0', right: '0', zIndex: 1 }}>
          <MKButton variant="text" onClick={() => { reservationDrawer() }} sx={{ color: 'rgba(0, 0, 0, 0.4)', borderRadius: '5px', padding: '8px 16px' }}>Cerrar</MKButton>
        </MKBox>
        <MKBox mt={4} height="100%" width="100%" overflow="auto">
          <Grid container spacing={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%' }}>
            <Grid item xs={12} sm={12} md={12} xl={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%',height:'100%' }}>
              <Suspense fallback={<div>Loading...</div>}>
                {<KarveIframe />}
              </Suspense>
            </Grid>
            <Grid item xs={12} sx={{ width: '100%', height: '100%', padding: '0 16px' }}>
  <Card sx={{ minHeight: '300px', width: '90%', marginTop: '20px', margin: '0 auto', padding: '16px', backgroundColor: '#d51317' }}>
    <CardContent>
      <Grid container spacing={2} sx={{ marginTop: '16px' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" color="#FFFFFF" align="center">
            <span style={{ fontWeight: 'Regular' }}>¡Entra en la familia</span>
            <span style={{ fontWeight: 'bold' }}> AinaCar</span>
            <span style={{ fontWeight: 'Regular' }}> y recibe un </span>
            <span style={{ fontWeight: 'bold' }}>10% en tu primer alquiler!</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <form noValidate autoComplete="off">
          <CustomTextField
      label="Nombre"
      variant="outlined"
      fullWidth
      sx={{ marginBottom: '16px' }}
    />
            <CustomTextField
      label="Correo Electrónico"
      variant="outlined"
      fullWidth
      sx={{ marginBottom: '16px' }}
    />
            <Button sx={{ width: '100%', boxShadow:'none', color:'#031b27' }} variant="contained" color="white" type="submit">
              Solicitar
            </Button>
          </form>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
</Grid>

          </Grid>
        </MKBox>
      </div>
    </>
  );
};

export default KarveAntes;
