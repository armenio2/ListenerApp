import React, { useEffect } from 'react';
import { useSegment } from './SegmentProvider';

const SegmentListener = () => {
    const sendEventToSegment = useSegment();

    useEffect(() => {
        const handleClick = (event) => {
            // Aqui você pode fazer qualquer manipulação de eventos antes de enviar para o Segment
            console.log('Evento de clique capturado:', event.target);

            // Envie o evento para o Segment
            sendEventToSegment('click', { target: event.target });
        };

        // Adicione um event listener para capturar cliques no documento inteiro
        document.addEventListener('click', handleClick);

        // Remova o event listener quando o componente for desmontado
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [sendEventToSegment]);

    // Este componente não renderiza nada diretamente
    return null;
};

export default SegmentListener;
