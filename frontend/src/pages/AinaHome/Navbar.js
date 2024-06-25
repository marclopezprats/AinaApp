import React, { useState, useEffect } from 'react';
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

const MyStickyNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Contacto",
          color: "primary",
        }}
        transparent={!isScrolled}
        relative
        light
        center
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          transition: 'background-color 0.3s ease',
        }}
      />
      
    </div>
  );
};

export default MyStickyNavbar;
