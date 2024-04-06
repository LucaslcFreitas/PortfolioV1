import React from 'react';
import * as Styled from './styles';

export type ContactType = {
    icon: React.ReactNode;
    title: string;
    value: string;
    link?: string;
    type: 'link' | 'email';
};

function ContactCard({ icon, title, value, link, type }: ContactType) {
    return (
        <Styled.Card
            href={type === 'link' ? link : `mailto:${value}`}
            target={type === 'link' ? '_blank' : '_self'}
        >
            <Styled.Icon>{icon}</Styled.Icon>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{value}</Styled.Description>
        </Styled.Card>
    );
}

export default ContactCard;
