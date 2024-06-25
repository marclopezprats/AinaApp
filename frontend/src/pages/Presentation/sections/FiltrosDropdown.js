import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Box, CardContent } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Divider from '@mui/material/Divider';
import icon_engine from "assets/images/icon-engine.png";
import icon_gear from "assets/images/icon-gear.png";
import icon_delivery from "assets/images/icon-delivery.png";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import MKBadge from "components/MKBadge";
import { Margin } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

const SelectorDinamico = ({ onSearchResult, aplicarAjustesPersonalizados }) => {
  const [modelos, setModelos] = useState([]);
  const [versiones, setVersiones] = useState([]);
  const [colores, setColores] = useState([]);
  const [modeloSeleccionado, setModeloSeleccionado] = useState('');
  const [versionSeleccionada, setVersionSeleccionada] = useState('');
  const [ColorSeleccionado, setColorSeleccionado] = useState('');

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    obtenerModelos();
  }, []);

  const obtenerModelos = () => {
    axios.get('/api/modelos')
      .then(response => {
        setModelos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener modelos:', error);
      });
  };

  const obtenerVersiones = (modeloId) => {
    axios.get(`/api/versiones?modeloId=${modeloId}`)
      .then(response => {
        setVersiones(response.data);
      })
      .catch(error => {
        console.error('Error al obtener versiones:', error);
      });
  };

  const obtenerColores = (versionId) => {
    axios.get(`/api/colores?versionId=${versionId}`)
      .then(response => {
        setColores(response.data);
      })
      .catch(error => {
        console.error('Error al obtener colores:', error);
      });
  };

  const handleModeloChange = (modeloId, modelName) => {
    setModeloSeleccionado(modelName);
    obtenerVersiones(modeloId);
    nextStep();
  };

  const handleVersionChange = (versionId, versionName) => {
    setVersionSeleccionada(versionName);
    obtenerColores(versionId);
    nextStep();
  };

  const handleColorChange = (colorName) => {
    setColorSeleccionado(colorName);
    nextStep();
  };

  const handleSearch = () => {
    const jsonResult = [
      { "Modelo": modeloSeleccionado ? [modeloSeleccionado] : [] },
      { "Version": versionSeleccionada ? [versionSeleccionada] : [] },
      { "Color": ColorSeleccionado ? [ColorSeleccionado] : [] }
    ];
    const resultString = JSON.stringify(jsonResult);
    onSearchResult(resultString);
  };

  const handleReset = () => {
    setStep(1);
    const jsonResult = [
      { "Modelo": [] },
      { "Version": [] },
      { "Color": [] }
    ];
    const resultString = JSON.stringify(jsonResult);
    onSearchResult(resultString);
  };

  const ajustesPersonalizados = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: modelos.length > 3 ? 4 : modelos.length, 
    slidesToScroll: 1
  };

  const ajustesPorDefecto = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const configuracionSlider = aplicarAjustesPersonalizados ? ajustesPersonalizados : ajustesPorDefecto;
  const espacioColor = aplicarAjustesPersonalizados ? '20px' : '10px';


  return (
    <Box>
      {step === 1 && (
        <div >
          {aplicarAjustesPersonalizados ? 
          <h3 style={{ textAlign: 'center', color: '#344767' }}>Selecciona el modelo</h3> :
          <h5 style={{  color: '#344767' , fontWeight: 400 }}>Selecciona el modelo</h5>}
          <Slider mt={2}{...configuracionSlider}>
            {modelos.map(modelo => (
              <Box p={2} >
                <Card key={modelo.id}  sx={{ maxHeight: '500px',maxWidth:'250px', overflowY: 'auto' }}>
      <MKBox position="relative" mx={0} mt={0} overflow="hidden">
        <div style={{ overflow: 'hidden', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
          <img
            src={modelo.imagen}
            width="115%"
            style={{ borderRadius: '0', objectFit: 'cover', marginLeft: '-18px' }}
          />
        </div>
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center" alignItems="center">
    <MKBox mt={1} mb={3} mx={0} display="flex" alignItems="center">
        <MKBox flex={1}  sx={{ textAlign: "left" }}>
            <MKTypography display="inline" variant="h4"style={{ color: '#344767'}} textTransform="capitalize" fontWeight="bold">
            {modelo.nombre}
            </MKTypography>

        </MKBox>

        <MKBox  >
          <AvatarGroup max={3}>
          {JSON.parse(modelo.medio).map((avatarUrl, index) => {
                      console.log('URL:', avatarUrl.trim()); // Imprimir la URL por consola
                      return <Avatar sx={{ width: 30, height: 30 }} key={index} src={avatarUrl.trim()} alt={`Avatar ${index + 1}`} />;
                    })}
          </AvatarGroup>
        </MKBox>
    </MKBox>
    <MKBox mt={-2} mb={1} display="flex" alignItems="center" flexWrap="wrap">
        {JSON.parse(modelo.motor).map((motor) => {
                      return   <MKBadge sx={{marginRight:'5px', marginBottom: '5px'}} size="xs" badgeContent= {motor} variant="contained" container />;                      ;
                    })}
</MKBox>

    <MKTypography mb={1} sx={{ textAlign: "left" }} variant="caption" component="p" color="text" style={{ fontSize: 'x-small' }}>
        Precio entre: 
        </MKTypography>
    <MKBox mt={-1} mb={3} mx={0} display="flex" alignItems="center">
    <MKBox flex={1} sx={{ textAlign: "left" }}>
        <h4 style={{ color: '#344767' }}>{JSON.parse(modelo.precio)[0] + " € "}</h4>
    </MKBox>
    <MKBox display="flex">
    
        <MKBox flex={1} mt={1} sx={{ textAlign: "center", whiteSpace: 'nowrap' }}>
            <h6 style={{  color: '#344767' , fontWeight: 400 }}>{" y " + JSON.parse(modelo.precio)[1] + " € "}</h6>
        </MKBox>
        <MKBox flex={1} mt={1} sx={{ textAlign: "center", whiteSpace: 'nowrap' }}>
            <h6 mt={2} style={{ color: '#344767', fontWeight: 400 }} >{" /Mes"}</h6>
        </MKBox>
    </MKBox>
</MKBox>
        <MKBox mt={-2} mb={2}>
       
        <MKTypography variant="caption" component="p" color="text" style={{ fontSize: 'x-small' }}>
        Precio y entrega sujeto a oferta final 
        </MKTypography>
        </MKBox>

        
          <MKButton
            style={{width: '100%'}}
            onClick={() => handleModeloChange(modelo.id, modelo.nombre)}
            variant="gradient"
            size="small"
            color={"dark"}
          >
            Seleccionar
          </MKButton>
     
      </MKBox>
    </Card>
                
              </Box>
            ))}
          </Slider>
        </div>
      )}
      {step === 2 && (
        <div>
          {aplicarAjustesPersonalizados ? 
          <h3 style={{ textAlign: 'center', color: '#344767' }}>Selecciona la versión</h3> :
          <h5 style={{  color: '#344767' , fontWeight: 400 }}>Selecciona la versión</h5>}
          <div>
          <Grid container p={2} spacing={2} justifyContent="center">
            {versiones.map(version => (
              <Grid mt={2} key={version.id}>
                <Card style={{ margin: '20px',marginTop: '10px' ,padding: '15px', textAlign: 'center', cursor: 'pointer' }} onClick={() => handleVersionChange(version.id, version.nombre)}>
                  <MKTypography variant="h6" style={{ color: '#344767'}}  fontWeight="Regular" >{version.nombre.charAt(0).toUpperCase() + version.nombre.slice(1)}</MKTypography>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                    <img
                      src={version.medio}
                      style={{ width: '15%', marginRight:'15px'}}
                    />
                    <MKTypography style={{  fontSize: '75%'}}
              variant="body2" component="p" color="text">{version.motor}</MKTypography>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <MKButton variant="outlined" color="info" size="small" style={{ marginRight: '10px' }} onClick={prevStep}>Anterior</MKButton>
            <MKButton variant="contained" color="info" size="small" onClick={() => { nextStep(); setVersionSeleccionada(''); }}>No seleccionar versión</MKButton>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
        {aplicarAjustesPersonalizados ? 
          <h3 style={{ textAlign: 'center', color: '#344767' }}>Selecciona el color</h3> :
          <h5 style={{  color: '#344767' , fontWeight: 400 }}>Selecciona el color</h5>}
        <div>
          <Grid container p={2} spacing={2} justifyContent="center">
            {colores.map(color => (
              <Grid mt={2} key={color.id}>
                <Card style={{margin: espacioColor,textAlign: 'center', cursor: 'pointer' ,maxHeight:'150px', maxWidth:'150px'}} onClick={() => handleColorChange(color.nombre)}>
                <MKBox position="relative" mx={0} mt={0} overflow="hidden">
                  <div style={{ overflow: 'hidden', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                    <img
                      src={color.img_color}
                      width="115%"
                      style={{ borderRadius: '0', objectFit: 'cover', marginLeft: '-18px' }}
                    />
                  </div>
                </MKBox>
                <MKBox style={{  marginTop: '10px', padding: '15px', textAlign: 'center' }}>
                  <MKTypography variant="h6" style={{ color: '#344767' }} fontWeight="Regular">{color.nombre}</MKTypography>
                  </MKBox>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <MKButton variant="outlined" color="info" size="small" style={{ marginRight: '10px' }} onClick={prevStep}>Anterior</MKButton>
          <MKButton variant="contained" color="info" size="small" onClick={() => { nextStep(); setColorSeleccionado(''); }}>No seleccionar color</MKButton>
        </div>
      </div>
      )}
      {step === 4 && (
        <div>
          {aplicarAjustesPersonalizados ? 
          <h3 style={{ textAlign: 'center', color: '#344767' }}>Resultados de Búsqueda</h3> :
          <h5 style={{  color: '#344767' , fontWeight: 400 }}>Resultados de Búsqueda</h5>}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          
          <MKButton variant="outlined" color="info" size="small" style={{ marginRight: '10px' }} onClick={prevStep}>Anterior</MKButton>
          <MKButton variant="contained" color="info" size="small" onClick={handleSearch}>Buscar</MKButton>
          <MKButton variant="outlined" color="info" size="small" style={{ marginLeft: '10px' }}onClick={handleReset}>Volver a empezar</MKButton>
          </div>

        </div>
      )}
    </Box>



  );
};

export default SelectorDinamico;
