
import * as React from 'react';
import { useState, useEffect } from 'react';
// @mui material components
import Container from "@mui/material/Container";
//import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Ícono para estado contraído
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; 
import { Rotate } from '@mui/icons-material';

import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";


// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";

import Testimonials from "pages/Presentation/sections/Testimonials";
import SelectorDinamico from "pages/Presentation/sections/FiltrosDropdown";
import Productos from 'pages/Presentation/sections/productos';


// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation-renault-2.jpg";
import bgHome from "assets/images/bghome.svg";
import revo from "assets/images/revo-1.webp";



function Presentation() {

  const [searchResult, setSearchResult] = useState('');
  const [resetProductos, setResetProductos] = useState(false); 
  const [parsedData, setParsedData] = useState(null);
  const [productos, setProductos] = useState([]); 

  

  const handleSearchResult = (result) => {
    setSearchResult(result);
  };

  const handleResetProductos = () => {
    setResetProductos(!resetProductos);
  };

  const handleReset = () => {
    // Aquí defines la lógica para resetear los filtros y la lista de productos
    // Por ejemplo:
    setSearchResult('');
    setResetProductos(!resetProductos); // Cambiar el estado para resetear los productos
    setProductos([]); // Cambiar el estado para resetear los productos
    // Restablecer parsedData y otros estados relacionados si es necesario
  };

  const [aplicarAjustes, setAplicarAjustes] = useState(false);

  const alternarAplicacionAjustes = () => {
    setAplicarAjustes(prevState => !prevState);
  };

  const configuraciontarjeta = aplicarAjustes ? 12 : 2.7 ;
  const configuracionBox = aplicarAjustes ? "60%" : "100%" ;
  

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "contactanos",
          color: "info",
          
        }}
        sticky
      />
      <MKBox
  minHeight="90vh"
  width="100%"
  sx={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    display: "grid",
    placeItems: "center",

  }}
>
  <Container>
  <Grid container xs={12} lg={7} justifyContent="center" mx='auto'>
  <img src={revo}  style={{  // Agregar sombra
}} alt="Imagen de la revolución" />
  <MKTypography
    variant="body1"
    color="white"
    textAlign="center" // Alinea el texto al centro
    px={{ xs: 0, lg: 0 }}
    mt={1}
    sx={{ textShadow: '2px 2px 4px  rgba(0., 0, 0, 0.)' }} 
  >
    Consigue los mejores precios con entrega en 30 días
  </MKTypography>
</Grid>
 </Container>
</MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information /> 
      </Card>
      <Testimonials />
      <Box sx={{ flexGrow: 1, p: 4, maxWidth: '1650px', margin: '0 auto'  }}>
  <Grid container justifyContent="center" spacing={3}>
  <Grid  xs={12} sm={configuraciontarjeta}>
      <Card sx={{
        p: 2,
        mx: { lg: 1 },
        mb: 0,
        backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
        backdropFilter: "saturate(200%) blur(30px)",
        boxShadow: ({ boxShadows: { xxl } }) => xxl,
      }}>
        <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '10px',
      }}
    >
      <IconButton variant="contained" onClick={alternarAplicacionAjustes}>
      {aplicarAjustes ? <ExpandLessIcon style={{ transform: 'rotate(225deg)' }} /> : <ExpandMoreIcon style={{ transform: 'rotate(225deg)' }}/>}
      </IconButton>
    </Box>

        <Box mt={2} ml={2} mb={-2}> <h2  style={{ color: '#344767' }}>Filtros</h2></Box>
      <Box p={2} sx={{ width: configuracionBox, margin: "0 auto"}} >
    
      <SelectorDinamico aplicarAjustesPersonalizados={aplicarAjustes}  onSearchResult={handleSearchResult} />
      
    </Box>
      </Card>
    </Grid>
    <Grid  xs={12} sm={9.3}>
    <Productos resultadoBusqueda={searchResult} />
</Grid>



  </Grid>
</Box>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>


    </>
    
    
  );
}

export default Presentation;
