import styled from 'styled-components';

type CarouselContainerProps = {
    width: string;
    height: string;
};

export const CarouselContainer = styled.div<CarouselContainerProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    overflow: hidden;
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
