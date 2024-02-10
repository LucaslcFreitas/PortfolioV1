import * as Styled from './styles';

type NavBarLinkProps = {
    text: string;
    to: string;
    selected?: boolean;
    openInNewTab?: boolean;
};

function NavBarLink({
    text,
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
            <Styled.NavText>{text}</Styled.NavText>
        </Styled.NavLink>
    );
}

export default NavBarLink;
