import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
    position: relative;
    width: ${({ theme }) => theme.container.large};
    margin: 5rem auto;

    @media ${({ theme }) => theme.media.smallMobile} {
        width: ${({ theme }) => theme.container.smallMobile};
        margin: 2rem auto;
        padding: 1.5rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        width: ${({ theme }) => theme.container.mobile};
    }

    @media ${({ theme }) => theme.media.tablet} {
        width: ${({ theme }) => theme.container.tablet};
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        width: ${({ theme }) => theme.container.small};
    }

    @media ${({ theme }) => theme.media.normalDesktop} {
        width: ${({ theme }) => theme.container.medium};
    }
`;

export const TitleBox = styled.div`
    display: inline;
    position: relative;
    text-align: center;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(
        0.25turn,
        ${({ theme }) => theme.colors.gradientMainPrimary},
        ${({ theme }) => theme.colors.gradientMainSecondary}
    );
    border-image-slice: 1;
    padding-bottom: 1rem;

    @media ${({ theme }) => theme.media.smallMobile} {
        padding-bottom: 0.5rem;
    }
`;

export const Title = styled.h2`
    display: inline;
    font-size: 3.6rem;

    @media ${({ theme }) => theme.media.smallMobile} {
        font-size: 2.2rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 2.2rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 2.8rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        font-size: 3.2rem;
    }
`;
