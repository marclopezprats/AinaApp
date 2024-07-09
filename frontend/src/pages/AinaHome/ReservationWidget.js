import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ReservationWidget = ({ margin }) => {
  const { i18n } = useTranslation();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [storageAccessGranted, setStorageAccessGranted] = useState(false);

  useEffect(() => {
    const loadScript = (src, id, dataset) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        if (id) script.id = id;
        if (dataset) {
          for (const key in dataset) {
            script.dataset[key] = dataset[key];
          }
        }
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
      });
    };

    const removeScript = (src) => {
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };

    const communicationScriptSrc = 'https://iframes.karveinformatica.com/AinacarIframe/js/iframe-comunication-parent.js';

    const requestStorageAccess = async () => {
      if (document.requestStorageAccess) {
        try {
          await document.requestStorageAccess();
          console.log('Storage access granted.');
          setStorageAccessGranted(true);
        } catch (error) {
          console.error('Storage access denied.', error);
          setStorageAccessGranted(false);
        }
      } else {
        console.warn('Storage Access API is not supported in this browser.');
        setStorageAccessGranted(true); // Assumes access if not supported
      }
    };

    const init = async () => {
      try {
        await requestStorageAccess();
        if (storageAccessGranted) {
          removeScript(communicationScriptSrc);
          await loadScript(communicationScriptSrc, 'karve-comunication-script', { minheight: '500' });
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
    return () => {
      removeScript(communicationScriptSrc);
    };
  }, [i18n.language, storageAccessGranted]);
S
  return (
    <div style={{ 
      position: 'relative', 
      top: `${margin}px`,
      left: '0px', 
      width: '100%', 
      height: '20%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
    }}>
      {storageAccessGranted ? (
        <iframe
          style={{
            width: "100%",
            borderRadius: '12px',
            border: 'none',
          }}
          id="karve-iframe"
          width="100%"
          frameBorder="0"
          scrolling="no"
          src={`https://iframes.karveinformatica.com/AinacarIframe/views/home.php?lang=${i18n.language}`}
          data-src-loading="https://iframes.karveinformatica.com/AinacarIframe/views/loading.php"
          onLoad={() => setIframeLoaded(true)}
        ></iframe>
      ) : (
        <div>Please enable third-party cookies for a better experience.</div>
      )}
      {!iframeLoaded && storageAccessGranted && <div>Loading...</div>}
    </div>
  );
};

export default ReservationWidget;
