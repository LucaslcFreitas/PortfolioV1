import styled from 'styled-components';

export const NavContainer = styled.nav`
    position: fixed;
    width: 7rem;
    height: 100vh;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border-right-width: 0.5rem;
    border-right-style: solid;
    border-image: linear-gradient(
            to bottom,
            ${({ theme }) => theme.colors.gradientMainPrimary},
            ${({ theme }) => theme.colors.gradientMainSecondary}
        )
        1 100%;
    box-shadow: 5px 0 7px 2px #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        position: fixed;
        width: 3rem;
        height: 3rem;
        top: 0;
        left: 7rem;
        background-image: url('./assets/nav-bf.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    &::after {
        content: '';
        position: fixed;
        width: 3rem;
        height: 3rem;
        bottom: 0;
        left: 7rem;
        background-image: url('./assets/nav-af.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
