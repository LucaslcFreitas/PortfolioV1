import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.5rem;
    width: 100%;
    background-image: url('./assets/presentation-bg-xlarge.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media ${({ theme }) => theme.media.smallMobile} {
        background-image: url('./assets/presentation-bg-small.svg');
    }

    @media ${({ theme }) => theme.media.mobile} {
        background-image: url('./assets/presentation-bg-small.svg');
    }

    @media ${({ theme }) => theme.media.tablet} {
        background-image: url('./assets/presentation-bg-normal.svg');
    }
`;

export const Content = styled.div`
    position: relative;
    width: ${({ theme }) => theme.container.medium};
    margin: 9rem auto;
    display: flex;
    gap: 13rem;
    align-items: center;
    justify-content: center;

    @media ${({ theme }) => theme.media.smallMobile} {
        flex-direction: column;
        width: ${({ theme }) => theme.container.smallMobile};
        gap: 7rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        width: ${({ theme }) => theme.container.mobile};
        gap: 1rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        width: ${({ theme }) => theme.container.tablet};
        gap: 6rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        width: ${({ theme }) => theme.container.small};
    }
`;

export const ProfileBox = styled.div`
    position: relative;
    width: 37.5rem;
    height: 37.5rem;
    padding: 0.8rem;
    display: inline-block;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        padding: 1rem;
        background: linear-gradient(
            135deg,
            ${({ theme }) => theme.colors.gradientMainPrimary},
            ${({ theme }) => theme.colors.gradientMainSecondary}
        );
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }

    @media ${({ theme }) => theme.media.smallMobile} {
        width: 22rem;
        height: 22rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        width: 22rem;
        height: 22rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        width: 30rem;
        height: 30rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        width: 33.5rem;
        height: 33.5rem;
    }

    @media ${({ theme }) => theme.media.normalDesktop} {
        width: 35.5rem;
        height: 35.5rem;
    }
`;

export const ImgProfile = styled.img`
    position: relative;
    width: 36rem;
    height: 36rem;
    border-radius: 50%;

    @media ${({ theme }) => theme.media.smallMobile} {
        width: 20.5rem;
        height: 20.5rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        width: 20.5rem;
        height: 20.5rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        width: 28.5rem;
        height: 28.5rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        width: 32rem;
        height: 32rem;
    }

    @media ${({ theme }) => theme.media.normalDesktop} {
        width: 34rem;
        height: 34rem;
    }
`;

export const Presentation = styled.h2`
    font-size: 4.4rem;
    margin-bottom: 1rem;

    @media ${({ theme }) => theme.media.smallMobile} {
        font-size: 2.6rem;
        margin-bottom: 0.5rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 2.6rem;
        margin-bottom: 0.5rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 3rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        font-size: 3.4rem;
    }

    @media ${({ theme }) => theme.media.normalDesktop} {
        font-size: 3.8rem;
    }
`;

export const Name = styled.h1`
    font-size: 5.8rem;
    color: ${({ theme }) => theme.colors.titleAlternate};

    @media ${({ theme }) => theme.media.smallMobile} {
        font-size: 4rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 4rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 4.6rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        font-size: 5rem;
    }

    @media ${({ theme }) => theme.media.normalDesktop} {
        font-size: 5.4rem;
    }
`;

export const Description = styled.h3`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.paragraph};
    margin-left: 0.3rem;
    margin-bottom: 3rem;

    @media ${({ theme }) => theme.media.smallMobile} {
        font-size: 1.4rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 1.4rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 1.4rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        font-size: 1.6rem;
    }

    @media ${({ theme }) => theme.media.normalDesktop} {
        font-size: 1.8rem;
    }
`;

export const ButtonContact = styled.button`
    border-radius: 3rem;
    padding: 1.5rem 3rem;
    background: linear-gradient(
        90deg,
        rgba(61, 84, 221, 1) 0%,
        rgba(99, 121, 250, 1) 100%
    );
    border-style: none;
    color: ${({ theme }) => theme.colors.write};
    cursor: pointer;
    font-family: 'Lexend Exa', sans-serif;

    &:hover {
        background: rgba(61, 84, 221, 1);
    }

    @media ${({ theme }) => theme.media.smallMobile} {
        padding: 1rem 2rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        padding: 1rem 2rem;
    }
`;
