import * as React from 'react';
import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ResponsiveAppBar from '../AinaHome/NavbarTest';
import { useTranslation } from 'react-i18next';
import AinaCarRentACAR from "assets/images/atencion.webp";
import footerRoutes from "footer.routes";
import Container from '@mui/material/Container';
import Whatsapp from '../AinaHome/whatsapp';
//import KarveLegal from './karveLegal';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Footer from '../AinaHome/footer';


function CustomCard({ title, description }) {
  return (
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'none',
        borderRadius: '0px',
        background: 'none',
        mb: 4,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <MKTypography mt={3} mb={3} gutterBottom variant="h5" component="div">
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      </CardContent>
    </Card>
  );
}

function LegalNotice() {
  const [valorHijo, setValorHijo] = useState('');
  const [appBarHeight, setAppBarHeight] = useState(0);
  const appBarRef = useRef(null);
  const { t } = useTranslation();

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

  const back = AinaCarRentACAR; // Placeholder image

  const legalNoticeSections = [
    {
      id: "introduction",
      title: t('legal_notice.introduction.title'),
      content: t('legal_notice.introduction.content')
    },
    {
      id: "general_info",
      title: t('legal_notice.general_info.title'),
      content: t('legal_notice.general_info.content')
    },
    {
      id: "object",
      title: t('legal_notice.object.title'),
      content: t('legal_notice.object.content')
    },
    {
      id: "conditions",
      title: t('legal_notice.conditions.title'),
      sections: [
        {
          id: "acceso_gratuito",
          title: t('legal_notice.conditions.sections.acceso_gratuito.title'),
          content: t('legal_notice.conditions.sections.acceso_gratuito.content')
        },
        {
          id: "registro_usuario",
          title: t('legal_notice.conditions.sections.registro_usuario.title'),
          content: t('legal_notice.conditions.sections.registro_usuario.content')
        },
        {
          id: "veracidad_informacion",
          title: t('legal_notice.conditions.sections.veracidad_informacion.title'),
          content: t('legal_notice.conditions.sections.veracidad_informacion.content')
        },
        {
          id: "propiedad_intelectual",
          title: t('legal_notice.conditions.sections.propiedad_intelectual.title'),
          content: t('legal_notice.conditions.sections.propiedad_intelectual.content')
        },
        {
          id: "usuarios_autorizados",
          title: t('legal_notice.conditions.sections.usuarios_autorizados.title'),
          content: t('legal_notice.conditions.sections.usuarios_autorizados.content')
        },
        {
          id: "uso_correcto",
          title: t('legal_notice.conditions.sections.uso_correcto.title'),
          content: t('legal_notice.conditions.sections.uso_correcto.content')
        }
      ]
    },
    {
      id: "responsabilidad",
      title: t('legal_notice.responsabilidad.title'),
      content: t('legal_notice.responsabilidad.content')
    },
    {
      id: "reservations",
      title: t('legal_notice.reservations.title'),
      content: t('legal_notice.reservations.content')
    },
    {
      id: "cookies",
      title: t('legal_notice.cookies.title'),
      content: t('legal_notice.cookies.content')
    },
    {
      id: "links",
      title: t('legal_notice.links.title'),
      content: t('legal_notice.links.content')
    },
    {
      id: "data_protection",
      title: t('legal_notice.data_protection.title'),
      content: t('legal_notice.data_protection.content')
    },
    {
      id: "intellectual_property",
      title: t('legal_notice.intellectual_property.title'),
      content: t('legal_notice.intellectual_property.content')
    },
    {
      id: "jurisdiction",
      title: t('legal_notice.jurisdiction.title'),
      content: t('legal_notice.jurisdiction.content')
    }
  ];

  return (
    <>
      {//<KarveLegal isOpenReservation={isOpenReservation} reservationDrawer={reservationDrawer} />
      }

      <Box sx={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
        <Whatsapp />
        <Box
          ref={appBarRef}
          style={{
            position: 'sticky',
            top: valorHijo ? '15px' : '20px',
            transition: valorHijo ? 'top 1s ease-in' : 'top 0.0s ease-out',
            zIndex: 3
          }}
        >
          <ResponsiveAppBar reservationDrawer={reservationDrawer} onCambio={manejarCambio} />
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
            marginTop: `-${appBarHeight}px`
          }}
        >
          <MKBox
            sx={{
              justifyContent: "bottom",
              display: "flex",
              flexDirection: "column",
              position: "relative"
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
                      {t('legal_notice.title')}
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Box>

        <Container>
          <Box mt={4} mb={4}>
            {legalNoticeSections.map((section) => (
              <CustomCard key={section.id} title={section.title} description={section.content} />
            ))}
          </Box>
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

export default LegalNotice;
