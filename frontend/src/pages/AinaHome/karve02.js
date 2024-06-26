import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MKTypography from 'components/MKTypography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from './CircleIcon';
import { useNavigate } from 'react-router-dom';
import KarveIframe from './ReservationWidget';

const Karve02 = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [buttonHeight, setButtonHeight] = useState(0);

  useEffect(() => {
    if (buttonRef.current) {
      const height = buttonRef.current.clientHeight;
      setButtonHeight(height);
    }
  }, [isOpen]);

  const ButtonConfig = isOpen ? "100%" : "0%";
  const ButtonConfig2 = isOpen ? "0%" : "100%";
  const pointerEventsStyle = isOpen ? 'auto' : 'none';

  return (
    <>
      <Box sx={{ position: 'fixed', top: '80%', left: '0%', transform: `translate(-50%, -50%) rotate(90deg)`, zIndex: '1001', transition: '0.15s linear'}}>
        <MKButton ref={buttonRef} onClick={() => {toggleDrawer()}} variant="contained" color="primary" style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0', boxShadow: 'none', padding: '8px 16px', width: 'max-content', marginBottom: buttonHeight, opacity:ButtonConfig2 }}>
          {isOpen ? 'Cerrar' : 'Alquilar vehículos'}
        </MKButton>
      </Box>
      {isOpen && (
        <div style={{ 
          width: '100%', 
          height: '100%', 
          backdropFilter: `blur(15px)`,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          position: 'fixed', 
          top: '0', 
          left: '0', 
          zIndex: '1000', 
          transition: '0.15s linear' 
        }} />
      )}
      <div style={{ width: '100%', height: '100%', backgroundColor: 'white', overflow: 'hidden', position: 'fixed', top: '0', left: '0', zIndex: '1000', opacity: ButtonConfig, pointerEvents: pointerEventsStyle,
}}>
        <MKBox height="100vh" width="100%" display="flex" alignItems="center" justifyContent="center">
          <Grid container spacing={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' , width: '85%'}}>
            <Grid item xs={12} sm={12} md={12} xl={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '85%', width: '85%' }}>
              <MKBox sx={{ position: 'absolute', top: '0', right: '0', zIndex: 1 }}>
                <MKButton variant="text" onClick={() => {toggleDrawer()}} sx={{ color: 'rgba(0, 0, 0, 0.4)', borderRadius: '5px', padding: '8px 16px' }}>Cerrar</MKButton>
              </MKBox>
                <Suspense fallback={<div>Loading...</div>}>
                  {<KarveIframe />}
                </Suspense>
            </Grid>
          </Grid>
        </MKBox>
      </div>
    </>
  );
};

export default Karve02;
