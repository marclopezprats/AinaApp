import React, {lazy, useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MKTypography from 'components/MKTypography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from './CircleIcon';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ReservationWidget = lazy(() => import('./ReservationWidget'));

const steps = ['Seleccionar vehículo', 'Seleccionar tipo', 'Seleccionar modelo', 'Detalles del alquiler', 'Confirmación'];

const vehicleTypes = [
  { 
    value: 'Intalación total', 
    label: 'Intalación total', 
    types: [
      { value: 'Tipo 1', label: 'Tipo 1', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' , models: [{model:'Peugeot 208', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', dispo: 2}, {model:'Fiat 500L', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png', dispo: 0}, {model:'Fiat Ducato', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-furgonetas-camiones.png', dispo: 2}] },
      { value: 'Tipo 2', label: 'Tipo 2' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo A', img: 'https://via.placeholder.com/150', dispo: 1}, {model:'Modelo B', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo C', img: 'https://via.placeholder.com/150', dispo: 3}] },
      { value: 'Tipo 3', label: 'Tipo 3' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo X', img: 'https://via.placeholder.com/150', dispo: 2}, {model:'Modelo Y', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo Z', img: 'https://via.placeholder.com/150', dispo: 2}] },
    ] 
  },
  { 
    value: 'Suelos para furgonetas', 
    label: 'Suelos para furgonetas', 
    types: [
      { value: 'Tipo 1', label: 'Tipo 1', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' , models: [{model:'Peugeot 208', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', dispo: 2}, {model:'Fiat 500L', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png', dispo: 0}, {model:'Fiat Ducato', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-furgonetas-camiones.png', dispo: 2}] },
      { value: 'Tipo 2', label: 'Tipo 2' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo A', img: 'https://via.placeholder.com/150', dispo: 1}, {model:'Modelo B', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo C', img: 'https://via.placeholder.com/150', dispo: 3}] },
      { value: 'Tipo 3', label: 'Tipo 3' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo X', img: 'https://via.placeholder.com/150', dispo: 2}, {model:'Modelo Y', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo Z', img: 'https://via.placeholder.com/150', dispo: 2}] },
    ] 
  },
  { 
    value: 'Cubre pasos de rueda', 
    label: 'Cubre pasos de rueda', 
    types: [
      { value: 'Tipo 1', label: 'Tipo 1', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' , models: [{model:'Peugeot 208', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', dispo: 2}, {model:'Fiat 500L', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png', dispo: 0}, {model:'Fiat Ducato', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-furgonetas-camiones.png', dispo: 2}] },
      { value: 'Tipo 2', label: 'Tipo 2' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo A', img: 'https://via.placeholder.com/150', dispo: 1}, {model:'Modelo B', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo C', img: 'https://via.placeholder.com/150', dispo: 3}] },
      { value: 'Tipo 3', label: 'Tipo 3' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo X', img: 'https://via.placeholder.com/150', dispo: 2}, {model:'Modelo Y', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo Z', img: 'https://via.placeholder.com/150', dispo: 2}] },
    ] 
  },
  { 
    value: 'Paneles interiores', 
    label: 'Paneles interiores', 
    types: [
      { value: 'Tipo 1', label: 'Tipo 1', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' , models: [{model:'Peugeot 208', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', dispo: 2}, {model:'Fiat 500L', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png', dispo: 0}, {model:'Fiat Ducato', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-furgonetas-camiones.png', dispo: 2}] },
      { value: 'Tipo 2', label: 'Tipo 2' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo A', img: 'https://via.placeholder.com/150', dispo: 1}, {model:'Modelo B', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo C', img: 'https://via.placeholder.com/150', dispo: 3}] },
      { value: 'Tipo 3', label: 'Tipo 3' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo X', img: 'https://via.placeholder.com/150', dispo: 2}, {model:'Modelo Y', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo Z', img: 'https://via.placeholder.com/150', dispo: 2}] },
    ] 
  },
  { 
    value: 'Panerles y linea de techo', 
    label: 'Panerles y linea de techo', 
    types: [
      { value: 'Tipo 1', label: 'Tipo 1', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' , models: [{model:'Peugeot 208', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', dispo: 2}, {model:'Fiat 500L', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png', dispo: 0}, {model:'Fiat Ducato', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-furgonetas-camiones.png', dispo: 2}] },
      { value: 'Tipo 2', label: 'Tipo 2' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo A', img: 'https://via.placeholder.com/150', dispo: 1}, {model:'Modelo B', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo C', img: 'https://via.placeholder.com/150', dispo: 3}] },
      { value: 'Tipo 3', label: 'Tipo 3' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo X', img: 'https://via.placeholder.com/150', dispo: 2}, {model:'Modelo Y', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo Z', img: 'https://via.placeholder.com/150', dispo: 2}] },
    ] 
  },
  { 
    value: 'Cerraduras de seguridad', 
    label: 'Cerraduras de seguridad', 
    types: [
      { value: 'Tipo 1', label: 'Tipo 1', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' , models: [{model:'Peugeot 208', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', dispo: 2}, {model:'Fiat 500L', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png', dispo: 0}, {model:'Fiat Ducato', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-furgonetas-camiones.png', dispo: 2}] },
      { value: 'Tipo 2', label: 'Tipo 2' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo A', img: 'https://via.placeholder.com/150', dispo: 1}, {model:'Modelo B', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo C', img: 'https://via.placeholder.com/150', dispo: 3}] },
      { value: 'Tipo 3', label: 'Tipo 3' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo X', img: 'https://via.placeholder.com/150', dispo: 2}, {model:'Modelo Y', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo Z', img: 'https://via.placeholder.com/150', dispo: 2}] },
    ] 
  },
];

const DesktopDrawer = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();

  const buttonRef = useRef(null);
  const [buttonHeight, setButtonHeight] = useState(0);
  
  useEffect(() => {
    if (buttonRef.current) {
      const height = buttonRef.current.clientHeight;
      setButtonHeight(height);
    }
  }, [isOpen]);

  //const ButtonConfig = isOpen ? "40%" : "0%";
  const ButtonConfig = isOpen ? "40%" : "0%";

  const [activeStep, setActiveStep] = useState(0);
  const [vehicleType, setVehicleType] = useState('Nuestra flota');
  const [selectedType, setSelectedType] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleNext = () => {
    if (activeStep < 1){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }else{ return;}
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleVehicleTypeChange = (type) => {
    setVehicleType(type);
    setSelectedType('');
    setSelectedModel('');
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedModel('');
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };
  
  const [widgetKey, setWidgetKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setWidgetKey(prevKey => prevKey + 1); // Cambia la clave del widget para forzar el remount
    }
  }, [isOpen]);

  const { t, i18n } = useTranslation();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box p={2} sx={{ width: '100%' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
              {vehicleTypes.map((type) => (
                <Box mb={1.5} sx={{ width: '100%' }} key={type.value}>
                  <Button 
                    variant="contained"
                    sx={{
                      width: '100%', 
                      textAlign: 'left',
                      justifyContent: 'space-between',
                      boxShadow: 'none',
                      backgroundColor: type.value === vehicleType ? 'rgba(0, 0, 0, 0.1)' : '#ffffff' ,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        boxShadow: 'none',
                      },
                    }}
                    onClick={() => handleVehicleTypeChange(type.value)}
                  >
                    {type.label}
                    <ExpandMoreIcon style={{ rotate: '-90deg' }} /> 
                  </Button>
                </Box>
              ))}
            </Grid>
          </Box>
        );
      case 1:
        const selectedVehicle = vehicleTypes.find((type) => type.value === vehicleType);
        return (
          <Box p={2} sx={{ width: '100%' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
              {selectedVehicle?.types.map((type) => (
                <Box mb={1.5} sx={{ width: '100%' }} key={type.value}>
                  <Button 
                    variant="contained"
                    sx={{
                      width: '100%', 
                      textAlign: 'left',
                      justifyContent: 'space-between',
                      boxShadow: 'none',
                      backgroundColor: type.value === selectedType ? 'rgba(0, 0, 0, 0.1)' : '#ffffff' ,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        boxShadow: 'none',
                      },
                    }}
                    onClick={() => {handleTypeChange(type.value); handleNext()}}
                    
                  >
                    {type.label}
                    <ExpandMoreIcon style={{ rotate: '-90deg' }} /> 
                  </Button>
                </Box>
              ))}
            </Grid>
          </Box>
        );
      case 2:
        const selectedTypeDetails = vehicleTypes
          .find((type) => type.value === vehicleType)
          ?.types.find((type) => type.value === selectedType);
        return (
          <Box p={2} sx={{ width: '100%' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
              {selectedTypeDetails?.models.map((model) => (
                <Box 
                  key={model.model}
                  onClick={() => {handleModelChange(model.model); handleNext()}}
                  
                  sx={{ 
                    width: '100%', 
                    marginBottom: '10px', 
                    textAlign: 'center', 
                    paddingY: '20px', 
                    position: 'relative', 
                    zIndex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                >
                  <Box sx={{ 
                    top: '0', 
                    position: 'relative', 
                    zIndex: 1, 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',  
                    alignItems: 'center'
                  }}>
                    <img src={model.img} alt={model.model}
                    style={{ 
                      width: '100%', 
                      maxWidth: '250px', 
                      height: 'auto', 
                      display: 'block', 
                      margin: '0 auto' 
                      
                    }} />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      paddingTop: '10px',
                    }}
                  >
                    <MKTypography color="rgba(0, 0, 0, 0.1)" fontWeight="bold" sx={{ fontSize: "3rem", opacity: "30%" }}>{model.model}</MKTypography>
                  </Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircleIcon colorCircle={model.dispo < 1 ? 'disabled' : 'success'} size={'small'} />
                    <Typography
                      component="span"
                      sx={{
                        fontSize: model.model.length > 15 ? '2rem' : '3rem', 
                        opacity: '30%',
                        marginLeft: '8px',
                      }}
                    >
                      {model.dispo < 1 ? 'Sin disponibilidad' : 'Con disponibilidad'}
                    </Typography>
                  </div>
                </Box>
              ))}
            </Grid>
          </Box>
        );
    }
  };

  const getNextStepContent = (step) => {
    switch (step) {
      
      case 1:
        const selectedVehicle = vehicleTypes.find((type) => type.value === vehicleType);
        return (
          <Box p={2} sx={{ width: '100%' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
              {selectedVehicle?.types.map((type) => (
                <Box 
                  key={type.value}
                  onClick={() => {handleTypeChange(type.value) ; handleNext()}}
                  sx={{ 
                    width: '100%', 
                    marginBottom: '10px', 
                    textAlign: 'center', 
                    paddingY: '20px', 
                    position: 'relative', 
                    zIndex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                >
                  <Box sx={{ 
                    top: '0', 
                    position: 'relative', 
                    zIndex: 1, 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',  
                    alignItems: 'center'
                  }}>
                    <img src={type.img} alt={type.value} style={{ 
                      width: '100%', 
                      maxWidth: '250px', 
                      height: 'auto', 
                      display: 'block', 
                      margin: '0 auto' 
                    }} />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      paddingTop: '10px',
                    }}
                  >
                    <MKTypography color="rgba(0, 0, 0, 0.1)" fontWeight="bold" sx={{ fontSize: type.value.length > 15 ? '1.5rem' : '3rem', opacity: "30%" }}>{type.value}</MKTypography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        );
      case 2:
        const selectedTypeDetails = vehicleTypes
          .find((type) => type.value === vehicleType)
          ?.types.find((type) => type.value === selectedType);
        return (
          <Box p={2} sx={{ width: '100%' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
              {selectedTypeDetails?.models.map((model) => (
                <Box 
                  key={model.model}
                  onClick={() => {handleModelChange(model.model); handleNext(); navigate('/producto')}}
                  sx={{ 
                    width: '100%', 
                    marginBottom: '10px', 
                    textAlign: 'center', 
                    paddingY: '20px', 
                    position: 'relative', 
                    zIndex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                >
                  <Box sx={{ 
                    top: '0', 
                    position: 'relative', 
                    zIndex: 1, 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',  
                    alignItems: 'center'
                  }}>
                    <img src={model.img} alt={model.model} style={{ 
                      width: '100%', 
                      maxWidth: '250px', 
                      height: 'auto', 
                      display: 'block', 
                      margin: '0 auto' 
                    }} />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      paddingTop: '10px',
                    }}
                  >
                    <MKTypography color="rgba(0, 0, 0, 0.1)" fontWeight="bold" sx={{ fontSize: "3rem", opacity: "30%" }}>{model.model}</MKTypography>
                  </Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircleIcon colorCircle={model.dispo < 1 ? 'disabled' : 'success'} size={'small'} />
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '1rem',
                        opacity: '30%',
                        marginLeft: '8px',
                      }}
                    >
                      {model.dispo < 1 ? 'Sin disponibilidad' : 'Con disponibilidad'}
                    </Typography>
                  </div>
                </Box>
              ))}
            </Grid>
          </Box>
        );
      
    }
  };

  return (
    <>
      <Box sx={{ position: 'fixed', top: '50%', left: ButtonConfig, transform: `translate(-50%, -50%) rotate(90deg)`, zIndex: '1001', transition: '0.15s linear' }}>
        <MKButton ref={buttonRef} onClick={() => {toggleDrawer(); setActiveStep(0)}} variant="contained" color="primary" style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0', boxShadow: 'none', padding: '8px 16px', width: 'max-content', marginBottom: buttonHeight }}>
          {isOpen ? t('cerrar') : t('ver_tarifas')}
        </MKButton>
      </Box>
      {isOpen && (
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
      <div style={{ width: ButtonConfig, height: '100%', backgroundColor: 'white', overflow: 'hidden', position: 'fixed', top: '0', left: '0', zIndex: '1000', transition: '0.15s linear', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
        <MKBox height="100vh" width="100%" display="flex" alignItems="stretch">
          <Grid container spacing={0} style={{ height: '100%' }}>
          {
            //<Grid item xs={12} style={{ height: '100%' }}>
            //<ReservationWidget />
         // </Grid>
          }
          <Grid item xs={5} style={{ height: '100%' }}>
              <MKBox height="100%">
                {activeStep !== 0 && ( 
                  <MKButton onClick={handleBack}>{t('atras')}</MKButton>
                )}
                {getStepContent(activeStep)}
              </MKBox>
            </Grid>
            <Grid item xs={7} style={{ height: '100%' }}>
              <MKBox sx={{ backgroundColor: '#f0f2f5', height: '100%', borderBottomLeftRadius: '10px', borderTopLeftRadius: '10px' }}>
                {getNextStepContent(activeStep + 1)}
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
      </div>
    </>
  );
};

export default DesktopDrawer;


{/*import React, {lazy, useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MKTypography from 'components/MKTypography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from './CircleIcon';
import { useNavigate } from 'react-router-dom';
const ReservationWidget = lazy(() => import('./ReservationWidget'));

const steps = ['Seleccionar vehículo', 'Seleccionar tipo', 'Seleccionar modelo', 'Detalles del alquiler', 'Confirmación'];

const vehicleTypes = [
  { 
    value: 'Nuestra flota', 
    label: 'Nuestra flota', 
    types: [
      { value: 'Coches', label: 'Tipo 1', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' , models: [{model:'Peugeot 208', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', dispo: 2}, {model:'Fiat 500L', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png', dispo: 0}, {model:'Fiat Ducato', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-furgonetas-camiones.png', dispo: 2}] },
      { value: 'Furgonetas de plazas', label: 'Tipo 2' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo A', img: 'https://via.placeholder.com/150', dispo: 1}, {model:'Modelo B', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo C', img: 'https://via.placeholder.com/150', dispo: 3}] },
      { value: 'Furgonetas industriales y camiones', label: 'Tipo 3' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo X', img: 'https://via.placeholder.com/150', dispo: 2}, {model:'Modelo Y', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo Z', img: 'https://via.placeholder.com/150', dispo: 2}] },
    ] 
  },
  { 
    value: 'Condiciones de alquiler', 
    label: 'Condiciones de alquiler', 
    types: [
      { value: 'Tipo 1', label: 'Tipo 1', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' , models: [{model:'Peugeot 208', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', dispo: 2}, {model:'Fiat 500L', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png', dispo: 0}, {model:'Fiat Ducato', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-furgonetas-camiones.png', dispo: 2}] },
      { value: 'Tipo 2', label: 'Tipo 2' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo A', img: 'https://via.placeholder.com/150', dispo: 1}, {model:'Modelo B', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo C', img: 'https://via.placeholder.com/150', dispo: 3}] },
      { value: 'Tipo 3', label: 'Tipo 3' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo X', img: 'https://via.placeholder.com/150', dispo: 2}, {model:'Modelo Y', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo Z', img: 'https://via.placeholder.com/150', dispo: 2}] },
    ] 
  },
  { 
    value: 'Ofertas', 
    label: 'Ofertas', 
    types: [
      { value: 'Tipo 1', label: 'Tipo 1', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' , models: [{model:'Peugeot 208', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', dispo: 2}, {model:'Fiat 500L', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png', dispo: 0}, {model:'Fiat Ducato', img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-furgonetas-camiones.png', dispo: 2}] },
      { value: 'Tipo 2', label: 'Tipo 2' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo A', img: 'https://via.placeholder.com/150', dispo: 1}, {model:'Modelo B', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo C', img: 'https://via.placeholder.com/150', dispo: 3}] },
      { value: 'Tipo 3', label: 'Tipo 3' , img: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png', models: [{model:'Modelo X', img: 'https://via.placeholder.com/150', dispo: 2}, {model:'Modelo Y', img: 'https://via.placeholder.com/150', dispo: 0}, {model:'Modelo Z', img: 'https://via.placeholder.com/150', dispo: 2}] },
    ] 
  },
];

const DesktopDrawer = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();

  const buttonRef = useRef(null);
  const [buttonHeight, setButtonHeight] = useState(0);
  
  useEffect(() => {
    if (buttonRef.current) {
      const height = buttonRef.current.clientHeight;
      setButtonHeight(height);
    }
  }, [isOpen]);

  //const ButtonConfig = isOpen ? "40%" : "0%";
  const ButtonConfig = isOpen ? "40%" : "0%";

  const [activeStep, setActiveStep] = useState(0);
  const [vehicleType, setVehicleType] = useState('Nuestra flota');
  const [selectedType, setSelectedType] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleNext = () => {
    if (activeStep < 1){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }else{ return;}
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleVehicleTypeChange = (type) => {
    setVehicleType(type);
    setSelectedType('');
    setSelectedModel('');
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedModel('');
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };
  
  const [widgetKey, setWidgetKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setWidgetKey(prevKey => prevKey + 1); // Cambia la clave del widget para forzar el remount
    }
  }, [isOpen]);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box p={2} sx={{ width: '100%' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
              {vehicleTypes.map((type) => (
                <Box mb={1.5} sx={{ width: '100%' }} key={type.value}>
                  <Button 
                    variant="contained"
                    sx={{
                      width: '100%', 
                      textAlign: 'left',
                      justifyContent: 'space-between',
                      boxShadow: 'none',
                      backgroundColor: type.value === vehicleType ? 'rgba(0, 0, 0, 0.1)' : '#ffffff' ,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        boxShadow: 'none',
                      },
                    }}
                    onClick={() => handleVehicleTypeChange(type.value)}
                  >
                    {type.label}
                    <ExpandMoreIcon style={{ rotate: '-90deg' }} /> 
                  </Button>
                </Box>
              ))}
            </Grid>
          </Box>
        );
      case 1:
        const selectedVehicle = vehicleTypes.find((type) => type.value === vehicleType);
        return (
          <Box p={2} sx={{ width: '100%' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
              {selectedVehicle?.types.map((type) => (
                <Box mb={1.5} sx={{ width: '100%' }} key={type.value}>
                  <Button 
                    variant="contained"
                    sx={{
                      width: '100%', 
                      textAlign: 'left',
                      justifyContent: 'space-between',
                      boxShadow: 'none',
                      backgroundColor: type.value === selectedType ? 'rgba(0, 0, 0, 0.1)' : '#ffffff' ,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        boxShadow: 'none',
                      },
                    }}
                    onClick={() => {handleTypeChange(type.value); handleNext()}}
                    
                  >
                    {type.label}
                    <ExpandMoreIcon style={{ rotate: '-90deg' }} /> 
                  </Button>
                </Box>
              ))}
            </Grid>
          </Box>
        );
      case 2:
        const selectedTypeDetails = vehicleTypes
          .find((type) => type.value === vehicleType)
          ?.types.find((type) => type.value === selectedType);
        return (
          <Box p={2} sx={{ width: '100%' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
              {selectedTypeDetails?.models.map((model) => (
                <Box 
                  key={model.model}
                  onClick={() => {handleModelChange(model.model); handleNext()}}
                  
                  sx={{ 
                    width: '100%', 
                    marginBottom: '10px', 
                    textAlign: 'center', 
                    paddingY: '20px', 
                    position: 'relative', 
                    zIndex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                >
                  <Box sx={{ 
                    top: '0', 
                    position: 'relative', 
                    zIndex: 1, 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',  
                    alignItems: 'center'
                  }}>
                    <img src={model.img} alt={model.model}
                    style={{ 
                      width: '100%', 
                      maxWidth: '250px', 
                      height: 'auto', 
                      display: 'block', 
                      margin: '0 auto' 
                      
                    }} />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      paddingTop: '10px',
                    }}
                  >
                    <MKTypography color="rgba(0, 0, 0, 0.1)" fontWeight="bold" sx={{ fontSize: "3rem", opacity: "30%" }}>{model.model}</MKTypography>
                  </Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircleIcon colorCircle={model.dispo < 1 ? 'disabled' : 'success'} size={'small'} />
                    <Typography
                      component="span"
                      sx={{
                        fontSize: model.model.length > 15 ? '2rem' : '3rem', 
                        opacity: '30%',
                        marginLeft: '8px',
                      }}
                    >
                      {model.dispo < 1 ? 'Sin disponibilidad' : 'Con disponibilidad'}
                    </Typography>
                  </div>
                </Box>
              ))}
            </Grid>
          </Box>
        );
    }
  };

  const getNextStepContent = (step) => {
    switch (step) {
      
      case 1:
        const selectedVehicle = vehicleTypes.find((type) => type.value === vehicleType);
        return (
          <Box p={2} sx={{ width: '100%' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
              {selectedVehicle?.types.map((type) => (
                <Box 
                  key={type.value}
                  onClick={() => {handleTypeChange(type.value) ; handleNext()}}
                  sx={{ 
                    width: '100%', 
                    marginBottom: '10px', 
                    textAlign: 'center', 
                    paddingY: '20px', 
                    position: 'relative', 
                    zIndex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                >
                  <Box sx={{ 
                    top: '0', 
                    position: 'relative', 
                    zIndex: 1, 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',  
                    alignItems: 'center'
                  }}>
                    <img src={type.img} alt={type.value} style={{ 
                      width: '100%', 
                      maxWidth: '250px', 
                      height: 'auto', 
                      display: 'block', 
                      margin: '0 auto' 
                    }} />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      paddingTop: '10px',
                    }}
                  >
                    <MKTypography color="rgba(0, 0, 0, 0.1)" fontWeight="bold" sx={{ fontSize: type.value.length > 15 ? '1.5rem' : '3rem', opacity: "30%" }}>{type.value}</MKTypography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        );
      case 2:
        const selectedTypeDetails = vehicleTypes
          .find((type) => type.value === vehicleType)
          ?.types.find((type) => type.value === selectedType);
        return (
          <Box p={2} sx={{ width: '100%' }}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
              {selectedTypeDetails?.models.map((model) => (
                <Box 
                  key={model.model}
                  onClick={() => {handleModelChange(model.model); handleNext(); navigate('/producto')}}
                  sx={{ 
                    width: '100%', 
                    marginBottom: '10px', 
                    textAlign: 'center', 
                    paddingY: '20px', 
                    position: 'relative', 
                    zIndex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                >
                  <Box sx={{ 
                    top: '0', 
                    position: 'relative', 
                    zIndex: 1, 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',  
                    alignItems: 'center'
                  }}>
                    <img src={model.img} alt={model.model} style={{ 
                      width: '100%', 
                      maxWidth: '250px', 
                      height: 'auto', 
                      display: 'block', 
                      margin: '0 auto' 
                    }} />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      paddingTop: '10px',
                    }}
                  >
                    <MKTypography color="rgba(0, 0, 0, 0.1)" fontWeight="bold" sx={{ fontSize: "3rem", opacity: "30%" }}>{model.model}</MKTypography>
                  </Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircleIcon colorCircle={model.dispo < 1 ? 'disabled' : 'success'} size={'small'} />
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '1rem',
                        opacity: '30%',
                        marginLeft: '8px',
                      }}
                    >
                      {model.dispo < 1 ? 'Sin disponibilidad' : 'Con disponibilidad'}
                    </Typography>
                  </div>
                </Box>
              ))}
            </Grid>
          </Box>
        );
      
    }
  };

  return (
    <>
      <Box sx={{ position: 'fixed', top: '50%', left: ButtonConfig, transform: `translate(-50%, -50%) rotate(90deg)`, zIndex: '1001', transition: '0.15s linear' }}>
        <MKButton ref={buttonRef} onClick={() => {toggleDrawer(); setActiveStep(0)}} variant="contained" color="primary" style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0', boxShadow: 'none', padding: '8px 16px', width: 'max-content', marginBottom: buttonHeight }}>
          {isOpen ? 'Cerrar' : 'Alquilar vehículo'}
        </MKButton>
      </Box>
      {isOpen && (
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
      <div style={{ width: ButtonConfig, height: '100%', backgroundColor: 'white', overflow: 'hidden', position: 'fixed', top: '0', left: '0', zIndex: '1000', transition: '0.15s linear', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
        <MKBox height="100vh" width="100%" display="flex" alignItems="stretch">
          <Grid container spacing={0} style={{ height: '100%' }}>
          {
            //<Grid item xs={12} style={{ height: '100%' }}>
            //<ReservationWidget />
         // </Grid>
          }
          <Grid item xs={5} style={{ height: '100%' }}>
              <MKBox height="100%">
                {activeStep !== 0 && ( 
                  <MKButton onClick={handleBack}>Atrás</MKButton>
                )}
                {getStepContent(activeStep)}
              </MKBox>
            </Grid>
            <Grid item xs={7} style={{ height: '100%' }}>
              <MKBox sx={{ backgroundColor: '#f0f2f5', height: '100%', borderBottomLeftRadius: '10px', borderTopLeftRadius: '10px' }}>
                {getNextStepContent(activeStep + 1)}
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
      </div>
    </>
  );
};

export default DesktopDrawer;*/}