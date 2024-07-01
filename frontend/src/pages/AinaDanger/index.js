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
import Wash from "assets/images/wash-protect.png";
import ubicacio from "assets/images/ubicacio.png";
import ubicacioParets from "assets/images/img-4317-1080x825.jpeg";
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
import boxShadow from 'assets/theme/functions/boxShadow';
import KarveCompany from './karveCompany';
import Footer from '../AinaHome/footer';

const DefaultFooter = lazy(() => import("examples/Footers/DefaultFooter"));

const toggleDrawer = () => {};

function CustomCardButton({ image, title, description, contactLink, mapsLink }) {
  return (
    <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 2, margin: '0' }}
      />
      <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <MKTypography mt={3} mb={3} gutterBottom variant="h5" component="div">
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
        <Box sx={{ mt: 2, width: '100%' }}>
          <Button variant="contained" color="primary" sx={{ mb: 1, width: '100%', color:'#FFFFFF' }} href={contactLink}>
            Contact
          </Button>
          <Button variant="contained" color="white" sx={{ width: '100%', backgroundColor:'#d6061e', color:'#FFFFFF' }} href={mapsLink} target="_blank">
            Maps
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

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
function DamagePolicy() {
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

  const damageSections = [
    {
      id: "introduction",
      title: t('damage_policy.sections.introduction.title'),
      content: t('damage_policy.sections.introduction.content')
    },
    {
      id: "identified_damage_in_presence",
      title: t('damage_policy.sections.identified_damage_in_presence.title'),
      content: t('damage_policy.sections.identified_damage_in_presence.content')
    },
    {
      id: "identified_damage_absence",
      title: t('damage_policy.sections.identified_damage_absence.title'),
      content: t('damage_policy.sections.identified_damage_absence.content')
    },
    {
      id: "claims",
      title: t('damage_policy.sections.claims.title'),
      content: t('damage_policy.sections.claims.content')
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
                      {t('damage_policy.title')}
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Box>

        {/* Damage Policy Section */}
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
            {damageSections.map((section, index) => (
              <Grid item xs={12} md={12} key={index}>
                <CustomCard
                  sx={{ backgroundColor: 'transparent' }}
                  image={AinaCarRent1} // Use the appropriate image for each section if available
                  title={section.title}
                  description={section.content}
                  route={`/section-${section.id}`}
                  label="Read More"
                />
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

export default DamagePolicy;