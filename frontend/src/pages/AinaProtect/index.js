import * as React from 'react';
import { lazy, Suspense, useState, useEffect, useRef, useCallback } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import Button from '@mui/material/Button';
import MKTypography from "components/MKTypography";
import ResponsiveAppBar from '../AinaHome/NavbarTest';
import { useTranslation } from 'react-i18next';
import Divider from '@mui/material/Divider';

import AinaCarRentACAR from "assets/images/protect.webp";
import AinaCarRent1 from "assets/images/ainacar-rent-a-car.jpg";
import Wash from "assets/images/wash-protect.png";
import ubicacio from "assets/images/ubicacio.png";
import ubicacioParets from "assets/images/img-4317-1080x825.jpeg";
import logoprotect from "assets/images/logoprotect.png";

import protect1 from "assets/images/protect01.webp";
import protect2 from "assets/images/protect02.webp";
import protect3 from "assets/images/protect03.webp";
import protect4 from "assets/images/protect04.webp";
import imagenProtect01 from "assets/images/imagenprotect01.jpeg";
import imagenProtect02 from "assets/images/imagenprotect02.jpeg";
import imagenProtect03 from "assets/images/imagenprotect03.jpg";
import imagenProtect04 from "assets/images/imagenprotect04.jpg";
import imagenProtect05 from "assets/images/imagenprotect05.jpg";
import imagenProtect06 from "assets/images/imagenprotect06.jpeg";
import imagenProtect07 from "assets/images/imagenprotect07.jpg";
import imagenProtect08 from "assets/images/imagenprotect08.jpg";
import footerRoutes from "footer.routes";
import Container from '@mui/material/Container';
import Whatsapp from '../AinaHome/whatsapp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import KarveProtect from './karveProtect';
import Footer from '../AinaHome/footer';

const DesktopDrawer = lazy(() => import('../AinaHome/DesktopDrawer'));
const MobileDrawer = lazy(() => import('../AinaHome/MobileDrawer'));
const DefaultFooter = lazy(() => import("examples/Footers/DefaultFooter"));

const images = [
  imagenProtect01, imagenProtect02, imagenProtect03, imagenProtect04,
  imagenProtect05, imagenProtect06, imagenProtect07, imagenProtect08,
];

const imagesBackground = [
  protect1, protect2, protect3, protect4
];

function CustomCard({ title, description, route_link }) {
  return (
    <>
    
      <Divider sx={{ margin: '0', marginTop: '0px' }} />
      <Card sx={{ backgroundColor:'#031b27', boxShadow: 'none', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
        <img src={logoprotect} alt="logo" style={{ width: '60px', margin: '0 auto' }} />
          <MKTypography mt={3} color="white" gutterBottom variant="h3" component="div">
            {title}
          </MKTypography>
          <MKTypography variant="body2" color="white">
            {description}
          </MKTypography>
          <Box sx={{ mt: 7, width: '100%' }}>
            <Button variant="contained" sx={{ mb: 1, width: '30%', color:'#FFFFFF' ,backgroundColor:"#00dc7f"}} onClick={route_link}>
              Ver Tarifas
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Divider sx={{ margin: '0', marginTop: '0px' }} />
    </>
  );
}

function ImageGrid({ images }) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleOpen = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              component="img"
              src={image}
              alt={`Image ${index + 1}`}
              sx={{
                width: '100%',
                height: 'auto',
                cursor: 'pointer',
                borderRadius: 2
              }}
              onClick={() => handleOpen(image)}
            />
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'relative', outline: 'none' }}>
          <IconButton
            sx={{ position: 'absolute', top: 0, right: 0 }}
            onClick={handleClose}
          >
            <CloseIcon style={{ color: 'white' }} />
          </IconButton>
          <Box
            component="img"
            src={currentImage}
            alt="Expanded Image"
            sx={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 2 }}
          />
        </Box>
      </Modal>
    </>
  );
}

