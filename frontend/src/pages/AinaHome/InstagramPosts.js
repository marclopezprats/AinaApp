import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardMedia, Grid, Box } from '@mui/material';
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();
  const isMobileDevice = window.innerWidth <= 1000;

  return (
    <MKBox
      bgColor="#d6061e"
      sx={{ width: '90%', py: 4, borderRadius: '12px', boxShadow: 20, mx: 'auto', mt: 4 }}
    >
      <Box sx={{ width: { xs: '100%', sm: '90%', lg: '90%' }, mx: 'auto', py: 4 }}>
        <MKBox component="section" sx={{ position: 'relative', overflow: 'hidden' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              //zIndex: -1,
              opacity: 0.1, // Aumentar la opacidad
              display: 'flex',
              justifyContent: isMobileDevice ? 'center' : 'left',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              fontSize: '10vw',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            <MKTypography fontWeight="bold" sx={{ fontSize: '40.75rem', color: '#FFFFFF' }}>
              A
            </MKTypography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={12} lg={4} container justifyContent="center" alignItems="center">
                <Box
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems={isMobileDevice ? 'center' : 'flex-start'}
                  textAlign={isMobileDevice ? 'center' : 'left'}
                >
                  <Box display="flex" alignItems="center" marginBottom={2}>
                    <MKTypography fontWeight="bold" gutterBottom sx={{ fontSize: '3.75rem', color: '#FFFFFF', lineHeight: 0.9 }}>
                      {t('nuestras_redes')}
                    </MKTypography>
                  </Box>

                  <Box display="flex" alignItems="center" justifyContent={isMobileDevice ? 'center' : 'flex-start'} marginBottom={4}>
                    <Box p={1} sx={{ backgroundColor: '#f3f3f3', borderRadius: '8px' }}>
                      <MKTypography variant="h6" fontWeight="regular" color="info">
                        @ainacar_rentacar
                      </MKTypography>
                    </Box>
                  </Box>

                  <Box sx={{ width: isMobileDevice ? '100%' : '70%', textAlign: isMobileDevice ? 'center' : 'left' }}>
                    <MKTypography variant="h5" sx={{ color: "#FFFFFF" }} fontWeight="regular">
                      {t('insta_ainacar_novedades')}
                    </MKTypography>
                  </Box>
                  <Box marginTop={4} textAlign={isMobileDevice ? 'center' : 'left'}>
                    <MKButton
                      variant="contained"
                      color="white"
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('insta_ainacar_novedades_link')}
                    </MKButton>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  {posts.map(post => (
                    <Grid item key={post.id} xs={12} sm={6} md={4}>
                      <Card sx={{ padding: '0px', height: '100%', backgroundColor: 'transparent' }}>
                        <CardMedia
                          component={post.media_type === 'VIDEO' ? 'video' : 'img'}
                          src={post.media_url}
                          title={post.caption}
                          controls={post.media_type === 'VIDEO'}
                          sx={{ 
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            marginLeft: '0px',
                            marginTop: '0px'
                          }}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </MKBox>
      </Box>
    </MKBox>
  );
};

export default InstagramPosts;
