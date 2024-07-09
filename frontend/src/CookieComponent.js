import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);
    const [thirdPartyCookiesAccepted, setThirdPartyCookiesAccepted] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const userConsent = Cookies.get('cookie_consent') || localStorage.getItem('cookie_consent');
        const thirdPartyConsent = Cookies.get('thirdPartyCookiesAccepted') || localStorage.getItem('thirdPartyCookiesAccepted');

        if (!userConsent) {
            setShowConsent(true);
        }

        if (thirdPartyConsent === 'true') {
            setThirdPartyCookiesAccepted(true);
            enableThirdPartyCookies();
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('cookie_consent', 'true', { expires: 365, sameSite: 'None', secure: true });
        Cookies.set('thirdPartyCookiesAccepted', 'true', { expires: 365, sameSite: 'None', secure: true });
        
        setShowConsent(false);
        setThirdPartyCookiesAccepted(true);
        enableThirdPartyCookies();
    };

    const handleReject = () => {
        Cookies.set('cookie_consent', 'true', { expires: 365, sameSite: 'None', secure: true });
        Cookies.set('thirdPartyCookiesAccepted', 'false', { expires: 365, sameSite: 'None', secure: true });

        setShowConsent(false);
        setThirdPartyCookiesAccepted(false);
        console.log("Cookies de terceros rechazadas");
    };

    const enableThirdPartyCookies = () => {
        console.log("Cookies de terceros habilitadas");
        // Aquí puedes incluir cualquier funcionalidad que dependa de cookies de terceros
    };

    if (!showConsent) {
        return null;
    }

    const styles = {
        container: {
          position: 'fixed',
          bottom: '20px',
          left: '10%',
          width: '80%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          textAlign: 'center',
          padding: '4rem',
          borderRadius: '10px',
          zIndex: 1000,
        },
        button: {
          color: '#25D366',
          padding: '0.5rem 1rem',
          marginLeft: '1rem',
          cursor: 'pointer',
        },
        button2: {
            color: '#d32525',
            padding: '0.5rem 1rem',
            marginLeft: '1rem',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container} role="dialog" aria-labelledby="cookieConsentTitle" aria-describedby="cookieConsentDescription">
            <p id="cookieConsentDescription">{t('cookies')}</p>
            <Button style={styles.button} onClick={handleAccept}>Aceptar</Button>
            <Button style={styles.button2} onClick={handleReject}>Rechazar</Button>
        </div>
    );
};

export default CookieConsent;
