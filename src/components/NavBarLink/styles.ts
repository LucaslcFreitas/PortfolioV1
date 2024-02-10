import styled from 'styled-components';

type NavLinkProps = {
    selected: boolean;
};

export const NavLink = styled.a<NavLinkProps>`
    position: relative;
    width: 6rem;
    min-height: 12rem;
    padding: 0.8rem 0;
    text-decoration: none;
    background-color: ${(props) =>
        props.selected
            ? props.theme.colors.backgroundSecondaryHover
            : 'transparent'};
    box-shadow: ${(props) =>
        props.selected ? '7px 0 15px 0 rgba(240, 72, 57, 0.5)' : 'none'};
    display: flex;
    align-items: center;
    transition: all 300ms;

    &:hover {
        background-color: ${({ theme }) =>
            theme.colors.backgroundSecondaryHover};
    }
`;

export const NavText = styled.p`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 2.4rem;
    font-family: 'Kdam Thmor Pro', sans-serif;
    text-shadow: 0 0 6px rgba(240, 72, 57, 0.25);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(-180deg);
    margin: auto;
`;
