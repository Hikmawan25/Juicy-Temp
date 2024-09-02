import React from 'react';
import { Button } from '@components';
import { Whatsapp } from 'react-bootstrap-icons';

const WhatsApp = ({ phoneNumber, message, text }) => {
    const handleWhatsAppRedirect = () => {
        const endcodeMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${endcodeMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div>
            <Button
                onClick={handleWhatsAppRedirect}
                variant="primary"
                styleVariant="default"
                className="min-w-12">
                <Whatsapp size={16} />
                {text}
            </Button>
        </div>
    );
};

export default WhatsApp;
