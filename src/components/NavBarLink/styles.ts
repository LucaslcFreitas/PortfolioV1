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

    svg {
        display: none;
        color: ${({ theme }) => theme.colors.gradientAlternatePrimary};
        font-size: 1.6rem;
    }

    &:hover {
        background-color: ${({ theme }) =>
            theme.colors.backgroundSecondaryHover};
    }

    @media ${({ theme }) => theme.media.smallMobile} {
        justify-content: center;

        svg {
            font-size: 2rem;
        }
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        width: auto;
        height: 7rem;
        min-height: 7rem;
        flex-direction: column;

        svg {
            display: block;
        }

        &:hover {
            background-color: transparent;
        }
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

    @media ${({ theme }) => theme.media.smallMobile} {
        display: none;
    }

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 1.8rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 2rem;
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        transform: rotate(0deg);
        writing-mode: horizontal-tb;
    }
`;
