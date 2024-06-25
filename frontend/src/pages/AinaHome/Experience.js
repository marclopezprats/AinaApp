import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Box, Grid } from '@mui/material';
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Rating from '@mui/material/Rating';
import MKAvatar from "components/MKAvatar";
import { useTranslation } from 'react-i18next';

const ExperiencePosts = ({ accessToken }) => {
  const { t, i18n } = useTranslation();
  const [reseñas, setReseñas] = useState([]);
  const [btn, setBtn] = useState(false);

  const obtenerReseñas = async () => {
    try {
      const response = await axios.get('https://ainaapp.onrender.com/api/reseñas');
      console.log('Respuesta del backend:', response.data);

      if (response.data && response.data.Reseñas) {
        setReseñas(response.data.Reseñas);
      } else {
        console.error('La respuesta de la API no contiene reseñas:', response.data);
      }
    } catch (error) {
      console.error('Error al obtener las reseñas:', error);
    }
  };

  useEffect(() => {
    obtenerReseñas();
  }, []);

  const isMobileDevice = () => {
    return window.innerWidth <= 600;
  };

  const showMoreReviews = () => {
    setBtn(!btn);
  };

  return (
    <Container>
      <Box mb={4} textAlign="center">
        <MKTypography variant="h2">{t('experiencia_ainacar')}</MKTypography>
        <MKTypography variant="body1" color="text" mb={2}>
          {t('experiencia_ainacar_texto')}
        </MKTypography>
      </Box>
      <Box mb={12}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {reseñas.slice(0, isMobileDevice() ? btn ? 10 : 3 : 10).map((reseña, index) => (
            <Card key={index} style={{ margin: '10px', padding: '20px' }}>
              <Grid container>
                <Grid item>
                  <MKAvatar alt={reseña.user.name} src={reseña.user.thumbnail || '/default-avatar.png'} style={{ width: '50px', height: '50px', marginRight: '15px' }} />
                </Grid>
                <Grid item xs>
                  <Grid container direction="column">
                    <Grid item>
                      <MKTypography variant="body2" fontWeight="bold" color="text">
                        {reseña.user.name}
                      </MKTypography>
                    </Grid>
                    <Grid item>
                      <Rating style={{ marginBottom: '5px' }} name="read-only" value={reseña.rating} readOnly />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <MKTypography variant="body2" color="text">
                    {reseña.snippet}
                  </MKTypography>
                </Grid>
              </Grid>
            </Card>
          ))}
        </div>
      </Box>
      {isMobileDevice() && (
        <MKButton
          onClick={showMoreReviews}
          variant="contained"
          color="info"
          style={{ bottom: '50px', left: '50%', transform: 'translateX(-50%)' }}
        >
          {btn ? 'Ver menos reseñas' : 'Ver más reseñas'}
        </MKButton>
      )}
      <MKButton
        onClick={() => window.open('https://www.google.es/maps/place/Aina+Car+-+Alquiler+de+Coches,+Furgonetas,+Camiones+en+Sabadell+-+Barcelona/@41.5466653,2.0941462,17z/data=!4m8!3m7!1s0x12a494fa1d0d956b:0xd5d94ad413be721c!8m2!3d41.5466613!4d2.0967211!9m1!1b1!16s%2Fg%2F1txr5m5p?entry=ttu', '_blank')}
        variant="contained"
        color="primary"
        style={{ bottom: '30px', left: '50%', transform: 'translateX(-50%)' }}
      >
        {t('experiencia_ainacar_reseña')}
      </MKButton>
    </Container>
  );
};

export default ExperiencePosts;
