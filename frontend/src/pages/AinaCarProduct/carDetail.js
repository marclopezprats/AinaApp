import React, { useState , useRef} from 'react';
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
function ProductDetail() {
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
      Detalles del vehículo seleccionado
    </MKTypography>
  </MKBox>
</MKBox>

<MKBox>
<Box textAlign="center" p={2}>
              <Card>
                <img
                  src={imag}
                  alt="PEUGEOT 3008"
                  style={{ width: '100%', borderRadius: 10 }}
                />
                <Box p={4} textAlign="left">
              <Typography variant="h2" sx={{color:'#344767'}} gutterBottom>
                PEUGEOT 3008
              </Typography>
              <Typography variant="h4" sx={{color:'#344767'}} gutterBottom>
                5 plazas
              </Typography>
            </Box>
            <Box pl={4} pr={4}>
            < Divider />
            </Box>
            <Box p={4} pt={0} justifyContent="center" alignItems="center">
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ mb: 0, ml: -2 }}
                  >
                    <MKTypography variant="h5" sx={{ color: '#344767' }}>
                      Especificaciones
                    </MKTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <form>
                      <Grid container spacing={2} mt={0} mr={2} justifyContent="center">
                        <Grid item xs={12} mt={2} ml={-2} sx={{ textAlign: 'center' }}>
                          <MKButton type="submit" variant="contained" color="info">
                            Enviar
                          </MKButton>
                        </Grid>
                      </Grid>
                    </form>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box p={4} pt={0} justifyContent="center" alignItems="center">
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ mb: 0, ml: -2 }}
                  >
                    <MKTypography variant="h5" sx={{ color: '#344767' }}>
                      Especificaciones
                    </MKTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <form>
                      <Grid container spacing={2} mt={0} mr={2} justifyContent="center">
                        <Grid item xs={12} mt={2} ml={-2} sx={{ textAlign: 'center' }}>
                          <MKButton type="submit" variant="contained" color="info">
                            Enviar
                          </MKButton>
                        </Grid>
                      </Grid>
                    </form>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box p={4}  pt={0} justifyContent="center" alignItems="center">
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ mb: 0, ml: -2 }}
                  >
                    <MKTypography variant="h5" sx={{ color: '#344767' }}>
                      Especificaciones
                    </MKTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <form>
                      <Grid container spacing={2} mt={0} mr={2} justifyContent="center">
                        <Grid item xs={12} mt={2} ml={-2} sx={{ textAlign: 'center' }}>
                          <MKButton type="submit" variant="contained" color="info">
                            Enviar
                          </MKButton>
                        </Grid>
                      </Grid>
                    </form>
                  </AccordionDetails>
                </Accordion>
              </Box>
              </Card>
            </Box>
            <Grid p={2}>
            <Card style={{ padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Recogida"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: <Box component="span" mr={1}>📍</Box>,
                    }}
                    margin="normal"
                  />
                  <TextField
                    label="dd/mm/aa"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: <Box component="span" ml={1}>📅</Box>,
                    }}
                  />
                  <TextField
                    label="hh:mm"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: <Box component="span" ml={1}>⏰</Box>,
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Entrega"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: <Box component="span" mr={1}>📍</Box>,
                    }}
                    margin="normal"
                  />
                  <TextField
                    label="dd/mm/aa"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: <Box component="span" ml={1}>📅</Box>,
                    }}
                  />
                  <TextField
                    label="hh:mm"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: <Box component="span" ml={1}>⏰</Box>,
                    }}
                  />
                </Grid>

                <Grid item xs={12} container direction="column" justifyContent="center">
                  <FormControlLabel
                    control={<Checkbox name="edadConductor" />}
                    label="Edad conductor"
                    style={{ marginBottom: '16px' }}
                  />
                  <MKButton variant="contained" color="primary" fullWidth>
                    Buscar disponibilidad
                  </MKButton>
                </Grid>
              </Grid>
            </Card>
          </Grid>
            
