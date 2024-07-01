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

function PrivacyPolicy() {
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

  const isMobileDevice = () => {
    return window.innerWidth <= 1000;
  };

  const back = AinaCarRentACAR; // Assuming back is the background image

  const privacySections = [
    {
      id: "introduction",
      title: t('privacy_policy.sections.introduction.title'),
      content: t('privacy_policy.sections.introduction.content')
    },
    {
      id: "data_controller",
      title: t('privacy_policy.sections.data_controller.title'),
      content: t('privacy_policy.sections.data_controller.content')
    },
    {
      id: "data_collection",
      title: t('privacy_policy.sections.data_collection.title'),
      content: t('privacy_policy.sections.data_collection.content'),
      subsections: [
        {
          id: "contact_forms",
          title: t('privacy_policy.sections.data_collection.contact_forms.title'),
          content: t('privacy_policy.sections.data_collection.contact_forms.content')
        },
        {
          id: "quote_forms",
          title: t('privacy_policy.sections.data_collection.quote_forms.title'),
          content: t('privacy_policy.sections.data_collection.quote_forms.content')
        },
        {
          id: "newsletter_forms",
          title: t('privacy_policy.sections.data_collection.newsletter_forms.title'),
          content: t('privacy_policy.sections.data_collection.newsletter_forms.content')
        },
        {
          id: "service_contract",
          title: t('privacy_policy.sections.data_collection.service_contract.title'),
          content: t('privacy_policy.sections.data_collection.service_contract.content')
        },
        {
          id: "whatsapp",
          title: t('privacy_policy.sections.data_collection.whatsapp.title'),
          content: t('privacy_policy.sections.data_collection.whatsapp.content')
        },
        {
          id: "photos",
          title: t('privacy_policy.sections.data_collection.photos.title'),
          content: t('privacy_policy.sections.data_collection.photos.content')
        },
        {
          id: "spam_policy",
          title: t('privacy_policy.sections.data_collection.spam_policy.title'),
          content: t('privacy_policy.sections.data_collection.spam_policy.content')
        }
      ]
    },
    {
      id: "data_retention",
      title: t('privacy_policy.sections.data_retention.title'),
      content: t('privacy_policy.sections.data_retention.content')
    },
    {
      id: "data_recipients",
      title: t('privacy_policy.sections.data_recipients.title'),
      content: t('privacy_policy.sections.data_recipients.content')
    },
    {
      id: "user_rights",
      title: t('privacy_policy.sections.user_rights.title'),
      content: t('privacy_policy.sections.user_rights.content'),
      subsections: [
        {
          id: "right_of_access",
          title: t('privacy_policy.sections.user_rights.rights.0.title'),
          content: t('privacy_policy.sections.user_rights.rights.0.content')
        },
        {
          id: "right_to_rectification",
          title: t('privacy_policy.sections.user_rights.rights.1.title'),
          content: t('privacy_policy.sections.user_rights.rights.1.content')
        },
        {
          id: "right_to_erasure",
          title: t('privacy_policy.sections.user_rights.rights.2.title'),
          content: t('privacy_policy.sections.user_rights.rights.2.content')
        },
        {
          id: "right_to_object",
          title: t('privacy_policy.sections.user_rights.rights.3.title'),
          content: t('privacy_policy.sections.user_rights.rights.3.content')
        },
        {
          id: "right_to_restrict_processing",
          title: t('privacy_policy.sections.user_rights.rights.4.title'),
          content: t('privacy_policy.sections.user_rights.rights.4.content')
        },
        {
          id: "right_to_data_portability",
          title: t('privacy_policy.sections.user_rights.rights.5.title'),
          content: t('privacy_policy.sections.user_rights.rights.5.content')
        },
        {
          id: "right_not_to_be_subject_to_automated_decisions",
          title: t('privacy_policy.sections.user_rights.rights.6.title'),
          content: t('privacy_policy.sections.user_rights.rights.6.content')
        },
        {
          id: "withdraw_consent",
          title: t('privacy_policy.sections.user_rights.withdraw_consent.title'),
          content: t('privacy_policy.sections.user_rights.withdraw_consent.content')
        }
      ]
    },
    {
      id: "additional_info",
      title: t('privacy_policy.sections.additional_info.title'),
      content: t('privacy_policy.sections.additional_info.content')
    },
    {
      id: "language",
      title: t('privacy_policy.sections.language.title'),
      content: t('privacy_policy.sections.language.content')
    },
    {
      id: "social_media",
      title: t('privacy_policy.sections.social_media.title'),
      content: t('privacy_policy.sections.social_media.content'),
      subsections: [
        {
          id: "prohibited_content",
          title: t('privacy_policy.sections.social_media.prohibited_content.title'),
          content: t('privacy_policy.sections.social_media.prohibited_content.content')
        }
      ]
    },
    {
      id: "whatsapp",
      title: t('privacy_policy.sections.whatsapp.title'),
      content: t('privacy_policy.sections.whatsapp.content')
    },
    {
      id: "policy_changes",
      title: t('privacy_policy.sections.policy_changes.title'),
      content: t('privacy_policy.sections.policy_changes.content')
    },
    {
      id: "revocability",
      title: t('privacy_policy.sections.revocability.title'),
      content: t('privacy_policy.sections.revocability.content')
    },
    {
      id: "legislation",
      title: t('privacy_policy.sections.legislation.title'),
      content: t('privacy_policy.sections.legislation.content')
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
            {t('privacy_policy.title')}
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

        {/* Privacy Policy Section */}
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
            {privacySections.map((section, index) => (
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
              </Grid>
            ))}
          </Grid>
        </Container>

        <MKBox bgColor="info">
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

export default PrivacyPolicy;