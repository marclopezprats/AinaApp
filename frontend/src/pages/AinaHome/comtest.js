import React, { useEffect, useState } from 'react';

const StepListener = ({ onStepChange }) => {
  const [currentStep, setCurrentStep] = useState('');
  const [nextStep, setNextStep] = useState('');

  useEffect(() => {
    // Función para obtener los valores de los atributos data-*
    const getStepData = () => {
      const reserveStep = document.body.getAttribute('data-reserve-step');
      const nextReserveStep = document.body.getAttribute('data-next-reserve-step');
      setCurrentStep(reserveStep || 'Not available');
      setNextStep(nextReserveStep || 'Not available');
      console.log('Current Step:', reserveStep);
      console.log('Next Step:', nextReserveStep);
      if (onStepChange) {
        onStepChange({ currentStep: reserveStep, nextStep: nextReserveStep });
      }
    };

    getStepData(); // Llamar a la función al montar el componente

    // Configurar MutationObserver para detectar cambios en los atributos
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && (mutation.attributeName === 'data-reserve-step' || mutation.attributeName === 'data-next-reserve-step')) {
          getStepData(); // Actualizar el estado cuando los atributos cambian
        }
      }
    });

    observer.observe(document.body, {
      attributes: true, // Observar cambios en los atributos
      attributeFilter: ['data-reserve-step', 'data-next-reserve-step'] // Observar solo estos atributos
    });

    return () => {
      observer.disconnect();
    };
  }, [onStepChange]);

  return null; // Este componente no renderiza nada
};

export default StepListener;
