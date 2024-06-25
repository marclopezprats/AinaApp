import React, { useState, useEffect, useRef } from 'react';
// @mui material components
import Card from "@mui/material/Card";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// Material Kit 2 React components
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactDialog from './PopUpContact'
import { useTranslation } from 'react-i18next';


const Recogida = () => {
  const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
  };

  return (
<>
    <ContactDialog openDialog={open} handleClose={handleClose} />

    <Grid
          container
          item
          xs={10}
          lg={8}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography color="white" variant="h2">{t('puntos_recogida')}</MKTypography>
         
          <MKTypography  color="white" variant="body1" mt={3} mb={2}>
{t('puntos_recogida_texto')}          </MKTypography>
        
<Grid item sx={{ margin:'10px' }} xs={12} sm={6} md={5} lg={2}>
<Card sx={{ height: '100%' }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LocationOnIcon fontSize="large" color="primary" />
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: 1 }}>
            <MKTypography variant="h5" gutterBottom>
              Sabadell
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="text" gutterBottom>
              C/ de Joaquín Costa, 50. 08206 Sabadell (BCN)
            </MKTypography>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: '100%', marginBottom: 1 }}>
            <MKButton variant="contained" color="primary" fullWidth onClick={handleClickOpen}>
            {t('puntos_recogida_contactar')} 
            </MKButton>
          </Box>
          <Box sx={{ width: '100%' }}>
            <MKButton variant="contained" color="info" fullWidth onClick={() => window.open('https://www.google.com/maps/place/Carrer+de+Joaqu%C3%ADn+Costa,+50,+08206+Sabadell,+Barcelona/@41.546649,2.096741,13z/data=!4m6!3m5!1s0x12a494f9f037bab3:0x6fa9a4ecf251396d!8m2!3d41.5467354!4d2.0966366!16s%2Fg%2F11c5bykq_r?hl=es&entry=ttu', '_blank')}>
            {t('puntos_recogida_maps')}
            </MKButton>
          </Box>
        </Box>
      </Box>
    </Card>
  </Grid>
  
  {/* Elemento 2 */}
  <Grid item sx={{ margin:'10px' }} xs={12} sm={6} md={5} lg={2}>
    <Card sx={{ height: '100%' }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LocationOnIcon fontSize="large" color="primary" />
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: 1 }}>
            <MKTypography variant="h5" gutterBottom>
              Parets
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="text" gutterBottom>
              Carrer Impremta, 5. 08150 Parets del Vallès (BCN)
            </MKTypography>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: '100%', marginBottom: 1 }}>
            <MKButton variant="contained" color="primary" fullWidth  onClick={handleClickOpen}>
            {t('puntos_recogida_contactar')}
            </MKButton>
          </Box>
          <Box sx={{ width: '100%' }}>
            <MKButton variant="contained" color="info" fullWidth onClick={() => window.open('https://www.google.com/maps?ll=41.567676,2.241311&z=13&t=m&hl=es&gl=ES&mapclient=embed&q=Carrer+Impremta,+5+08150+Parets+del+Vall%C3%A8s+Barcelona', '_blank')}>
            {t('puntos_recogida_maps')}
            </MKButton>
          </Box>
        </Box>
      </Box>
    </Card>
  </Grid>
  
  {/* Elemento 3 */}
  <Grid item sx={{ margin:'10px' }} xs={12} sm={6} md={5} lg={2}>
    <Card sx={{ height: '100%' }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LocationOnIcon fontSize="large" color="primary" />
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: 1 }}>
            <MKTypography variant="h5" gutterBottom>
              Barcelona ciudad
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="text" gutterBottom>
              C/ de Caracas, 50. 08030 Barcelona (BCN)
            </MKTypography>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: '100%', marginBottom: 1 }}>
            <MKButton variant="contained" color="primary" fullWidth  onClick={handleClickOpen}>
            {t('puntos_recogida_contactar')}
            </MKButton>
          </Box>
          <Box sx={{ width: '100%' }}>
            <MKButton variant="contained" color="info" fullWidth onClick={() => window.open('https://www.google.com/maps?ll=41.44605,2.202203&z=12&t=m&hl=es&gl=ES&mapclient=embed&cid=16739925370953174238', '_blank')}>
            {t('puntos_recogida_maps')}
            </MKButton>
          </Box>
        </Box>
      </Box>
    </Card>
  </Grid>
  
  {/* Elemento 4 */}
  <Grid item sx={{ margin:'10px' }} xs={12} sm={6} md={5} lg={2}>
    <Card sx={{ height: '100%' }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LocationOnIcon fontSize="large" color="primary" />
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: 1 }}>
            <MKTypography variant="h5" gutterBottom>
              Aeropuerto BCN
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="text" gutterBottom>
              Parking Park&Fly 08840 Viladecans (BCN)
            </MKTypography>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: '100%', marginBottom: 1 }}>
            <MKButton variant="contained" color="primary" fullWidth  onClick={handleClickOpen}>
            {t('puntos_recogida_contactar')}
            </MKButton>
          </Box>
          <Box sx={{ width: '100%' }}>
            <MKButton variant="contained" color="info" fullWidth onClick={() => window.open('https://www.google.com/maps?ll=41.277389,2.049418&z=12&t=m&hl=es&gl=ES&mapclient=embed&cid=13797577029492804270', '_blank')}
>
{t('puntos_recogida_maps')}
            </MKButton>
          </Box>
        </Box>
      </Box>
    </Card>
  </Grid>
  
  {/* Elemento 5 */}
  <Grid item sx={{ margin:'10px' }} xs={12} sm={6} md={5} lg={2}>
    <Card sx={{ height: '100%' }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LocationOnIcon fontSize="large" color="primary" />
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: 1 }}>
            <MKTypography variant="h5" gutterBottom>
              Sant Cugat del Vallès
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="text" gutterBottom>
              Av.Corts Caralanes,5. 08173 Sant Cugat del Vallès (BCN)
            </MKTypography>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={{ width: '100%', marginBottom: 1 }}>
            <MKButton variant="contained" color="primary" fullWidth  onClick={handleClickOpen}>
            {t('puntos_recogida_contactar')}
            </MKButton>
          </Box>
          <Box sx={{ width: '100%' }}>
            <MKButton variant="contained" color="info" fullWidth onClick={() => window.open('https://www.google.com/maps?ll=41.474848,2.098199&z=16&t=m&hl=es&gl=ES&mapclient=embed&q=Av.+Corts+Catalanes,+5+08173+Sant+Cugat+del+Vall%C3%A8s+Barcelona', '_blank')}
>
{t('puntos_recogida_maps')}
            </MKButton>
          </Box>
        </Box>
      </Box>
    </Card>

    </Grid>
        </Grid>
        </>
  );
};

export default Recogida;
