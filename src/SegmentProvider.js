import React, { createContext, useContext } from 'react';

// Criando um contexto para armazenar a função de envio de eventos do Segment
const SegmentContext = createContext();

// Hook personalizado para acessar o contexto do Segment
export const useSegment = () => {
    return useContext(SegmentContext);
};

// Componente Provedor que envolve sua aplicação e fornece a função de envio de eventos do Segment
export const SegmentProvider = ({ children }) => {
    // Função para enviar eventos para o Segment
    const sendEventToSegment = (eventName, eventData) => {
        // Aqui você deve implementar a lógica para enviar o evento para o Segment
        console.log('Enviando evento para o Segment:', eventName, eventData);
    };

    return (
        <SegmentContext.Provider value={sendEventToSegment}>
            {children}
        </SegmentContext.Provider>
    );
};
