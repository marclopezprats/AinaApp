import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import back from "assets/images/backgroundAina2.webp";
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
import Divider from '@mui/material/Divider';
import KarveIframe from './ReservationWidget';
import Footer from './footer';
import Karve02 from './karve02';

const DefaultFooter = lazy(() => import("examples/Footers/DefaultFooter"));
const InstagramPosts = lazy(() => import('./InstagramPosts'));
const Recogida = lazy(() => import('./recogida'));
const ExperiencePosts = lazy(() => import('./Experience'));
const DesktopDrawer = lazy(() => import('./DesktopDrawer'));
const MobileDrawer = lazy(() => import('./MobileDrawer'));
const MaxWidthDialog = lazy(() => import('./PopUp'));
const WhyAinaCar_ = lazy(() => import('./PorQue'));

function AinaHome() {
  const masonryRef = useRef(null);
  const accessToken = process.env.REACT_APP_INSTA_ACCESS_TOKEN;
  const buttonRef = useRef(null);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    modelo: '',
    horario: '',
    provincia: ''
  });

  const images = [
    { id: 1, url: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png' },
    { id: 2, url: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-monovolumenes.png' },
    { id: 3, url: 'https://www.ainacar.cat/assets/images/carousel/ainacar-coches-suv.png' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
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
  const iframeRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (appBarRef.current) {
      setAppBarHeight(appBarRef.current.clientHeight);
    }
  }, []);

  const isMobileDevice = () => {
    return window.innerWidth <= 1268;
  };

  const whyAinaCarRef = useRef(null);
  const handleScrollToWhyAinaCar = () => {
    scrollToRef(whyAinaCarRef);
  };

  const { t, i18n } = useTranslation();

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    const scrollPosition = window.scrollY;
    window.scrollTo(0, scrollPosition);
  };

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleScroll = (event) => {
      if (iframe && !iframeLoaded) {
        event.preventDefault();
        window.scrollTo(0, 0);
      }
    };

    if (iframe) {
      window.addEventListener('scroll', handleScroll);
      iframe.addEventListener('load', handleIframeLoad);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        iframe.removeEventListener('load', handleIframeLoad);
      };
    }
  }, [iframeLoaded]);

  // Recargar el iframe cuando el idioma cambie
  useEffect(() => {
    setIframeLoaded(false);
  }, [i18n.language]);


  return (
    <>
    <Karve02 isOpen={isOpen} toggleDrawer={toggleDrawer}/>
      <Whatsapp />
      <MKBox bgColor="#d6061e" sx={{ minHeight: "5vh", textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex" }} zIndex={991}>
        <MKTypography color="white" sx={{}} variant="h6">{t('recogida247')}</MKTypography>
      </MKBox>
      <Box ref={appBarRef} style={{ position: 'sticky', top: valorHijo ? '15px' : '60px', transition: valorHijo ? 'top 1s ease-in' : 'top 0.0s ease-out', zIndex: 990 }}>
        <ResponsiveAppBar toggleDrawer={toggleDrawer} onCambio={manejarCambio} />
      </Box>
      <Box
        sx={{
          minHeight: "90vh",
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${back})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: `-${appBarHeight}px`,
        }}>
        <MKBox sx={{ justifyContent: "bottom", display: "flex", flexDirection: "column", position: "relative", padding: { xs: "20px 0", sm: "40px 0" } }}>
          <Container>
            <Grid sx={{ marginTop: { xs: `${appBarHeight * 2}px`, sm: `${appBarHeight * 2}px`, md: `${appBarHeight * 2}px`, lg: `${appBarHeight}px` } }} container justifyContent="center">
              <Grid item xs={12} sm={12} md={12} xl={7.5} sx={{ display: 'flex', alignItems: 'center', padding: { xs: '0 10px' } }}>
                <MKBox sx={{ maxWidth: '100%' }}>
                  <MKTypography
                    color="white"
                    variant="h1"
                    sx={{
                      fontFamily: 'Rodina-Regular',
                      textAlign: 'left',
                      lineHeight: 1,
                      fontSize: {
                        xs: '2.5rem',
                        sm: '3rem',
                        md: '4rem',
                        lg: '5rem'
                      },
                      marginTop: { xs: '20px', sm: '30px' } // Mueve el título hacia abajo en móvil
                    }}
                  >
                    {t('welcome')}
                  </MKTypography>
                  <MKTypography
                    color="white"
                    variant="h3"
                    sx={{
                      marginBottom: { xs: '30px', sm: '30px' },
                      fontFamily: 'Rodina-Regular',
                      textAlign: 'left',
                      lineHeight: 1.5,
                      fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                        md: '2rem',
                        lg: '2.5rem'
                      }
                    }}
                  >
                    {t('welcome2')}
                  </MKTypography>
                </MKBox>
              </Grid>

              <Grid item xs={12} sm={12} md={12} xl={4.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                <Suspense fallback={<div>Loading...</div>}>
                  {//<KarveIframe margin={30} />
              
                  }
                </Suspense>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Box>
      <MKBox
        bgColor="info"
        zIndex={2}
        textAlign="center"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "5vh", cursor: 'pointer' }}
        //onClick={handleScrollToWhyAinaCar}
      >
        <MKTypography style={{}} color="white" variant="h6">
          {t('mas_info')}
        </MKTypography>
        <IconButton variant="contained">
          <ExpandMoreIcon style={{ color: 'white' }} />
        </IconButton>
      </MKBox>
      <Suspense fallback={<div>Loading...</div>}>
        <WhyAinaCar_ refe={whyAinaCarRef} />
      </Suspense>
      <MKBox bgColor="white" component="section">
        <MKBox bgColor="white" p={0} pt={12} pb={8}>
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
      <MKBox>
        <MKBox component="section" style={{ position: 'relative', overflow: 'hidden', color: 'transparent' }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#FFFFFF',
            zIndex: -1,
            opacity: 0.05,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            fontSize: '10vw',
            color: 'red',
            textAlign: 'center'
          }}>
            <MKTypography fontWeight="bold" sx={{ fontSize: '17.75rem', color: '#d6061e' }}>
              AINACAR
            </MKTypography>
          </div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#FFFFFF',
            zIndex: -2,
            opacity: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} />
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <InstagramPosts accessToken={accessToken} />
            </Suspense>
          </Container>
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
