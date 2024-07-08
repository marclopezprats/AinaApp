import React, { useState, useEffect } from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar,
  Button, Tooltip, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import LogoSVG from 'assets/images/LogoAina.svg';
import { useTranslation } from 'react-i18next';
import 'flag-icons/css/flag-icons.min.css';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({ onCambio, reservationDrawer }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElLanguage, setAnchorElLanguage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const pages = [
    { name: t('alquiler_vehiculos'), path: '/' }, 
    { name: t('venta_vehiculos'), path: 'https://www.coches.net/concesionario/kodecarsmarket/default/' },
    { name: t('flota_vehiculos'), path: '/home' }, 
    { name: t('ainacar_protect'), path: '/protect' }, 
    { name: t('nuestra_compania'), path: '/company' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      onCambio(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onCambio]);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleOpenLanguageMenu = (event) => setAnchorElLanguage(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleCloseLanguageMenu = () => setAnchorElLanguage(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleCloseLanguageMenu();
  };

  const getFlagClass = (language) => {
    switch (language) {
      case 'en': return 'fi fi-gb';
      case 'es': return 'fi fi-es';
      case 'fr': return 'fi fi-fr';
      case 'ca': return 'fi fi-es-ct';
      default: return '';
    }
  };

  const handleNavigation = (page) => {
    if (page.path === '/') {
      reservationDrawer();
    } else if (page.name === t('venta_vehiculos')) {
      window.location.href = page.path;
    } else {
      navigate(page.path);
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: { xs: '95%', sm: '100%', md: '95%', lg: '80%' },
        margin: 'auto',
        borderRadius: '20px',
        backgroundColor: isScrolled ? '#1a1a1a ' : 'transparent',
        backdropFilter: isScrolled ? 'saturate(200%) blur(30px)' : 'none',
        transition: 'background-color 1.0s ease, backdrop-filter 1.0s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', marginX: 'auto' }}>
          <Box onClick={() => navigate('/home')} sx={{ cursor: 'pointer', display: { xs: 'none', md: 'flex' } }}>
            <Avatar alt="Logo" src={LogoSVG} sx={{ width: 120, height: 60, mr: 1 }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="white">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={() => handleNavigation(page)}>
                  <Typography color="inherit" textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box onClick={() => navigate('/home')} sx={{ cursor: 'pointer', display: { xs: 'flex', md: 'none' } }}>
            <Avatar alt="Logo" src={LogoSVG} sx={{ width: 120, height: 60, mr: 1 }} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#ffffff',
              textDecoration: 'none',
            }}
          ></Typography>
          <Box sx={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page.path} onClick={() => handleNavigation(page)} sx={{ my: 2, color: '#ffffff', display: 'block' }}>
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, mr: 3 }}>
            <Tooltip title="Seleccionar idioma">
              <Button onClick={handleOpenLanguageMenu} sx={{ p: 0, color: '#FFFFFF' }}>
                <span>
                  <span className={getFlagClass(i18n.language)} style={{ marginRight: '8px' }}></span>
                  {i18n.language === 'en' ? 'English' : i18n.language === 'es' ? 'Español' : i18n.language === 'fr' ? 'Français' : 'Català'}
                </span>
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElLanguage}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElLanguage)}
              onClose={handleCloseLanguageMenu}
            >
              <MenuItem onClick={() => changeLanguage('en')}>
                <span className="fi fi-gb" style={{ marginRight: '8px' }}></span> English
              </MenuItem>
              <MenuItem onClick={() => changeLanguage('es')}>
                <span className="fi fi-es" style={{ marginRight: '8px' }}></span> Español
              </MenuItem>
              <MenuItem onClick={() => changeLanguage('fr')}>
                <span className="fi fi-fr" style={{ marginRight: '8px' }}></span> Français
              </MenuItem>
              <MenuItem onClick={() => changeLanguage('ca')}>
                <span className="fi fi-es-ct" style={{ marginRight: '8px' }}></span> Català
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
