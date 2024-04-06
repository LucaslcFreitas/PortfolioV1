import styled from 'styled-components';
import { keyframes } from 'styled-components';

type ContainerProjectProps = {
    thumbnail: string;
};

export const ProjectTitle = styled.p`
    color: ${({ theme }) => theme.colors.title};
    font-size: 2.8rem;
    font-weight: bold;
    z-index: 10;
    opacity: 1;
    visibility: visible;
    transition: all 300ms;

    @media ${({ theme }) => theme.media.smallMobile} {
        font-size: 2rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 2rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 2rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        font-size: 2.4rem;
    }
`;

export const FooterSubitle = styled.p`
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.8rem;
    font-weight: bold;
    opacity: 1;
    visibility: visible;

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 1.4rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        font-size: 1.6rem;
    }
`;

export const FooterButton = styled.button`
    position: relative;
    width: 8rem;
    padding: 0.2rem;
    border: 1px solid ${({ theme }) => theme.colors.write};
    border-radius: 0.5rem;
    background-color: transparent;
    font-family: 'Lexend Exa', sans-serif;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.write};
    letter-spacing: -0.1rem;
    cursor: pointer;
    transition: all 300ms;

    &:hover {
        background-color: ${({ theme }) => theme.colors.write};
        color: ${({ theme }) => theme.colors.grey};
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 1rem;
        width: 6rem;
    }
`;

const showIn = keyframes`
  0% {
    bottom: 0;
  }

  75% {
    bottom: 0;
  }

  100% {
    bottom: -4rem;
  }
`;

export const ProjectFooter = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    bottom: 0;
    width: 100%;
    height: 5rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.gradientMainPrimary};
    border-radius: 0 0 1rem 1rem;
    z-index: -10;
    transition-duration: 300ms;

    @media ${({ theme }) => theme.media.smallMobile} {
        display: none;
    }

    @media ${({ theme }) => theme.media.mobile} {
        display: none;
    }

    @media ${({ theme }) => theme.media.tablet} {
        height: 4rem;
        padding: 0.5rem;
    }
`;

export const ContainerProject = styled.div<ContainerProjectProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 26rem;
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.backgroundTertiary};
    border-radius: 1rem;
    transition: all 200ms;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        z-index: 0;
        background-image: url(${({ thumbnail }) => thumbnail});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 1rem;
        z-index: 1;
        opacity: 1;
        visibility: visible;
        transition: all 300ms;
    }

    &:hover {
        cursor: pointer;
        z-index: 20;
        transform: scale(1.1);

        ${ProjectTitle}, &::after {
            opacity: 0;
            visibility: hidden;
        }

        ${ProjectFooter} {
            bottom: -4rem;
            animation: ${showIn} 400ms linear;
        }
    }

    @media ${({ theme }) => theme.media.smallMobile} {
        height: calc((100vw / 16) * 9);

        &:hover {
            transform: scale(1);

            ${ProjectTitle}, &::after {
                opacity: 1;
                visibility: visible;
            }

            ${ProjectFooter} {
                bottom: 0;
            }
        }
    }

    @media ${({ theme }) => theme.media.mobile} {
        height: 32rem;

        &:hover {
            transform: scale(1);

            ${ProjectTitle}, &::after {
                opacity: 1;
                visibility: visible;
            }

            ${ProjectFooter} {
                bottom: 0;
            }
        }
    }

    @media ${({ theme }) => theme.media.tablet} {
        height: 20rem;

        &:hover {
            ${ProjectFooter} {
                bottom: -3rem;
            }
        }
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        height: 24rem;
    }

    @media ${({ theme }) => theme.media.normalDesktop} {
        height: 23rem;
    }
`;
