import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.5rem;
    width: 100%;
    background-image: url('./assets/presentation-bg-xlarge.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Content = styled.div`
    position: relative;
    width: 100rem;
    margin: 9rem auto;
    display: flex;
    gap: 13rem;
    align-items: center;
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
`;

export const ImgProfile = styled.img`
    position: relative;
    width: 36rem;
    height: 36rem;
    border-radius: 50%;
`;

export const Presentation = styled.h2`
    font-size: 4.4rem;
    margin-bottom: 1rem;
`;

export const Name = styled.h1`
    font-size: 5.8rem;
    color: ${({ theme }) => theme.colors.titleAlternate};
`;

export const Description = styled.h3`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.paragraph};
    margin-left: 0.3rem;
    margin-bottom: 3rem;
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

    &:hover {
        background: rgba(61, 84, 221, 1);
    }
`;
