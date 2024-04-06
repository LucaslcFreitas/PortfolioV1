import styled from 'styled-components';

export const Card = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    text-decoration: none;
    transition: all 300ms;

    &:hover {
        transform: scale(1.1);
    }

    @media ${({ theme }) => theme.media.smallMobile} {
        margin-top: 1rem;

        &:hover {
            transform: scale(1);
        }
    }

    @media ${({ theme }) => theme.media.mobile} {
        &:hover {
            transform: scale(1);
        }
    }
`;

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 11rem;
    height: 11rem;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 50%;

    svg {
        color: ${({ theme }) => theme.colors.titleAlternate};
        font-size: 4rem;
    }

    @media ${({ theme }) => theme.media.smallMobile} {
        width: 7rem;
        height: 7rem;

        svg {
            font-size: 2rem;
        }
    }

    @media ${({ theme }) => theme.media.mobile} {
        width: 7rem;
        height: 7rem;

        svg {
            font-size: 2rem;
        }
    }

    @media ${({ theme }) => theme.media.tablet} {
        width: 9rem;
        height: 9rem;

        svg {
            font-size: 3rem;
        }
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        width: 9rem;
        height: 9rem;

        svg {
            font-size: 3rem;
        }
    }
`;

export const Title = styled.h4`
    font-size: 1.8rem;
    margin: 1.5rem 0;

    @media ${({ theme }) => theme.media.smallMobile} {
        font-size: 1.4rem;
        margin: 1.2rem 0;
    }

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 1.4rem;
        margin: 1.2rem 0;
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 1.6rem;
        margin: 1.2rem 0;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        font-size: 1.6rem;
        margin: 1.2rem 0;
    }
`;

export const Description = styled.p`
    font-size: 1.6rem;

    @media ${({ theme }) => theme.media.smallMobile} {
        font-size: 1.2rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 1.2rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 1.4rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        font-size: 1.4rem;
    }
`;
