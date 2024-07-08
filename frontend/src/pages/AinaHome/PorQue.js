import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TouchAppIcon from '@mui/icons-material/TouchApp'; // Importar el icono de clic
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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <MKBox ref={refe} bgColor="#1a1a1a" sx={{ width: '90%', py: 5, borderRadius: '12px', boxShadow: 20, position: 'relative' }}>
      {/* Icono de clic en la esquina superior derecha */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: 'white',
        }}
      >
        <TouchAppIcon sx={{color: '#FFFFFF', width: '2em', height: '2em', transform: 'rotate(45deg)'}}/> 
      </Box>

      <Box sx={{ width: { xs: '100%', sm: '70%', lg: '70%' }, mx: 'auto' }}>
        <MKBox mb={0}>
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
                width: '100%',
                height: '150px', // Establecer altura fija
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
                  width: '100%',
                  cursor: 'pointer',
                  justifyContent: hoveredIndex === 1 ? 'center' : 'center', // Centrar verticalmente
                }}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredIndex === 1 ? (
                  <>
                    <MKTypography
                      variant="body2"
                      color="white"
                      fontWeight="regular"
                      sx={{ mt: 2 }}
                    >
                      {t('porque_ainacar_texto_1')}
                    </MKTypography>
                  </>
                ) : (
                  <>
                    <img src={car} alt="Imagen 1" style={{ width: '60%', borderRadius: '10px', marginBottom: '20px' }} />
                    <MKTypography color="white" display="block" variant="h5" fontWeight="bold">
                      {t('porque_ainacar_1')}
                    </MKTypography>
                  </>
                )}
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
                <MKTypography color="white" fontWeight="bold" sx={{ fontSize: '16rem', opacity: '10%' }}>
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
                width: '100%',
                height: '150px', // Establecer altura fija
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
                  width: '100%',
                  cursor: 'pointer',
                  justifyContent: hoveredIndex === 2 ? 'center' : 'center', // Centrar verticalmente
                }}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredIndex === 2 ? (
                  <>
                    <MKTypography
                      variant="body2"
                      color="white"
                      fontWeight="regular"
                      sx={{ mt: 2 }}
                    >
                      {t('porque_ainacar_texto_2')}
                    </MKTypography>
                  </>
                ) : (
                  <>
                    <img src={siete} alt="Imagen 2" style={{ width: '60%', borderRadius: '15px', marginBottom: '20px' }} />
                    <MKTypography color="white" display="block" variant="h5" fontWeight="bold">
                      {t('porque_ainacar_2')}
                    </MKTypography>
                  </>
                )}
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
                <MKTypography color="white" fontWeight="bold" sx={{ fontSize: '16rem', opacity: '10%' }}>
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
                width: '100%',
                height: '150px', // Establecer altura fija
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
                  width: '100%',
                  cursor: 'pointer',
                  justifyContent: hoveredIndex === 3 ? 'center' : 'center', // Centrar verticalmente
                }}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredIndex === 3 ? (
                  <>
                    <MKTypography
                      variant="body2"
                      color="white"
                      fontWeight="regular"
                      sx={{ mt: 2 }}
                    >
                      {t('porque_ainacar_texto_3')}
                    </MKTypography>
                  </>
                ) : (
                  <>
                    <img src={truck} alt="Imagen 3" style={{ width: '60%', borderRadius: '10px', marginBottom: '20px' }} />
                    <MKTypography color="white" display="block" variant="h5" fontWeight="bold">
                      {t('porque_ainacar_3')}
                    </MKTypography>
                  </>
                )}
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
                <MKTypography color="white" fontWeight="bold" sx={{ fontSize: '16rem', opacity: '10%' }}>
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
