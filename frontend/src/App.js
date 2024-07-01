import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Cookies from 'js-cookie';
import { Card, CardContent, Typography, Grid, TextField, Button, Box } from '@mui/material';

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import AinaHome from "pages/AinaHome";
import CarDetail_reserva from "pages/AinaCarProduct/carDetail_reserva";
import AinaCompany from "pages/AinaCompany";
import AinaProtect from "pages/AinaProtect";
import AinaAntes from "pages/AinaAntes";
import AinaCondiciones from "pages/AinaCondiciones";
import CookiesPolicy from "pages/AinaCookies";
import PrivacyPolicy from "pages/AinaPrivacidad";
import TermsAndConditions from "pages/AinaTerminos";
import DamagePolicy from "pages/AinaDanger";
import LegalNotice from "pages/AinaLegal";
import AinaFAQ from "pages/AinaFAQ";
import NotFoundPage from "pages/AinaHome/404";

// Material Kit 2 React routes
import routes from "routes";

// Componente de Consentimiento de Cookies
const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px', // Separado del margen inferior
      left: '10%',
      width: '80%', // Ocupa el 80% del ancho
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem', // Altura doble al incrementar el padding
      borderRadius: '10px', // Bordes redondeados
      zIndex: 1000,
    },
    button: {
    color:"#25D366",
      padding: '0.5rem 1rem',
      marginLeft: '1rem',
      cursor: 'pointer',
    },
  };


  return (
    <Box sx={styles.container}>
      <Typography mb={4} sx={{color: '#FFFFFF'}} variant="body1">
        We use cookies to improve your experience. By using our site, you consent to cookies.
      </Typography>
      <Button sx={styles.button} variant="contained"  onClick={handleAccept}>
        Accept
      </Button>
    </Box>
  );
};

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    //<EnvChecker />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CookieConsent />
      <Routes>
        {getRoutes(routes)}
        {//<Route path="/productos/:id" element={<ProductDetail />} />
        }
        <Route path="" element={<AinaHome />} />
        <Route path="/home" element={<AinaHome />} />
        <Route path="/reserva" element={<CarDetail_reserva />} />
        <Route path="/company" element={<AinaCompany />} />
        <Route path="/protect" element={<AinaProtect />} />
        <Route path="/informacion-antes-de-alquilar" element={<AinaAntes />} />
        <Route path="/terminos-y-condiciones-generales" element={<AinaCondiciones />} />
        <Route path="/politica-cookies" element={<CookiesPolicy />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
        <Route path="/politica-gestion-de-danos" element={<DamagePolicy />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/faqs" element={<AinaFAQ />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