</MKBox>





    </>

    ) : (  //################################################################################################################################
    <>
    <Box ref={appBarRef} style={{ position: 'sticky', top: valorHijo ? '15px' : '10px', transition: valorHijo ? 'top 1s ease-in' : 'top 0.0s ease-out', zIndex: 3 }}>
          <ResponsiveAppBar onCambio={manejarCambio} />
      </Box>

      <MKBox
              bgColor="primary"

        sx={{
          minHeight: "12vh",
          width: "100%",
          //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${back})`,
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
        style={{ minHeight: "3vh" , borderBottomLeftRadius: '0px', // Rounded bottom-left corner
        borderBottomRightRadius: '0px', // Rounded bottom-right corner
      }}
      >
        <MKBox textAlign="center"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ }}
        >
          <MKTypography style={{ padding: '6px' }} color="white" variant="h6">
            Detalles del vehículo seleccionado
          </MKTypography>
        </MKBox>
      </MKBox>

      <Box sx={{ margin: '20px' }}>
        {/* Main Content */}
        <Grid container spacing={2}>
          {/* Form Column */}
          <Grid item xs={12} md={3} sx={{ mt: 3, ml: 3 }}>
            <Card style={{ padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Recogida"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: <Box component="span" mr={1}>📍</Box>,
                    }}
                    margin="normal"
                  />
                  <TextField
                    label="dd/mm/aa"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: <Box component="span" ml={1}>📅</Box>,
                    }}
                  />
                  <TextField
                    label="hh:mm"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: <Box component="span" ml={1}>⏰</Box>,
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Entrega"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: <Box component="span" mr={1}>📍</Box>,
                    }}
                    margin="normal"
                  />
                  <TextField
                    label="dd/mm/aa"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: <Box component="span" ml={1}>📅</Box>,
                    }}
                  />
                  <TextField
                    label="hh:mm"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: <Box component="span" ml={1}>⏰</Box>,
                    }}
                  />
                </Grid>

                <Grid item xs={12} container direction="column" justifyContent="center">
                  <FormControlLabel
                    control={<Checkbox name="edadConductor" />}
                    label="Edad conductor"
                    style={{ marginBottom: '16px' }}
                  />
                  <MKButton variant="contained" color="primary" fullWidth>
                    Buscar disponibilidad
                  </MKButton>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Image Column */}
          <Grid item xs={12} md={5} sx={{ mt: 3, ml: 3 }}>
            <Box textAlign="center">
              <Card>
                <img
                  src={imag}
                  alt="PEUGEOT 3008"
                  style={{ width: '100%', borderRadius: 10 }}
                />
              </Card>
            </Box>
          </Grid>

          {/* Details Column */}
          <Grid item xs={12} md={3} sx={{ mt: 3, ml: 3 }}>
            <Box mt={4} mb={4} ml={1} textAlign="left">
              <Typography variant="h2" gutterBottom>
                PEUGEOT 3008
              </Typography>
              <Typography variant="h4" gutterBottom>
                5 plazas
              </Typography>
            </Box>

            <Card sx={{ p: 0, mx: { lg: 1 }, mb: 2, pl: 2, pr: 2 }}>
              <Box p={0} justifyContent="center" alignItems="center">
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ mb: 0, ml: -2 }}
                  >
                    <MKTypography variant="h5" sx={{ color: '#344767' }}>
                      Especificaciones
                    </MKTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <form>
                      <Grid container spacing={2} mt={0} mr={2} justifyContent="center">
                        <Grid item xs={12} mt={2} ml={-2} sx={{ textAlign: 'center' }}>
                          <MKButton type="submit" variant="contained" color="info">
                            Enviar
                          </MKButton>
                        </Grid>
                      </Grid>
                    </form>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Card>
            <Card sx={{ p: 0, mx: { lg: 1 }, mb: 2, pl: 2, pr: 2 }}>
              <Box p={0} justifyContent="center" alignItems="center">
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ mb: 0, ml: -2 }}
                  >
                    <MKTypography variant="h5" sx={{ color: '#344767' }}>
                      Equipamiento
                    </MKTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <form>
                      <Grid container spacing={2} mt={0} mr={2} justifyContent="center">
                        <Grid item xs={12} mt={2} ml={-2} sx={{ textAlign: 'center' }}>
                          <MKButton type="submit" variant="contained" color="info">
                            Enviar
                          </MKButton>
                        </Grid>
                      </Grid>
                    </form>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Card>
            <Card sx={{ p: 0, mx: { lg: 1 }, mb: 2, pl: 2, pr: 2 }}>
              <Box p={0} justifyContent="center" alignItems="center">
                <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ mb: 0, ml: -2 }}
                  >
                    <MKTypography variant="h5" sx={{ color: '#344767' }}>
                      Accesorios
                    </MKTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <form>
                      <Grid container spacing={2} mt={0} mr={2} justifyContent="center">
                        <Grid item xs={12} mt={2} ml={-2} sx={{ textAlign: 'center' }}>
                          <MKButton type="submit" variant="contained" color="info">
                            Enviar
                          </MKButton>
                        </Grid>
                      </Grid>
                    </form>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>

      </>) }
    
    </>
  );
}

export default ProductDetail;
