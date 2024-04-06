import styled from 'styled-components';

export const SkillImg = styled.img`
    position: relative;
    top: -1rem;
    width: 5rem;
    height: 5rem;
    filter: grayscale(100%);
    transition: all 300ms;

    @media ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        filter: grayscale(0%);
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

export const SkillTitle = styled.p`
    position: absolute;
    min-width: 8rem;
    padding: 0.3rem;
    top: 4.5rem;
    text-align: center;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.colors.backgroundTertiary};
    transition: all 300ms;

    @media ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        color: ${({ theme }) => theme.colors.title};
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        min-width: 6rem;
        top: 3.5rem;
        font-size: 1.1rem;
        padding: 0.2rem;
    }
`;

export const ContainerCard = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;
    width: 10rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-right: 3px solid ${({ theme }) => theme.colors.backgroundTertiary};
    border-left: 3px solid ${({ theme }) => theme.colors.backgroundTertiary};
    transition: all 300ms;

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: -10;
        width: 6.9rem;
        height: 6.9rem;
        transform: rotate(-45deg);
        transition: all 300ms;
    }

    &::before {
        top: -3.5rem;
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        border-right: 3px solid
            ${({ theme }) => theme.colors.backgroundTertiary};
        border-top: 3px solid ${({ theme }) => theme.colors.backgroundTertiary};
    }

    &::after {
        top: 1.4rem;
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        border-left: 3px solid ${({ theme }) => theme.colors.backgroundTertiary};
        border-bottom: 3px solid
            ${({ theme }) => theme.colors.backgroundTertiary};
    }

    &:hover {
        transform: scale(1.1);
        border-right-color: ${({ theme }) =>
            theme.colors.gradientAlternatePrimary};
        border-left-color: ${({ theme }) =>
            theme.colors.gradientAlternatePrimary};

        &::before {
            border-right-color: ${({ theme }) =>
                theme.colors.gradientAlternatePrimary};
            border-top-color: ${({ theme }) =>
                theme.colors.gradientAlternatePrimary};
        }
        &::after {
            border-left-color: ${({ theme }) =>
                theme.colors.gradientAlternatePrimary};
            border-bottom-color: ${({ theme }) =>
                theme.colors.gradientAlternatePrimary};
        }
    }

    &:hover ${SkillImg} {
        filter: grayscale(0%);
    }

    &:hover ${SkillTitle} {
        color: ${({ theme }) => theme.colors.title};
    }

    @media ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        width: 8rem;
        height: 4rem;
        border-right-color: ${({ theme }) =>
            theme.colors.gradientAlternatePrimary};
        border-left-color: ${({ theme }) =>
            theme.colors.gradientAlternatePrimary};

        &:hover {
            transform: scale(1);
        }

        &::before,
        &::after {
            width: 5.3rem;
            height: 5.3rem;
        }

        &::before {
            top: -2.9rem;
            border-right-color: ${({ theme }) =>
                theme.colors.gradientAlternatePrimary};
            border-top-color: ${({ theme }) =>
                theme.colors.gradientAlternatePrimary};
        }

        &::after {
            top: 1.3rem;
            border-left-color: ${({ theme }) =>
                theme.colors.gradientAlternatePrimary};
            border-bottom-color: ${({ theme }) =>
                theme.colors.gradientAlternatePrimary};
        }
    }

    @media ${({ theme }) => theme.media.tablet} {
        width: 8rem;
        height: 4rem;

        &::before,
        &::after {
            width: 5.3rem;
            height: 5.3rem;
        }

        &::before {
            top: -2.9rem;
        }

        &::after {
            top: 1.3rem;
        }
    }
`;
