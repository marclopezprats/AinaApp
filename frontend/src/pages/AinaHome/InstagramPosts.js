import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardMedia, Grid, Container, Box } from '@mui/material';
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';
import Divider from '@mui/material/Divider';

const InstagramPosts = ({ accessToken }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`;
      try {
        const response = await axios.get(url);
        setPosts(response.data.data.slice(0, 6)); // Obtener solo las primeras 6 publicaciones
      } catch (error) {
        console.error("Error al obtener las publicaciones de Instagram:", error);
      }
    };

    fetchPosts();
  }, [accessToken]);

  const { t, i18n } = useTranslation();

  return (
    <>
      <Divider sx={{ margin: '0', marginBottom: '50px' }} />

      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}> {/* Centrar contenido dentro del Container */}
        <Grid container spacing={0} justifyContent="center"> {/* Centrar el grid principal */}
          <Grid item xs={12} md={4} container justifyContent="center" alignItems="center"> {/* Centrar este grid */}
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="right"
            textAlign="left" // Añadido para centrar el texto
          >
            
            <Box display="flex" alignItems="flex-start" marginBottom={0}>
              <MKTypography
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: '3.75rem', textAlign: 'left', color: '#d6061e', lineHeight: 0.9 }}
              >
                {t('nuestras_redes')}
              </MKTypography>
            </Box>

            <Box display="inline-flex" alignItems="flex-start" marginBottom={4} >
            <Box p={1} sx={{ backgroundColor: '#f3f3f3', borderRadius: '8px' }}>
  <MKTypography variant="h6" fontWeight="regular" color="info" >
    @ainacar_rentacar
  </MKTypography>
</Box>

            </Box>
<Box sx={{width:'70%'}}>
              <MKTypography variant="h5" color="text" fontWeight="regular" >
                {t('insta_ainacar_novedades')}
              </MKTypography>
              </Box>
              <Box marginTop={4}>
                <MKButton
                  variant="contained"
                  color="primary"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('insta_ainacar_novedades_link')}
                </MKButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} p={4}>
            <Grid container spacing={2}> {/* Añadir spacing aquí */}
              {posts.map(post => (
                <Grid item key={post.id} xs={6} sm={6} md={4} p={0.1}>
                  <Card>
                    <CardMedia
                      component={post.media_type === 'VIDEO' ? 'video' : 'img'}
                      src={post.media_url}
                      title={post.caption}
                      controls={post.media_type === 'VIDEO'}
                      style={{
                        marginTop: -2,
                        marginLeft: -2,
                        marginRight: -2,
                        borderRadius: '10px'
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ margin: '0', marginTop: '50px' }} />
    </>
  );
};

export default InstagramPosts;
