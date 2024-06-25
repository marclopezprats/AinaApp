import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Ainapicture from "assets/images/ainapicture.jpg";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <Dialog
        fullWidth={false}
        open={open}
        onClose={handleClose}
        sx={{ padding: 0 }}
        PaperProps={{
          sx: {
            height: '40vh', // Ajusta la altura aquí
            maxHeight: '80vh',
            minWidth: '50%'
          }
        }}
      >
        <DialogContent sx={{ padding: 0 }}>
          <Grid container sx={{ height: '100%', padding: 0 }}>
            
            <Grid item xs={6} sx={{ height: '100%' }}>
              <Box sx={{ width: '100%', height: '100%' }}>
                <Box p={3} ml={3} style={{ borderRadius: '0', objectFit: 'cover', height: '100%', textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <MKTypography color='info' variant="h3">
                    <span style={{ fontWeight: 'Regular' }}>¡Entra en la familia</span >
                    <span style={{ fontWeight: 'bold' }}> AinaCar</span>
                    <span style={{ fontWeight: 'Regular' }}> y recibe un </span>
                    <span style={{ fontWeight: 'bold' }}>10% en tu primer alquiler!</span>
                  </MKTypography>
                  <MKButton variant="contained" color="primary" sx={{ mt: 2 }}>
                    ¡Regístrate Ahora!
                  </MKButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ height: '100%', padding: 0 }}>
              <Box position="relative" mx={0} mt={0} overflow="hidden" sx={{ height: '100%', padding: 0 }}>
                <div style={{ bottom: '0', overflow: 'hidden', textAlign: "center", height: '100%', padding: 0 }}>
                  <Box style={{ padding: 0, bottom: '0', left: '-20px', borderRadius: '0', objectFit: 'cover', height: '100%', textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
                    <Box
                      component="img"
                      src={Ainapicture} // Reemplaza esta URL con la URL de tu imagen
                      alt="Example Image"
                      sx={{
                        objectFit: 'cover', height: '100%', textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}
                    />
                  </Box>
                </div>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