function AinaProtect() {
  const [valorHijo, setValorHijo] = useState('');
  const [appBarHeight, setAppBarHeight] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const appBarRef = useRef(null);
  const { t, i18n } = useTranslation();


  const texts = [
    {title:t('protect_claim_title_01'),subtitle:t('protect_claim_subtitle_01')},
    {title:t('protect_claim_title_02'),subtitle:t('protect_claim_subtitle_02')},
    {title:t('protect_claim_title_03'),subtitle:t('protect_claim_subtitle_03')},
    {title:t('protect_claim_title_04'),subtitle:t('protect_claim_subtitle_04')}
  ];
  
  const textsCards = [
    {title:t('protect_card_title_01'),subtitle:t('protect_card_subtitle_01'), color:"#591C21"},
    {title:t('protect_card_title_02'),subtitle:t('protect_card_subtitle_02'), color:"#031b27"},
    {title:t('protect_card_title_03'),subtitle:t('protect_card_subtitle_03'), color:"#D92525"},
    {title:t('protect_card_title_04'),subtitle:t('protect_card_subtitle_04'), color:"#8C1F28"}
  ];


  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  useEffect(() => {
    if (appBarRef.current) {
      setAppBarHeight(appBarRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesBackground.length);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const manejarCambio = (nuevoValor) => {
    setValorHijo(nuevoValor);
    console.log(nuevoValor);
  };

  const isMobileDevice = () => {
    return window.innerWidth <= 1000;
  };

  const [isOpenReservation, setIsOpenReservation] = useState(false);
  const reservationDrawer = () => {
    setIsOpenReservation(!isOpenReservation);
  };

  return (
    <>
    <KarveProtect isOpenReservation={isOpenReservation} reservationDrawer={reservationDrawer}/>

      <Suspense fallback={<div>Loading...</div>}>
        {/* <MaxWidthDialog /> */}
      </Suspense>
      {isMobileDevice() ? (
        <Suspense fallback={<div>Loading...</div>}>
          {<MobileDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
          }
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
{          <DesktopDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
}        </Suspense>
      )}
      <Box sx={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
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
            minHeight: "78vh",
            width: "100%",
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), white), url(${imagesBackground[currentImageIndex]})`,
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
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              textAlign: "center",
              alignItems: "center"
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
                    alignItems: 'center',
                    justifyContent: 'center'
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
                      {texts[currentTextIndex].title}
                    </MKTypography>
                    <MKBox sx={{ maxWidth: '70%', margin: '0 auto' }}>
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
                            lg: '1.4rem'
                          },
                          textShadow: '0px 2px 60px rgba(0, 0, 0, 0.999)'
                        }}
                      >
                        {texts[currentTextIndex].subtitle}
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Box>

        <Container sx={{ mt: {
                        xs: -2,
                        sm: -2,
                        md: -2,
                        lg: -14,
                      }, mb: 8, backgroundColor: 'white' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            {textsCards.map((text, index) => (
              <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: text.color,
                    color: 'white',
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'center' }}>
                    <MKTypography mt={3} color={'white'} gutterBottom variant="h5" component="div">
                      {text.title}
                    </MKTypography>
                    <MKTypography sx={{
                      fontSize: {
                        xs: '1.3rem',
                        sm: '1.3rem',
                        md: '1.3rem',
                        lg: '1rem',
                      },
                    }} color="white">
                      {text.subtitle}
                    </MKTypography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container sx={{ backgroundColor: 'white' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <CustomCard
                sx={{ backgroundColor: '#031b27' }}
                image={AinaCarRent1}
                title={t('protect_claim')}
                description={t('protect_claim_description')}
                route_link={toggleDrawer}
                label="Read More"
              />
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mt: 15 }}>
          <Grid  container item xs={12} lg={8} justifyContent="center" sx={{ mx: "auto", textAlign: "center" }}>
            <MKTypography variant="h2">{t('protect_carousel')}</MKTypography>
          </Grid>
          <Box sx={{ mt: 5 }}>
            <ImageGrid images={images} />
          </Box>
        </Container>
      </Box>
      <MKBox bgColor="info" mt={5}>
        <MKBox>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer pt={6} px={1} content={footerRoutes} />
          </Suspense>
        </MKBox>
      </MKBox>
    </>
  );
}

export default AinaProtect;
