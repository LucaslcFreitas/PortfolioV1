import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
    position: relative;
    width: 130rem;
    margin: 5rem auto;
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
`;

export const Title = styled.h2`
    display: inline;
    font-size: 3.6rem;
`;
