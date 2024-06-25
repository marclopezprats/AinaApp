

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import AinaHome from "pages/AinaHome";
import CarDetail_reserva from "pages/AinaCarProduct/carDetail_reserva";
import AinaCompany from "pages/AinaCompany";
import AinaProtect from "pages/AinaProtect";
import EnvChecker from './envChecker';

import NotFoundPage from "pages/AinaHome/404";


// Material Kit 2 React routes
import routes from "routes";

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
      <Routes>
        {getRoutes(routes)}
       {//<Route path="/productos/:id" element={<ProductDetail />} />
       }
        <Route path="" element={<AinaHome />} />
        <Route path="/home" element={<AinaHome />} />

        <Route path="/reserva" element={<CarDetail_reserva/>} />
        <Route path="/company" element={<AinaCompany/>} />
        <Route path="/protect" element={<AinaProtect/>} />


        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/" />} />

      </Routes>
    </ThemeProvider>
  );
}
