import React, { lazy, useState , useRef} from 'react';
import Card from "@mui/material/Card";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import imag from 'assets/images/VEH_VF1RJB00271720855/VEH_VF1RJB00271720855-1.jpeg';
import ResponsiveAppBar from '../AinaHome/NavbarTest'
import { Typography, TextField, FormControlLabel, Checkbox } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
const ReservationWidget = lazy(() => import('../AinaHome/ReservationWidget'));


function CarDetail_reserva() {
  const [valorHijo, setValorHijo] = useState('');
  const manejarCambio = (nuevoValor) => {
    setValorHijo(nuevoValor);
    console.log(nuevoValor);
  };
  const appBarRef = useRef(null);

  const isMobileDevice = () => {
    return window.innerWidth <= 1000;
  };


  return (
    <>


{isMobileDevice() ? (<>
<Box ref={appBarRef} style={{ position: 'sticky', top: valorHijo ? '15px' : '10px', transition: valorHijo ? 'top 1s ease-in' : 'top 0.0s ease-out', zIndex: 3 }}>
          <ResponsiveAppBar onCambio={manejarCambio} />
      </Box>

      <MKBox
              bgColor="primary"

        sx={{
          minHeight: "12vh",
          width: "100%",
          backgroundColor: "primary",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: '-95px',
        }}
      ></MKBox>

<MKBox
  bgColor="info"
  zIndex={2}
  style={{ 
    minHeight: "3vh",
    borderBottomLeftRadius: '0px', // Rounded bottom-left corner
    borderBottomRightRadius: '0px', // Rounded bottom-right corner
  }}
>
  <MKBox 
    textAlign="center"
    position="relative"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <MKTypography style={{ padding: '6px' }} color="white" variant="h6">
      
    </MKTypography>
  </MKBox>
</MKBox>

<ReservationWidget />




    </>

    ) : (  //################################################################################################################################
    <>
    <div style={{ backgroundColor: 'white', minHeight: '100vh', width: '100%' }}>
      <Box
        ref={appBarRef}
        style={{
          position: 'sticky',
          top: valorHijo ? '15px' : '10px',
          transition: valorHijo ? 'top 1s ease-in' : 'top 0.0s ease-out',
          zIndex: 3
        }}
      >
        <ResponsiveAppBar onCambio={manejarCambio} />
      </Box>

      <MKBox
        bgColor="primary"
        sx={{
          minHeight: '12vh',
          width: '100%',
          backgroundColor: 'primary',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-95px',
        }}
      ></MKBox>

      <MKBox
        bgColor="info"
        zIndex={2}
        style={{
          minHeight: '3vh',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
        }}
      >
        <MKBox
          textAlign="center"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{}}
        >
          <MKTypography style={{ padding: '6px' }} color="white" variant="h6">
          </MKTypography>
        </MKBox>
      </MKBox>



      
{          <ReservationWidget />
} 
    </div>


      </>) }
    
    </>
  );
}

export default CarDetail_reserva;
