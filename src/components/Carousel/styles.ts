import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50rem;
    height: 30rem;
    overflow: hidden;

    @media ${({ theme }) => theme.media.smallMobile} {
        width: 100%;
        height: calc((100vw / 16) * 9);
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile} {
        width: 50rem;
        height: 30rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        width: 40.5rem;
        height: 24.3rem;
    }
`;

type ArrowsProps = {
    visible: boolean;
};

export const ArrowBack = styled.button<ArrowsProps>`
    position: absolute;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 6rem;
    left: 0;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    cursor: pointer;
    border-radius: 0 0.5rem 0.5rem 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.backgroundTertiary};
    border-width: 0.2rem 0.2rem 0.2rem 0;
    z-index: 50;

    svg {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.title};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    }

    @media ${({ theme }) => theme.media.smallMobile} {
        width: 2rem;
        height: 4rem;

        svg {
            font-size: 1.4rem;
        }

        &:hover {
            background-color: ${({ theme }) =>
                theme.colors.backgroundSecondary};
        }
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile} {
        border-width: 0.2rem;
    }
`;

export const ArrowForward = styled.button<ArrowsProps>`
    position: absolute;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 6rem;
    right: 0;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    cursor: pointer;
    border-radius: 0.5rem 0 0 0.5rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.backgroundTertiary};
    border-width: 0.2rem 0 0.2rem 0.2rem;
    z-index: 50;

    svg {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.title};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    }

    @media ${({ theme }) => theme.media.smallMobile} {
        width: 2rem;
        height: 4rem;

        svg {
            font-size: 1.4rem;
        }

        &:hover {
            background-color: ${({ theme }) =>
                theme.colors.backgroundSecondary};
        }
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile} {
        border-width: 0.2rem;
    }
`;

type ImageViewProps = {
    left: string;
};

export const ImageView = styled.img<ImageViewProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    left: ${({ left }) => left};
    transition: all 300ms ease-in-out;
`;
