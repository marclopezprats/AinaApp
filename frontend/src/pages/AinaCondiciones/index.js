import * as React from 'react';
import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import Button from '@mui/material/Button';
import MKTypography from "components/MKTypography";
import ResponsiveAppBar from '../AinaHome/NavbarTest';
import { useTranslation } from 'react-i18next';
import AinaCarRentACAR from "assets/images/familia2.webp";
import AinaCarRent1 from "assets/images/ainacar-rent-a-car.jpg";

import footerRoutes from "footer.routes";
import Container from '@mui/material/Container';
import Whatsapp from '../AinaHome/whatsapp';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import KarveCompany from './karveCompany';
import InfoIcon from '@mui/icons-material/Info';
import Footer from '../AinaHome/footer';




function CustomCard({ image, title, description, route, label }) {
  return (
    <Card
  sx={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow:'none',
    borderRadius: '0px',
    background:'none'
  }}
>

  <CardContent
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'left',
  
    }}
  >
    <MKTypography mt={1} mb={1} gutterBottom variant="h5" component="div">
      {title}
    </MKTypography>
    <MKTypography variant="body2" color="text">
      {description}
    </MKTypography>
  </CardContent>
</Card>

  );
}



function AinaCondiciones() {
  const [valorHijo, setValorHijo] = useState('');
  const [appBarHeight, setAppBarHeight] = useState(0);
  const appBarRef = useRef(null);
  const { t, i18n } = useTranslation();

  const [isOpenReservation, setIsOpenReservation] = useState(false);
  const reservationDrawer = () => {
    setIsOpenReservation(!isOpenReservation);
  };

  useEffect(() => {
    if (appBarRef.current) {
      setAppBarHeight(appBarRef.current.clientHeight);
    }
  }, []);

  const manejarCambio = (nuevoValor) => {
    setValorHijo(nuevoValor);
    console.log(nuevoValor);
  };

  /*const isMobileDevice = () => {
    return window.innerWidth <= 1000;
  };*/

  const back = AinaCarRentACAR; // Assuming back is the background image

  const sections = [
    {
      id: "introduccion",
      title: t('introduccion.titulo'),
      content: t('introduccion.contenido')
    },
    {
      id: "propiedad_de_vehiculos",
      content: t('propiedad_de_vehiculos.contenido')
    },
    {
      id: "facultad_arrendador",
      content: t('facultad_arrendador.contenido')
    },
    {
      id: "terminos_condiciones_generales",
      content: t('terminos_condiciones_generales.contenido')
    },
    {
      id: "responsabilidad_solidaria",
      content: t('responsabilidad_solidaria.contenido')
    },
    {
      id: "reserva_pre_pago",
      content: t('reserva_pre_pago.contenido')
    },
    {
      id: "alquiler",
      title: t('alquiler.titulo'),
      content: t('alquiler.contenido')
    },
    {
      id: "conductor_autorizado",
      content: t('conductor_autorizado.contenido')
    },
    {
      id: "conductor_no_autorizado",
      content: t('conductor_no_autorizado.contenido')
    },
    {
      id: "responsabilidad_conductor_no_autorizado",
      content: t('responsabilidad_conductor_no_autorizado.contenido')
    },
    {
      id: "seguro_obligatorio",
      content: t('seguro_obligatorio.contenido')
    },
    {
      id: "responsabilidad_empresa_arrendataria",
      content: t('responsabilidad_empresa_arrendataria.contenido')
    },
    {
      id: "aceptacion_vehiculo",
      content: t('aceptacion_vehiculo.contenido')
    },
    {
      id: "duracion_alquiler",
      content: t('duracion_alquiler.contenido')
    },
    {
      id: "recogida_vehiculo",
      content: t('recogida_vehiculo.contenido')
    },
    {
      id: "responsabilidad_deterioro",
      content: t('responsabilidad_deterioro.contenido')
    },
    {
      id: "inspeccion_vehiculo",
      content: t('inspeccion_vehiculo.contenido')
    },
    {
      id: "prorroga_alquiler",
      title: t('prorroga_alquiler.titulo'),
      content: t('prorroga_alquiler.contenido')
    },
    {
      id: "devolucion_vehiculo",
      title: t('devolucion_vehiculo.titulo'),
      sections: {
        devolucion_horas_apertura: {
          content: t('devolucion_vehiculo.secciones.devolucion_horas_apertura.contenido')
        },
        devolucion_fuera_hora: {
          content: t('devolucion_vehiculo.secciones.devolucion_fuera_hora.contenido')
        },
        retorno_sin_presencia: {
          content: t('devolucion_vehiculo.secciones.retorno_sin_presencia.contenido')
        },
        devolucion_retraso: {
          content: t('devolucion_vehiculo.secciones.devolucion_retraso.contenido')
        }
      }
    },
    {
      id: "cargos_adicionales",
      title: t('cargos_adicionales.titulo'),
      content: t('cargos_adicionales.contenido')
    },
    {
      id: "uso_obligaciones",
      title: t('uso_obligaciones.titulo'),
      content: t('uso_obligaciones.contenido')
    },
    {
      id: "accidente_averia_robo",
      title: t('accidente_averia_robo.titulo'),
      content: t('accidente_averia_robo.contenido')
    },
    {
      id: "seguros",
      title: t('seguros.titulo'),
      content: t('seguros.contenido')
    },
    {
      id: "protecciones_contra_danos",
      title: t('protecciones_contra_danos.titulo'),
      content: t('protecciones_contra_danos.contenido')
    },
    {
      id: "mantenimiento_vehiculo",
      title: t('mantenimiento_vehiculo.titulo'),
      content: t('mantenimiento_vehiculo.contenido')
    },
    {
      id: "politica_combustible",
      title: t('politica_combustible.titulo'),
      content: t('politica_combustible.contenido')
    },
    {
      id: "ley_aplicable",
      title: t('ley_aplicable.titulo'),
      content: t('ley_aplicable.contenido')
    },
    {
      id: "atencion_cliente",
      title: t('atencion_cliente.titulo'),
      content: t('atencion_cliente.contenido')
    },
    {
      id: "notificaciones",
      title: t('notificaciones.titulo'),
      content: t('notificaciones.contenido')
    },
    {
      id: "jurisdiccion",
      title: t('jurisdiccion.titulo'),
      content: t('jurisdiccion.contenido')
    },
    {
      id: "documentos_contractuales",
      title: t('documentos_contractuales.titulo'),
      content: t('documentos_contractuales.contenido')
    },
    {
      id: "aceptacion_terminos",
      title: t('aceptacion_terminos.titulo'),
      content: t('aceptacion_terminos.contenido')
    },
    {
      id: "informacion_seguros",
      title: t('informacion_seguros.titulo'),
      content: t('informacion_seguros.contenido')
    }
  ];

  return (
    <>
      <KarveCompany isOpenReservation={isOpenReservation} reservationDrawer={reservationDrawer} />

      <Box sx={{ backgroundColor: '#FFFFFF', minHeight: '100vh', }}>
        <Whatsapp />
        {/* Barra de navegación */}
        <Box
          ref={appBarRef}
          style={{
            position: 'sticky',
            top: valorHijo ? '15px' : '20px',
            transition: valorHijo ? 'top 1s ease-in' : 'top 0.0s ease-out',
            zIndex: 3
          }}
        >
          {<ResponsiveAppBar reservationDrawer={reservationDrawer} onCambio={manejarCambio} />}
        </Box>
        <Box
          sx={{
            minHeight: "69vh",
            width: "100%",
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), white), url(${back})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: `-${appBarHeight}px`,
          }}
        >
          <MKBox
            sx={{
              justifyContent: "bottom",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Container>
              <Grid
                sx={{
                  marginTop: {
                    xs: `${appBarHeight * 2}px`,
                    sm: `${appBarHeight * 2}px`,
                    md: `${appBarHeight * 2}px`,
                    lg: `${appBarHeight}px`
                  }
                }}
                container
                justifyContent="center"
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  xl={12}
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <MKBox sx={{ maxWidth: '100%' }}>
                    <MKTypography
                      color="white"
                      variant="h1"
                      sx={{
                        fontFamily: 'Rodina-Regular',
                        textAlign: 'center',
                        lineHeight: 1,
                        fontSize: {
                          xs: '2.5rem',
                          sm: '3rem',
                          md: '4rem',
                          lg: '5rem'
                        },
                        textShadow: '0px 2px 60px rgba(0, 0, 0, 0.999)'
                      }}
                    >
                      {t('condiciones_de_alquilar')}
                    </MKTypography>
                    <MKTypography
                      color="white"
                      variant="h3"
                      sx={{
                        fontFamily: 'Rodina-Regular',
                        textAlign: 'center',
                        lineHeight: 1.5,
                        fontSize: {
                          xs: '1.5rem',
                          sm: '2rem',
                          md: '2rem',
                          lg: '2.5rem'
                        },
                        textShadow: '0px 2px 60px rgba(0, 0, 0, 0.999)'
                      }}
                    >
                      {//t('familia_ainacar_subtitle')
                      }
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Box>

       

        {/* Sections from translation.json */}
        <Container sx={{ mt: 4, backgroundColor: 'white' }}>
          <Grid container spacing={4}>
            {sections.map((section, index) => (
              <Grid item xs={12} md={12} key={index}>
                <CustomCard
                  sx={{ backgroundColor: 'transparent' }}
                  image={AinaCarRent1} // Use the appropriate image for each section if available
                  title={section.title}
                  description={section.content}
                  route={`/section-${index}`}
                  label="Read More"
                />
                {section.sections && Object.values(section.sections).map((subSection, subIndex) => (
                  <CustomCard
                    key={`${index}-${subIndex}`}
                    sx={{ backgroundColor: 'transparent' }}
                    image={AinaCarRent1} // Use the appropriate image for each subsection if available
                    title={subSection.title}
                    description={subSection.content}
                    route={`/section-${index}-${subIndex}`}
                    label="Read More"
                  />
                ))}
              </Grid>
            ))}
          </Grid>
        </Container>

        <MKBox bgColor="info" mt={4}>
          <MKBox>
            <Suspense fallback={<div>Loading...</div>}>
              <Footer pt={6} px={1} content={footerRoutes} />
            </Suspense>
          </MKBox>
        </MKBox>
      </Box>
    </>
  );
}

export default AinaCondiciones;