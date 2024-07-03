import React, { Suspense, useState, useEffect, useRef } from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import './Carousel.css';
import bck from 'assets/images/backgroundAina22_comp.webp'
import bck2 from 'assets/images/backgroundAina22_comp480.webp'
import bcktest from 'assets/images/backgroundAina2test.webp'

import bck3 from 'assets/images/backgroundAina22_comp800.webp'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './fonts.css';
import { useTranslation } from 'react-i18next';
import 'flag-icons/css/flag-icons.min.css';


const LazyBackgroundImage = ({ appBarHeight, reservationDrawer}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const boxRef = useRef();
  const { t } = useTranslation();


  // Define diferentes resoluciones de imagen
  const images = {
    small: bck2,
    medium:bck3 ,
    large: bck
  };

  const getImageForDevice = () => {
    if (window.innerWidth < 600) {
      return images.small;
    } else if (window.innerWidth < 1200) {
      return images.medium;
    } else {
      return images.large;
    }
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setBackgroundImage(getImageForDevice());
          setIsLoaded(true);
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.1
    });

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    

    <Box
      ref={boxRef}
      sx={{
        minHeight: "100vh",
        width: "100%",
        //backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), white), url(${backgroundImage})`,
        backgroundImage: isLoaded
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: `-${appBarHeight}px`,
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      
      <MKBox
        sx={{
          justifyContent: "bottom",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          padding: { xs: "20px 0", sm: "40px 0" }
        }}
      >
        <Container >
          <Grid
            sx={{ marginTop: { xs: `${appBarHeight * 2}px`, sm: `${appBarHeight * 2}px`, md: `${appBarHeight * 2}px`, lg: `${appBarHeight}px` } }}
            container
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              xl={7.5}
              sx={{ display: 'flex', alignItems: 'center', padding: { xs: '0 10px' } }}
            >
              <MKBox sx={{ maxWidth: '100%' }}>
                <MKTypography
                  color="white"
                  variant="h1"
                  sx={{
                    fontFamily: 'Rodina-Regular',
                    textAlign: 'left',
                    lineHeight: 1,
                    fontSize: {
                      xs: '2.8rem',
                      sm: '3.3rem',
                      md: '4.3rem',
                      lg: '5.5rem'
                    },
                    marginTop: { xs: '20px', sm: '30px' }
                  }}
                >
                  {t('welcome')
                  }
                </MKTypography>
                <MKBox
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: { xs: '10px', sm: '15px' },
                    display: 'inline-flex',
                    alignItems: 'center',
                    borderRadius: '10px',
                    mt: 2
                  }}
                >
                  <MKTypography
                    color="white"
                    variant="h3"
                    sx={{
                      fontFamily: 'Rodina-Regular',
                      textAlign: 'left',
                      lineHeight: 1.5,
                      fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                        md: '2rem',
                        lg: '2.0rem'
                      },
                      marginRight: '20px'
                    }}
                  >
                    {t('welcome2')
                    }
                  </MKTypography>
                  <MKButton
                    variant="contained"
                    color="primary"
                    onClick={reservationDrawer}
                  >
                    ¡Reserva ya!
                  </MKButton>
                </MKBox>
              </MKBox>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              xl={4.5}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                {//<KarveIframe margin={30} />
                }
              </Suspense>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </Box>
  );
};

export default LazyBackgroundImage;
