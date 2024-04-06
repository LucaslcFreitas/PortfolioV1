import React from 'react';
import * as Styled from './styles';

type NavBarLinkProps = {
    text: string;
    icon: React.ReactNode;
    to: string;
    selected?: boolean;
    openInNewTab?: boolean;
};

function NavBarLink({
    text,
    icon,
    to,
    selected = false,
    openInNewTab = false,
}: NavBarLinkProps) {
    return (
        <Styled.NavLink
            selected={selected}
            href={to}
            target={openInNewTab ? '_blank' : '_self'}
            rel="noreferrer"
        >
            {icon}
            <Styled.NavText>{text}</Styled.NavText>
        </Styled.NavLink>
    );
}

export default NavBarLink;
