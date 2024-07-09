import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Cookies from 'js-cookie';
import {  Typography, Button, Box } from '@mui/material';

// Material Kit 2 React themes
import theme from "assets/theme";
import AinaHome from "pages/AinaHome";
//import CarDetail_reserva from "pages/AinaCarProduct/carDetail_reserva";
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
import CookieConsent from "./CookieComponent";


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
        {//<Route path="/productos/:id" element={<ProductDetail />} />
        }
        <Route path="" element={<AinaHome />} />
        <Route path="/home" element={<AinaHome />} />
        {//<Route path="/reserva" element={<CarDetail_reserva />} />
        }
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
