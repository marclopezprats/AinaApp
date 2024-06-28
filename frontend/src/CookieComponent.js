import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = Cookies.get('cookie_consent');
        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('cookie_consent', 'true', { expires: 365 });
        setShowConsent(false);
    };

    if (!showConsent) {
        return null;
    }

    const styles = {
        container: {
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            textAlign: 'center',
            padding: '1rem',
            zIndex: 1000,
        },
        button: {
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            marginLeft: '1rem',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
            <p>We use cookies to improve your experience. By using our site, you consent to cookies.</p>
            <button style={styles.button} onClick={handleAccept}>Accept</button>
        </div>
    );
};

export default CookieConsent;
