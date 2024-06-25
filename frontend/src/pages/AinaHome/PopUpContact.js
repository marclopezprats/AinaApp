import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import MKButton from "components/MKButton";

export default function ContactDialog({ openDialog, handleClose }) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          sx: {
            maxWidth: { xs: '100%', md:'350px', lg: '35k  0px' }, // Limita el ancho máximo en pantallas grandes
            width: '100%', // Asegura que ocupe el ancho completo en pantallas pequeñas
          },
        }}
      >
        <DialogContent sx={{ padding: 2 }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column" sx={{ height: '100%' }}>
            <Grid item sx={{ width: '100%' }}>
              <MKButton
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => window.open('tel:+123456789', '_self')}
              >
                Llámanos al 937 273 907
              </MKButton>
            </Grid>
            <Grid item sx={{ width: '100%' }}>
              <MKButton
                sx={{ backgroundColor: "#075e54", color: '#ffffff' }}
                variant="contained"
                fullWidth
                onClick={() => window.open('https://wa.me/123456789', '_blank')}
              >
                ¿Hablamos por WhatsApp?
              </MKButton>
            </Grid>
            <Grid item sx={{ width: '100%' }}>
              <MKButton
                variant="contained"
                color="info"
                fullWidth
                onClick={() => window.open('mailto:info@example.com', '_self')}
              >
                Envíanos un e-mail reservas@ainacar.cat
              </MKButton>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
