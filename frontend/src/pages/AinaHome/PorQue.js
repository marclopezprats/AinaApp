import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import car from 'assets/images/car.png';
import siete from 'assets/images/24.png';
import truck from 'assets/images/truck.png';
import './fonts.css'; // Archivo que contiene la declaración @font-face
import { useTranslation } from 'react-i18next';

const WhyAinaCar_ = ({ refe }) => {
  const { t, i18n } = useTranslation();

  return (
    <MKBox ref={refe} bgColor="info" sx={{ width: '100%', py: 8 }}>
      <Box sx={{ width: { xs: '100%', sm: '70%', lg: '70%' }, mx: 'auto' }}>
        <MKBox mb={5}>
          <MKTypography color="white" variant="h2" align="center" gutterBottom>
            {t('porque_ainacar')}
          </MKTypography>
        </MKBox>

        <Grid container spacing={8}>
          {/* Columna 1 */}
          <Grid item xs={12} sm={12} md={12} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              m={5}
              sx={{
                textAlign: 'center',
                py: 2,
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexGrow: 1,
                  width: '100%'
                }}
              >
                <img src={car} alt="Imagen 1" style={{ width: '50%', borderRadius: '10px' }} />
                <MKTypography color="white" display="block" variant="h5" fontWeight="bold">
                  {t('porque_ainacar_elige')}
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="white"
                  fontWeight="regular"
                  sx={{ mt: 2 }}
                >
                  {t('porque_ainacar_elige_texto')}
                </MKTypography>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MKTypography color="white" fontWeight="bold" sx={{ fontSize: '25rem', opacity: '10%' }}>
                  1
                </MKTypography>
              </Box>
            </Box>
          </Grid>

          {/* Columna 2 */}
          <Grid item xs={12} sm={12} md={12} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              m={5}
              sx={{
                textAlign: 'center',
                py: 2,
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexGrow: 1,
                  width: '100%'
                }}
              >
                <img src={siete} alt="Imagen 2" style={{ width: '50%', borderRadius: '15px' }} />
                <MKTypography color="white" display="block" variant="h5" fontWeight="bold">
                  {t('porque_ainacar_recogida')}
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="white"
                  fontWeight="regular"
                  sx={{ mt: 2 }}
                >
                  {t('porque_ainacar_recogida_texto')}
                </MKTypography>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MKTypography color="white" fontWeight="bold" sx={{ fontSize: '25rem', opacity: '10%' }}>
                  2
                </MKTypography>
              </Box>
            </Box>
          </Grid>

          {/* Columna 3 */}
          <Grid item xs={12} sm={12} md={12} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              m={5}
              sx={{
                textAlign: 'center',
                py: 2,
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexGrow: 1,
                  width: '100%'
                }}
              >
                <img src={truck} alt="Imagen 3" style={{ width: '50%', borderRadius: '10px' }} />
                <MKTypography color="white" display="block" variant="h5" fontWeight="bold">
                {t('porque_ainacar_empieza')}
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="white"
                  fontWeight="regular"
                  sx={{ mt: 2 }}
                >
                  {t('porque_ainacar_empieza_texto')}
                </MKTypography>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MKTypography color="white" fontWeight="bold" sx={{ fontSize: '25rem', opacity: '10%' }}>
                  3
                </MKTypography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MKBox>
  );
};

export default WhyAinaCar_;
