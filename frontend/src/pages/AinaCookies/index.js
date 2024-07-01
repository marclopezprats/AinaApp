import * as React from 'react';
import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import Button from '@mui/material/Button';
import { Link as MuiLink } from '@mui/material';
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

function CookiesPolicy() {
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

  /*const isMobileDevice = () => {
    return window.innerWidth <= 1000;
  };*/

  const back = AinaCarRentACAR; // Assuming back is the background image

  const cookieSections = [
    {
      id: "introduction",
      title: t('cookies_policy.sections.introduction.title'),
      content: t('cookies_policy.sections.introduction.content')
    },
    {
      id: "accept_reject",
      title: t('cookies_policy.sections.accept_reject.title'),
      content: t('cookies_policy.sections.accept_reject.content')
    },
    {
      id: "affected_cookies",
      title: t('cookies_policy.sections.affected_cookies.title'),
      content: t('cookies_policy.sections.affected_cookies.content')
    },
    {
      id: "cookie_types",
      title: t('cookies_policy.sections.cookie_types.title'),
      subsections: [
        {
          id: "by_entity",
          title: t('cookies_policy.sections.cookie_types.subsections.by_entity.title'),
          content: t('cookies_policy.sections.cookie_types.subsections.by_entity.content')
        },
        {
          id: "by_time",
          title: t('cookies_policy.sections.cookie_types.subsections.by_time.title'),
          content: t('cookies_policy.sections.cookie_types.subsections.by_time.content')
        },
        {
          id: "by_purpose",
          title: t('cookies_policy.sections.cookie_types.subsections.by_purpose.title'),
          content: t('cookies_policy.sections.cookie_types.subsections.by_purpose.content')
        }
      ]
    },
    {
      id: "cookies_used",
      title: t('cookies_policy.sections.cookies_used.title'),
      content: t('cookies_policy.sections.cookies_used.content'),
      social_media_cookies: [
        {
          title: t('cookies_policy.sections.cookies_used.social_media_cookies.facebook'),
          link: "https://www.facebook.com/policies/cookies/"
        },
        {
          title: t('cookies_policy.sections.cookies_used.social_media_cookies.twitter'),
          link: "https://twitter.com/en/privacy"
        },
        {
          title: t('cookies_policy.sections.cookies_used.social_media_cookies.instagram'),
          link: "https://help.instagram.com/1896641480634370"
        },
        {
          title: t('cookies_policy.sections.cookies_used.social_media_cookies.linkedin'),
          link: "https://www.linkedin.com/legal/cookie-policy"
        },
        {
          title: t('cookies_policy.sections.cookies_used.social_media_cookies.pinterest'),
          link: "https://policy.pinterest.com/cookies"
        },
        {
          title: t('cookies_policy.sections.cookies_used.social_media_cookies.youtube'),
          link: "https://policies.google.com/technologies/cookies"
        }
      ]
    },
    {
      id: "revocation",
      title: t('cookies_policy.sections.revocation.title'),
      content: t('cookies_policy.sections.revocation.content'),
      browsers: [
        {
          title: t('cookies_policy.sections.revocation.browsers.chrome.title'),
          link: "https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=es"
        },
        {
          title: t('cookies_policy.sections.revocation.browsers.ie.title'),
          link: "https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
        },
        {
          title: t('cookies_policy.sections.revocation.browsers.firefox.title'),
          link: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
        },
        {
          title: t('cookies_policy.sections.revocation.browsers.safari.title'),
          link: "https://support.apple.com/kb/ph21411?locale=es_ES"
        },
        {
          title: t('cookies_policy.sections.revocation.browsers.opera.title'),
          link: "http://help.opera.com/Windows/12.00/es-ES/cookies.html"
        }
      ]
    },
    {
      id: "policy_changes",
      title: t('cookies_policy.sections.policy_changes.title'),
      content: t('cookies_policy.sections.policy_changes.content')
    },
    {
      id: "disable_cookies",
      title: t('cookies_policy.sections.disable_cookies.title'),
      content: t('cookies_policy.sections.disable_cookies.content')
    },
    {
      id: "additional_info",
      title: t('cookies_policy.sections.additional_info.title'),
      content: t('cookies_policy.sections.additional_info.content')
    },
    {
      id: "data_treatment",
      title: t('cookies_policy.sections.data_treatment.title'),
      content: t('cookies_policy.sections.data_treatment.content')
    },
    {
      id: "use_personal_data",
      title: t('cookies_policy.sections.use_personal_data.title'),
      content: t('cookies_policy.sections.use_personal_data.content')
    },
    {
      id: "legal_basis",
      title: t('cookies_policy.sections.legal_basis.title'),
      content: t('cookies_policy.sections.legal_basis.content')
    },
    {
      id: "data_communication",
      title: t('cookies_policy.sections.data_communication.title'),
      content: t('cookies_policy.sections.data_communication.content')
    },
    {
      id: "data_retention",
      title: t('cookies_policy.sections.data_retention.title'),
      content: t('cookies_policy.sections.data_retention.content')
    },
    {
      id: "rights",
      title: t('cookies_policy.sections.rights.title'),
      content: t('cookies_policy.sections.rights.content')
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
            {t('cookies_policy.title')}
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

        {/* Cookie Policy Section */}
        <Container sx={{ mt: 4, backgroundColor: 'white' }}>
          <MKTypography
            variant="h4"
            sx={{
              fontFamily: 'Rodina-Regular',
              textAlign: 'center',
              marginBottom: '20px'
            }}
          >
          </MKTypography>
          <Grid container spacing={4}>
            {cookieSections.map((section, index) => (
              <Grid item xs={12} md={12} key={index}>
                <CustomCard
                  sx={{ backgroundColor: 'transparent' }}
                  image={AinaCarRent1} // Use the appropriate image for each section if available
                  title={section.title}
                  description={section.content}
                  route={`/section-${section.id}`}
                  label="Read More"
                />
                {section.subsections && section.subsections.map((subSection, subIndex) => (
                  <CustomCard
                    key={`${index}-${subIndex}`}
                    sx={{ backgroundColor: 'transparent' }}
                    image={AinaCarRent1} // Use the appropriate image for each subsection if available
                    title={subSection.title}
                    description={subSection.content}
                    route={`/section-${section.id}-${subSection.id}`}
                    label="Read More"
                  />
                ))}
                {section.social_media_cookies && section.social_media_cookies.map((cookie, cookieIndex) => (
                  <CustomCard
                    key={`${index}-cookie-${cookieIndex}`}
                    sx={{ backgroundColor: 'transparent' }}
                    image={AinaCarRent1} // Use the appropriate image for each subsection if available
                    title={cookie.title}
                    description={
                      <MuiLink sx={{color:'#e2242b'}} href={cookie.link} target="_blank" rel="noopener noreferrer">
                        {cookie.link}
                      </MuiLink>
                    }
                    route={cookie.link}
                    label="Read More"
                  />
                ))}
                {section.browsers && section.browsers.map((browser, browserIndex) => (
                  <CustomCard
                    key={`${index}-browser-${browserIndex}`}
                    sx={{ backgroundColor: 'transparent' }}
                    image={AinaCarRent1} // Use the appropriate image for each subsection if available
                    title={browser.title}
                    description={
                      <MuiLink sx={{color:'#e2242b'}} href={browser.link} target="_blank" rel="noopener noreferrer">
                        {browser.link}
                      </MuiLink>
                    }
                    route={browser.link}
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

export default CookiesPolicy;