import React from 'react';
import * as Styled from './styles';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaInfoCircle } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export type ContactType = {
    icon: string;
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
            <Styled.Icon>
                {icon.toLowerCase() === 'mdemail' ? (
                    <MdEmail />
                ) : icon.toLowerCase() === 'falinkedinin' ? (
                    <FaLinkedinIn />
                ) : icon.toLowerCase() === 'figithub' ? (
                    <FiGithub />
                ) : (
                    <FaInfoCircle />
                )}
            </Styled.Icon>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{value}</Styled.Description>
        </Styled.Card>
    );
}

export default ContactCard;
