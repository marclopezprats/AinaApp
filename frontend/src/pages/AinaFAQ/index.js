import * as React from 'react';
import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import Button from '@mui/material/Button';
import MKTypography from "components/MKTypography";
import ResponsiveAppBar from '../AinaHome/NavbarTest';
import { useTranslation } from 'react-i18next';
import AinaCarRentACAR from "assets/images/atencion.webp";

import instalacion1 from "assets/images/instalacio-1.png";
import instalacion2 from "assets/images/instalacio-2.png";
import instalacion3 from "assets/images/instalacio-3.png";
import instalacion4 from "assets/images/instalacio-4.png";
import instalacion5 from "assets/images/instalacio-5.png";
import instalacion6 from "assets/images/instalacio-6.png";
import instalacion7 from "assets/images/instalacio-7.png";
import instalacion8 from "assets/images/instalacio-8.png";
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../AinaHome/footer';

function AinaFAQ() {
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

  const isMobileDevice = () => {
    return window.innerWidth <= 1000;
  };

  const back = AinaCarRentACAR; // Assuming back is the background image

  const images = [
    instalacion1, instalacion2, instalacion3, instalacion4,
    instalacion5, instalacion6, instalacion7, instalacion8,
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
                      {t('faqs_title')}
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

        {/* Articles Section */}
        <Container sx={{ mt: -8, backgroundColor:'white' }}>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
            <Card sx={{boxShadow: '', width: '100%', overflow: 'hidden', margin:'10px', marginLeft: '0px'}}>
            <Accordion  defaultExpanded sx={{boxShadow: 'none', borderBottom:'none'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography variant="h5">{t('faq_1')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant="body2">
                {t('faq_1_content')}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Card>
              <Card sx={{ width: '100%', overflow: 'hidden', margin:'10px', marginLeft: '0px'}}>
            <Accordion  defaultExpanded sx={{boxShadow: 'none', borderBottom:'none'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography variant="h5">{t('faq_2')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant="body2">
                {t('faq_2_content')}
                                    </Typography>
                </AccordionDetails>
              </Accordion>
              </Card>
              <Card sx={{ width: '100%', overflow: 'hidden', margin:'10px', marginLeft: '0px'}}>
            <Accordion defaultExpanded  sx={{boxShadow: '', borderBottom:'none'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography variant="h5"> {t('faq_3')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant="body2">
                {t('faq_3_content')}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Card>
              <Card sx={{ width: '100%', overflow: 'hidden', margin:'10px', marginLeft: '0px'}}>
            <Accordion defaultExpanded sx={{boxShadow: '', borderBottom:'none'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography variant="h5">{t('faq_4')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant="body2">
                {t('faq_4_content')}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Card>
              <Card sx={{ width: '100%', overflow: 'hidden', margin:'10px', marginLeft: '0px'}}>
            <Accordion defaultExpanded sx={{boxShadow: '', borderBottom:'none'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography variant="h5">{t('faq_5')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant="body2">
                {t('faq_5_content')}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
            <Card sx={{ width: '100%', overflow: 'hidden', margin:'10px', marginLeft: '0px'}}>
            <Accordion defaultExpanded sx={{boxShadow: '', borderBottom:'none'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography variant="h5">{t('faq_6')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant="body2">
                {t('faq_6_content')}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Card>
              <Card sx={{ width: '100%', overflow: 'hidden', margin:'10px', marginLeft: '0px'}}>
            <Accordion defaultExpanded sx={{boxShadow: '', borderBottom:'none'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography variant="h5">{t('faq_7')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant="body2">
                {t('faq_7_content')}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Card>
              <Card sx={{ width: '100%', overflow: 'hidden', margin:'10px', marginLeft: '0px'}}>
            <Accordion defaultExpanded sx={{boxShadow: '', borderBottom:'none'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography variant="h5">{t('faq_8')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant="body2">
                {t('faq_8_content')}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Card>
              <Card sx={{ width: '100%', overflow: 'hidden', margin:'10px', marginLeft: '0px'}}>
            <Accordion defaultExpanded sx={{boxShadow: '', borderBottom:'none'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography variant="h5">{t('faq_9')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                  {t('faq_9_content')}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </Card>
              
            </Grid>
          </Grid>
        </Container>

        <MKBox bgColor="info" mt={10}>
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

export default AinaFAQ;
