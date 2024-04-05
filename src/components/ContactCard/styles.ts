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
`;

export const Title = styled.h4`
    font-size: 1.8rem;
    margin: 1.5rem 0;
`;

export const Description = styled.p`
    font-size: 1.6rem;
`;
