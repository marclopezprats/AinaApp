// src/components/StyledIframe.js
import React, { useEffect, useRef } from 'react';

const StyledIframe = ({ src, loadingSrc, width, height }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const applyStyles = () => {
      const styles = `
        #searcher-form {
          width: 100% !important;
        }
        body, h1, h2, h3, h4 {
          font-family: 'Oswald', sans-serif !important;
        }
        body {
          background: #fff;
        }
        .main-form .card-header {
          display: none;
        }
        #reserve-progress-bar {
          margin-top: 20px !important;
        }
        input.btn-primary, button.btn-primary {
          background-color: #d51317 !important;
        }
        .blink {
          animation-duration: 1.5s;
          animation-name: blink;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: ease-in-out;
        }
        @keyframes blink {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        .color {
          color: red;
        }
        #searcher-form .card-footer {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .msg_bolar {
          font-size: 20px;
          font-weight: 600;
          text-align: left;
          margin-bottom: 35px;
        }
        .display-resp { display: none; }
        .col-msg { width: 58.33%; float: left; }
        .col-btn { width: 41.67%; float: left; }
        @media (min-width: 768px) and (max-width: 1199px) {
          .display-resp { display: block; }
          .msg_bolar { text-align: center; }
          .col-msg { width: 58.33%; }
          .col-btn { width: 41.67%; }
        }
        @media (max-width: 767px) {
          .display-resp { display: block; }
          .msg_bolar { text-align: center; margin-bottom: 20px; }
          .col-msg { width: 100%; }
          .col-btn { width: 100%; }
        }
        @media (max-width: 480px) {
          /* Puedes añadir estilos específicos para dispositivos muy pequeños aquí */
        }
      `;
      iframe.contentWindow.postMessage({ type: 'applyStyles', styles }, 'https://iframes.karveinformatica.com');
    };

    iframe.onload = applyStyles;
  }, []);

  return (
    <iframe
      ref={iframeRef}
      width={width}
      height={height}
      frameBorder="0"
      scrolling="no"
      src={src}
      data-src-loading={loadingSrc}
    ></iframe>
  );
};

export default StyledIframe;
