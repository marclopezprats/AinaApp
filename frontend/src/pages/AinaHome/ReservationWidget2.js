import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import React, { useEffect } from 'react';

const ReservationWidgetTest = () => {
  useEffect(() => {
    // Cargar el primer script
    const customEventsScript = document.createElement('script');
    customEventsScript.src = "https://iframes.karveinformatica.com/AinacarIframe/custom/custom-events.js";
    customEventsScript.type = "application/javascript";
    customEventsScript.language = "javascript";
    document.body.appendChild(customEventsScript);

    // Cargar el segundo script con atributos adicionales
    const communicationScript = document.createElement('script');
    communicationScript.src = "https://iframes.karveinformatica.com/AinacarIframe/js/iframe-comunication-parent.js";
    communicationScript.type = "application/javascript";
    communicationScript.language = "javascript";
    communicationScript.id = "karve-comunication-script";
    communicationScript.dataset.minheight = "500";
    document.body.appendChild(communicationScript);

    // Limpiar los scripts al desmontar el componente
    return () => {
      document.body.removeChild(customEventsScript);
      document.body.removeChild(communicationScript);
    };
  }, []);

  return (
    <div style={{ position: 'relative', top: '0px', left: '0px' }}>
      <iframe
        id="karve-iframe"
        width="100%"
        height="100px"
        frameBorder="0"
        scrolling="no"
        data-src="https://iframes.karveinformatica.com/AinacarIframe/views/home.php?lang=es"
        data-src-loading="https://iframes.karveinformatica.com/AinacarIframe/views/loading.php"
      ></iframe>
    </div>
  );
};

export default ReservationWidgetTest;






/*
const ReservationWidgetTest = ({ margin }) => {
  const { i18n } = useTranslation();
  const [iframeLoaded, setIframeLoaded] = useState(false);

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

    const communicationScriptSrc = 'https://ainacar.cat/proxy.php?url=https://iframes.karveinformatica.com/AinacarIframe/js/iframe-comunication-parent.js';

    const init = async () => {
      try {
        removeScript(communicationScriptSrc);
        await loadScript(communicationScriptSrc, 'karve-comunication-script', { minheight: '500' });
      } catch (error) {
        console.error(error);
      }
    };

    init();

    return () => {
      removeScript(communicationScriptSrc);
    };
  }, [i18n.language]);

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
        src={`https://ainacar.cat/proxy.php?url=https://iframes.karveinformatica.com/AinacarIframe/views/home.php?lang=${i18n.language}`}
        data-src-loading={`https://ainacar.cat/proxy.php?url=https://iframes.karveinformatica.com/AinacarIframe/views/loading.php`}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        allow="cross-origin"
        onLoad={() => setIframeLoaded(true)}
      ></iframe>
      {!iframeLoaded && <div>Loading...</div>}
    </div>
  );
};

export default ReservationWidgetTest;*/
