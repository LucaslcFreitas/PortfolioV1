import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

export const ModalGlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        height: 100%;
        overflow: hidden;
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
`;

export const ContainerModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 300ms linear;
`;

const showContent = keyframes`
    0% {
        transform: translateY(10px);
        opacity: 0;
    }

    100% {
        transform: translateY(-10px);
        opacity: 1;
    }
`;

export const ContentModal = styled.div`
    position: relative;
    display: flex;
    width: 110rem;
    height: 50rem;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    overflow: hidden;
    border-radius: 1rem;
    transform: translateY(-10px);
    animation: ${showContent} 300ms linear;

    @media ${({ theme }) => theme.media.smallMobile} {
        flex-direction: column;
        width: 95%;
        height: 80vh;
        max-height: 90vh;
        overflow-y: auto;
    }

    @media ${({ theme }) => theme.media.mobile} {
        flex-direction: column;
        width: 56rem;
        height: 80vh;
        max-height: 90vh;
        overflow-y: auto;
    }

    @media ${({ theme }) => theme.media.tablet} {
        flex-direction: column;
        width: 70rem;
        height: 70rem;
        overflow-y: auto;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        width: 90rem;
        height: 45rem;
    }
`;

export const Galery = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50rem;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};

    & > svg {
        display: none;
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2.2rem;
        color: ${({ theme }) => theme.colors.write};
        cursor: pointer;
        z-index: 20;
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        width: 100%;

        & > svg {
            display: block;
        }
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        width: 40.5rem;
    }
`;

export const Datas = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    overflow-y: auto;

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        overflow-y: visible;
    }
`;

export const HeadTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    h3 {
        font-size: 1.8rem;
    }

    svg {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.colors.write};
        cursor: pointer;
    }

    @media ${({ theme }) => theme.media.smallMobile} {
        margin-bottom: 1rem;
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        h3 {
            font-size: 1.6rem;
        }

        svg {
            display: none;
        }
    }
`;

export const Descriptions = styled.p`
    margin: 1rem 0;
    font-size: 1.4rem;

    @media ${({ theme }) => theme.media.smallMobile} {
        margin: 0.5rem 0;
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        font-size: 1.2rem;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const Link = styled.a`
    border-radius: 0.5rem;
    font-size: 1.2rem;
    padding: 1rem;
    background-color: rgba(99, 121, 250, 1);
    text-decoration: none;
    color: ${({ theme }) => theme.colors.write};
    cursor: pointer;

    &:hover {
        background: rgba(61, 84, 221, 1);
    }
    transition: all 300ms linear;

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        padding: 0.7rem;
    }
`;
