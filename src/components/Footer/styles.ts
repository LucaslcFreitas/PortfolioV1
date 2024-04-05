import styled from 'styled-components';

export const FooterContainer = styled.footer`
    position: relative;
    width: 130rem;
    margin: 7rem auto;
    padding: 4rem;
    border-top: 0.2rem solid ${({ theme }) => theme.colors.backgroundTertiary};
`;

export const FooterText = styled.p`
    text-align: center;
    font-size: 1.2rem;
`;
