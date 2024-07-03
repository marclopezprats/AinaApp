import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import './Carousel.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import footerRoutes from "footer.routes";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ResponsiveAppBar from './NavbarTest';
import './fonts.css';
import { useTranslation } from 'react-i18next';
import 'flag-icons/css/flag-icons.min.css';
import Whatsapp from './whatsapp';
import Comp247 from './247';
import LazyBackgroundImage from './backgroundImage';
import Footer from './footer';
import Karve02 from './karve02';

const InstagramPosts = lazy(() => import('./InstagramPosts'));
const Recogida = lazy(() => import('./recogida'));
const ExperiencePosts = lazy(() => import('./Experience'));
const WhyAinaCar_ = lazy(() => import('./PorQue'));

function AinaHome() {
  const accessToken = process.env.REACT_APP_INSTA_ACCESS_TOKEN;
  const images = [
    { id: 1, url: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png' },
    { id: 2, url: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' },
    { id: 3, url: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png' },
  ];

  const [isOpenReservation, setIsOpenReservation] = useState(false);
  const reservationDrawer = () => {
    setIsOpenReservation(!isOpenReservation);
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const onSlideChanged = (splide) => {
    setCurrentSlideIndex(splide.index);
  };

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const [valorHijo, setValorHijo] = useState('');
  const manejarCambio = (nuevoValor) => {
    setValorHijo(nuevoValor);
  };

  const [appBarHeight, setAppBarHeight] = useState(0);
  const appBarRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (appBarRef.current) {
      setAppBarHeight(appBarRef.current.clientHeight);
    }
  }, []);

  const whyAinaCarRef = useRef(null);
  const handleScrollToWhyAinaCar = () => {
    scrollToRef(whyAinaCarRef);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    setIframeLoaded(false);
  }, [i18n.language]);

  return (
    <>
      <Karve02 isOpenReservation={isOpenReservation} reservationDrawer={reservationDrawer} sx={{ zIndex: 1002 }} />
      <Whatsapp />
      <Comp247  />

      <Container>
        <MKBox
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: '0px',
          }}
        >
          <MKBox sx={{ width: '100%' }}>
            <MKBox bgColor="#d6061e" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <MKTypography color="white" variant="h6">
                {t('recogida247')}
              </MKTypography>
            </MKBox>
          </MKBox>
        </MKBox>
      </Container>
      <Box ref={appBarRef} style={{ position: 'sticky', top: valorHijo ? '15px' : '60px', transition: valorHijo ? 'top 1s ease-in' : 'top 0.0s ease-out', zIndex: 990 }}>
        <ResponsiveAppBar reservationDrawer={reservationDrawer} onCambio={manejarCambio} />
      </Box>

      <LazyBackgroundImage reservationDrawer={reservationDrawer} appBarHeight={appBarHeight} />
      <MKBox bgColor="#FFFFFF">
      <MKBox
        bgColor="#1a1a1a"
        zIndex={2}
        textAlign="center"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "5vh" }}
      >
        <MKTypography color="white" variant="h6">
          {//t('mas_info')
          }
        </MKTypography>
        <IconButton variant="contained">
          <ExpandMoreIcon style={{ color: 'white' }} />
        </IconButton>
      </MKBox>
      <MKBox
        zIndex={2}
        textAlign="center"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "5vh", top: '-10vh'
           }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <WhyAinaCar_ refe={whyAinaCarRef} />
        </Suspense>
      </MKBox>
      </MKBox>
      <MKBox bgColor="white" component="section">
        <MKBox bgColor="white" p={0} pt={2} pb={8}>
          <Container bgColor="white">
            <Grid container item xs={12} lg={8} justifyContent="center" sx={{ mx: "auto", textAlign: "center" }}>
              <MKTypography variant="h2">{t('una_flota_variada')}</MKTypography>
              <MKTypography variant="body1" color="text" mb={2}>
                {t('una_flota_variada_texto')}
              </MKTypography>
            </Grid>
            <Splide
              options={{
                type: 'loop',
                perPage: 3,
                perMove: 1,
                focus: 'center',
                gap: '1rem',
                autoplay: true,
                pauseOnHover: false
              }}
              onMoved={onSlideChanged}
            >
              {images.map((image) => (
                <SplideSlide key={image.id}>
                  <img src={image.url} alt={`Slide ${image.id}`} />
                </SplideSlide>
              ))}
            </Splide>
          </Container>
        </MKBox>
      </MKBox>
      <MKBox bgColor="#FFFFFF" pt={8} pb={8}>
      <MKBox
        zIndex={2}
        textAlign="center"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "5vh"
           }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <InstagramPosts accessToken={accessToken}/>
        </Suspense>
      </MKBox>
      </MKBox>
      <MKBox bgColor="white" sx={{ width: '100%' }}>
        <MKBox>
          <MKBox component="section" p={0} pt={12}>
            <MKBox>
              <Suspense fallback={<div>Loading...</div>}>
                <ExperiencePosts />
              </Suspense>
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox sx={{ width: '100%', background: '#d6061e', paddingY: '100px' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Recogida />
        </Suspense>
      </MKBox>
      <MKBox sx={{ width: '100%' }}>
        <Footer pt={6} content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AinaHome;
